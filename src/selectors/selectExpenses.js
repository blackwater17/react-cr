export default (expenses, {currency=""}) =>  {

    if (currency === "") return expenses


    return expenses.filter((e) => e.currency.toLowerCase() === currency.toLowerCase())


}






