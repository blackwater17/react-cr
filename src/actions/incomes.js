

// bu aslında sadece bir argüman..

export const addIncome = (
    {
        name = "Unknown_Income_Name",
        value = "Unknown_Income_Value",
        currency = "Unknown_Income_Currency",
        type = "income"
        
    } = {}

    ) => ({
        type: "ADD_INCOME",
        income: {
            
            name,
            value,
            currency,
            type

        }
        })


export const addAllIncomes = (

    incomes = []

) => ({

    type: "ADD_ALL_INCOMES",
    incomes
    
})

        


export const removeIncome = (
    {
        name = "Unknown_Income_Name",

    } = {}

    ) => ({
        type: "REMOVE_INCOME",
        income: {
            
            name

        }
        })


export const editIncome = (
    {
        name = "Unknown_Income_Name",
        value = "Unknown_Income_Value",
        currency = "Unknown_Income_Currency",
        type = "income",
        old_name = "Unknown_Old_Name"
        
    } = {}

    ) => ({
        type: "EDIT_INCOME",
        income: {
            
            name,
            value,
            currency,
            type,
            old_name

        }
        })





