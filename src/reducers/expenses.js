const expensesReducerDefaultState = []

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        
        case "ADD_EXPENSE":

            let newState = state
            newState.push(action.expense)

            localStorage.setItem("expenses", JSON.stringify(newState))

            return newState

        
        case "EDIT_EXPENSE":


            let newState_ = state


            for (let i=0; i<newState_.length; i++) {
                if (newState_[i].name === action.expense.old_name) {
                    console.log('bulduuuu');
                    newState_[i] = action.expense
                    break
                }

                
            }


            localStorage.setItem("expenses", JSON.stringify(newState_))

            return newState_

                

        case "ADD_ALL_EXPENSES":
            return action.expenses



        case "REMOVE_EXPENSE":
        
            let filtered = state.filter((d) => d.name != action.expense.name)

            localStorage.setItem("expenses", JSON.stringify(filtered))

            return filtered


            
        default:
            return state;
    }



    


}







export default expensesReducer;