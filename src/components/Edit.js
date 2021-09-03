import React from 'react';

import { connect } from 'react-redux';
import { editExpense } from '../actions/expenses'
import { editIncome } from '../actions/incomes'



class Edit extends React.Component {

    constructor(props) {
        super(props);
    }


    state = {
        type: null,
        name: null,
        old_result: {name: "", value: "", currency: ""}
    }


    componentDidMount() {

        let url_string = window.location.href
        let url = new URL(url_string);


        let type = url.searchParams.get("type");

        if (type != "expense" && type != "income") window.location.href = window.location.origin

        this.setState(() => ({
            type
        }))
        

        let name = url.searchParams.get("name");

        this.setState(() => ({
            name
        }))




        let matchResult = {}

        if (type === "expense") {
            matchResult = this.props.expenses.find((e) => e.name === name)
        }

        else if (type === "income") {
            matchResult = this.props.incomes.find((e) => e.name === name)
        }

        this.setState(() => ({
            old_result: matchResult
        }))


    }



    edit = () => {
        
        let name = document.getElementById("description_input").value
        let currency = document.getElementById("currency_input").value
        let value = parseInt(document.getElementById("value_input").value)
        let type = this.state.type

        let old_name = this.state.old_result.name


        if (this.state.type === "expense") {

            let expense = {
                name,
                currency,
                value,
                type,
                old_name
            }


            this.props.dispatch(editExpense(expense))    
        
        }

        else if (this.state.type === "income") {
            let income = {
                name,
                currency,
                value,
                type,
                old_name
            }

            this.props.dispatch(editIncome(income))

        }


        document.querySelectorAll("input").forEach((d) => d.value = "")

        alert(this.state.type + " updated.")

        window.history.replaceState(null, "Edit Page", "/")
     
    
    }


    render() {

        return (

            <>

                <div className="old-info">
                    Current description: {this.state.old_result.name} | Current value: {this.state.old_result.value} | Current currency: {this.state.old_result.currency.toUpperCase()}
                </div>

                <div className="form-container">

                <div className="add-form">
                    <input id="description_input" name="description_input" type="text" placeholder="Add new description..." /> 
                    
                    <input id="value_input" name="value_input" type="text" placeholder="Add new amount..." type="number" /> 
        
                    <div className="select-container">

                        
                            <select name="currencies" id="currency_input">
                                <option value="try">TRY</option>
                                <option value="usd">USD</option>
                                <option value="euro">EURO</option>
                            </select>

                        </div>



                    <button onClick={this.edit}>Edit {this.state.type}</button>
                </div>

            </div>
        
            </>
        
        )
    }

}










const mapStateToProps = (state) => {
    return {
        expenses: state.expenses,
        incomes: state.incomes
    }
}




export default connect(mapStateToProps)(Edit);

