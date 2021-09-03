import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses'
import { removeIncome } from '../actions/incomes'


class ResultBox extends React.Component {

    constructor(props) {
        super(props)
    }



    delete = () => {  

        if (this.props.type === "expense") {
            this.props.dispatch(removeExpense({name: this.props.name}))    
        }

        else if (this.props.type === "income") {
            this.props.dispatch(removeIncome({name: this.props.name})) 
        }
        
    }

    edit = () => {
        //window.history.replaceState(null, "Edit Page", "/edit?type=" + this.props.type + "&name=" + this.props.name) // not consistent
        window.location.href = "/edit?type=" + this.props.type + "&name=" + this.props.name
    }


    render() {
        return (
                   
            <div className="result-box">
                <div className="result-name"><span>Description: </span>{this.props.name}</div>
                <div className="result-value"><span>Amount: </span>{this.props.value} {this.props.currency.toUpperCase()}</div>


                <div className="edit-result" onClick={this.edit}>EDIT</div>
                <div className="delete-result" onClick={this.delete}>DELETE</div>
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




export default connect(mapStateToProps)(ResultBox);


    
    