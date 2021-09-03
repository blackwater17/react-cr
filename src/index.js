import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routes/AppRouter'
import './styles/styles.css';
import { addAllExpenses } from './actions/expenses'
import { addAllIncomes } from './actions/incomes'
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';


const store = configureStore();



const expensesDefault = [

    {
        name: "Elektrik",
        currency: "TRY",
        value: 222,
        type: "expense"
        
    },
    {
        name: "Su",
        currency: "TRY",
        value: 333,
        type: "expense"

    },
    {
        name: "Doğalgaz",
        currency: "USD",
        value: 111,
        type: "expense"

    },
    {
        name: "Kurs",
        currency: "TRY",
        value: 44,
        type: "expense"

    },
    {
        name: "Mutfak alışverişi",
        currency: "TRY",
        value: 541,
        type: "expense"
     
    },
    {
        name: "Monitör",
        currency: "USD",
        value: 651,
        type: "expense"

    },


    {
        name: "Telefon",
        currency: "USD",
        value: 123,
        type: "expense"
       
    },
    {
        name: "Kıyafet alışverişi",
        currency: "TRY",
        value: 48,
        type: "expense"

    },
    

]


let savedExpenses = JSON.parse(localStorage.getItem("expenses"))

if (savedExpenses === null) {
    store.dispatch(addAllExpenses(expensesDefault))
    localStorage.setItem("expenses", JSON.stringify(expensesDefault))
}

else {
    store.dispatch(addAllExpenses(savedExpenses))
}





let savedIncomes = JSON.parse(localStorage.getItem("incomes"))

const incomesDefault = [

  {
      name: "Birinci iş",
      currency: "TRY",
      value: 2000,
      type: "income"

  },
  {
      name: "İkinci iş",
      currency: "TRY",
      value: 1400,
      type: "income"
 
  },
  {
      name: "Freelance",
      currency: "USD",
      value: 500,
      type: "income"

  }
  

]



if (savedIncomes === null) {
    store.dispatch(addAllIncomes(incomesDefault))
    localStorage.setItem("incomes", JSON.stringify(incomesDefault))
}

else {
    store.dispatch(addAllIncomes(savedIncomes))
}











const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);


ReactDOM.render(jsx, document.getElementById("app"))