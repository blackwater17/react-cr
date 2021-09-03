import React from 'react';
import { addExpense } from '../actions/expenses'
import { addIncome } from '../actions/incomes'
import { connect } from 'react-redux';
import configureStore from '../store/configureStore';
import swal from 'sweetalert';



class Add extends React.Component {

    constructor(props) {
        super(props);
    }


    state = {
        type: undefined
    }


    componentDidMount() {
        let url_string = window.location.href
        let url = new URL(url_string);
        let type = url.searchParams.get("type");

        if (type != "expense" && type != "income") window.location.href = window.location.origin

        this.setState(() => ({
            type
        }))
        
    }



    add = () => {

        let name = document.getElementById("description_input").value
        let currency = document.getElementById("currency_input").value
        let value = parseInt(document.getElementById("value_input").value)
        let type = this.state.type






        if (this.state.type === "expense") {

            let expense = {
                name,
                currency,
                value,
                type
            }


            this.props.dispatch(addExpense(expense))    
        
        }

        else if (this.state.type === "income") {
            let income = {
                name,
                currency,
                value,
                type
            }

            this.props.dispatch(addIncome(income))

        }

        document.querySelectorAll("input").forEach((d) => d.value = "")

        //alert(this.state.type + " added!")
        swal ( "Successful." ,  this.capitalizeFirstLetter(this.state.type) + " is added!" ,  "success" )

       
    
    }


    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }


    render() {

        return (

            <div className="form-container">

                <div className="add-form">
                    <input id="description_input" name="description_input" type="text" placeholder="Add description..." /> 
                    
                    <input id="value_input" name="value_input" type="text" placeholder="Enter amount..." type="number" /> 
        
                    <div className="select-container">

                        
                            <select name="currencies" id="currency_input">
                                <option value="try">TRY</option>
                                <option value="usd">USD</option>
                                <option value="euro">EURO</option>
                            </select>

                        </div>



                    <button onClick={this.add}>Add {this.state.type}!</button>
                </div>

            </div>
        
        )
    }

}










const mapStateToProps = (state) => {
    return {
        expenses: state.expenses,
        incomes: state.incomes
    }
}




export default connect(mapStateToProps)(Add);

