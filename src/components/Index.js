import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import ResultBox from './ResultBox'
import selectExpenses from '../selectors/selectExpenses';
import selectIncomes from '../selectors/selectIncomes';
import { setCurrencyFilter } from '../actions/filters'


class Index extends React.Component {


    state = {
        total_expense: null,
        total_income: null,
        current_currency: "TRY"
    }


    componentDidMount() {

        let current_currency = document.getElementById("currencies-filter").value
        this.props.dispatch(setCurrencyFilter(current_currency))

        /******************* */

        let total_expense = 0

        this.props.filtered_expenses.forEach((d) => {
            total_expense += d.value * this.getCurrencyValue(d.currency) // try cinsinde !!!
        })
      
        this.setState(() => ({
            total_expense
        }))

        
        /************ */
        
        let total_income = 0

        this.props.filtered_incomes.forEach((d) => {
            total_income += d.value * this.getCurrencyValue(d.currency)
        })
      
        this.setState(() => ({
            total_income
        }))


        /***************** */
        
    
    }


    getCurrencyValue = (currency_name) => {

        currency_name = currency_name.toLowerCase()

        let currency_value = null
      
        if (currency_name === "try") {
            currency_value = 1
        }

        else if (currency_name === "usd") {
            currency_value = 8.5
        }

        else if (currency_name === "euro") {
            currency_value = 10.7   
        }


        return currency_value

        
    }


    componentDidUpdate() {
       
        let currency_value = this.getCurrencyValue(document.getElementById("currencies").value)
       

        let total_expense = 0
        this.props.filtered_expenses.forEach((d) => {
            total_expense += d.value * this.getCurrencyValue(d.currency)
        })

      
        /*****/

        let total_income = 0
        this.props.filtered_incomes.forEach((d) => {
            total_income += d.value * this.getCurrencyValue(d.currency)
        })





        total_expense =  Math.round(total_expense / currency_value*100)/100;
        total_income = Math.round(total_income / currency_value*100)/100;


        if (this.state.total_expense != total_expense || this.state.total_income != total_income ) {

            this.setState(() => ({
                total_income,
                total_expense,
            }))
        }



    }




    onSelectChange = () => {

        let current_currency = document.getElementById("currencies").value // tl , usd

        if (this.state.current_currency != current_currency) {

       

            this.setState(() => ({
                current_currency
            }))

            
        }

        
        

    }

    
    onFilterChange = () => {
        let current_currency = document.getElementById("currencies-filter").value

        let currency_value = this.getCurrencyValue(document.getElementById("currencies").value)
        this.props.dispatch(setCurrencyFilter(current_currency))


    }



    render() {

        return (

            <div className="container">


            <div className="select-wrapper">

                <div className="filter-currency">

                    <label>Filter by:</label>
                    <select name="currencies-filter" id="currencies-filter" onChange={this.onFilterChange}>
                        <option value="">All Currencies</option>
                        <option value="try">TRY</option>
                        <option value="usd">USD</option>
                        <option value="euro">EURO</option>

                    </select>


                </div>



                <div className="select-container">

                    <label>Choose a currency:</label>
                    <select name="currencies" id="currencies" onChange={this.onSelectChange}>
                        <option value="try">TRY</option>
                        <option value="usd">USD</option>
                        <option value="euro">EURO</option>

                    </select>

                </div>


            </div>





                <div className="expenses-title category">Your Expenses:</div>

                <div className="expenses-container">

                    {this.props.filtered_expenses.map((expense) =>  <ResultBox key={expense.name} {...expense }  /> )}
             
                    
                    <NavLink to="/add?type=expense" exact={true}>  <div className="add-expense add">+ Add expense</div> </NavLink>

                    <div className="total-info total-expenses">Total: {this.state.total_expense} {this.state.current_currency.toUpperCase()} </div>
                </div>



                <div className="incomes-title category">Your Incomes:</div>

                <div className="incomes-container">

                    {this.props.filtered_incomes.map((income) =>  <ResultBox key={income.name} {...income }  /> )}

                    <NavLink to="/add?type=income" exact={true}>  <div className="add-income add">+ Add income</div> </NavLink>

                    <div className="total-info total-incomes">Total: {this.state.total_income} {this.state.current_currency.toUpperCase()} </div>

                </div>



            </div>

        )
    }

}











const mapStateToProps = (state) => {
    return {
        expenses: state.expenses,
        incomes: state.incomes,
        filtered_expenses: selectExpenses(state.expenses, state.filters),
        filtered_incomes: selectIncomes(state.incomes, state.filters),
    }
}




export default connect(mapStateToProps)(Index);

