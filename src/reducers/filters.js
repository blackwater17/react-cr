const filtersReducerDefaultState = {currency: ""} 

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case "SET_CURRENCY_FILTER":
            return {
                ...state,
                currency: action.currency,
            }


            
        default:
            return state;
    }
}

export default filtersReducer;