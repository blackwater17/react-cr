export default (incomes, {currency=""}) =>  {

    if (currency === "") return incomes
    
    return incomes.filter((e) => e.currency.toLowerCase() === currency.toLowerCase())


}




