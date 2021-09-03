

// bu aslında sadece bir argüman..

export const addExpense = (
    {
        name = "Unknown_Expense_Name",
        value = "Unknown_Expense_Value",
        currency = "Unknown_Expense_Currency",
        type = "expense"
    } = {}

    ) => ({
        type: "ADD_EXPENSE",
        expense: {
            
            name,
            value,
            currency,
            type

        }
        })




export const addAllExpenses = (

    expenses = []

) => ({

    type: "ADD_ALL_EXPENSES",
    expenses
    
})

        
            

export const removeExpense = (
    {
        name = "Unknown_Expense_Name",

    } = {}

    ) => ({
        type: "REMOVE_EXPENSE",
        expense: {
            
            name

        }
        })



export const editExpense = (
    {
        name = "Unknown_Expense_Name",
        value = "Unknown_Expense_Value",
        currency = "Unknown_Expense_Currency",
        type = "expense",
        old_name = "Unknown_Old_Name"
    
    } = {}

    ) => ({
        type: "EDIT_EXPENSE",
        expense: {
            
            name,
            value,
            currency,
            type,
            old_name

        }
        })




