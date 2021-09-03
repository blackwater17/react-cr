

import { createStore, combineReducers } from 'redux';

import expensesReducer from '../reducers/expenses';
import incomesReducer from '../reducers/incomes';
import filtersReducer from '../reducers/filters';





export default () => {

    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            incomes: incomesReducer,
            filters: filtersReducer

        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

    return store
}




