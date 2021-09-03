const incomesReducerDefaultState = []

const incomesReducer = (state = incomesReducerDefaultState, action) => {
    switch (action.type) {


        case "ADD_INCOME":
            let newState = state
            newState.push(action.income)

            localStorage.setItem("incomes", JSON.stringify(newState))

            return newState



        case "ADD_ALL_INCOMES":
            return action.incomes



        case "REMOVE_INCOME":
    
            let filtered = state.filter((d) => d.name != action.income.name)

            localStorage.setItem("incomes", JSON.stringify(filtered))

            return filtered

            
        case "EDIT_INCOME":

            let newState_ = state
            
            for (let i=0; i<newState_.length; i++) {
                if (newState_[i].name === action.income.old_name) {
                    newState_[i] = action.income
                    break
                }
            }


            localStorage.setItem("incomes", JSON.stringify(newState_))

            return newState_

        


        default:
            return state;
    }
}







export default incomesReducer;