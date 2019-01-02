let myAccount = {
    name: 'Lasse Mäki',
    expenses: 0,
    income: 0
}


// addIncome  account + amount
// resetAccount(account)
// getAccountSummary  
// Account for Lasse has $400. $1000 in income. $100 in expense


let addIncome = function(account, amount) {
    account.income = account.income + amount
}{}

let addExpense = function(account, amount) {
    account.expenses = account.expenses + amount
}

let resetAccount= function(account) {
    account.expenses = 0
    account.income = 0
}

let getAccountSummary = function(account) {
    let saldo = account.income - account.expenses
    return {
        summary: `Account for ${account.name} has ${saldo}$. $${account.income} in income. $${account.expenses} in expenses.`,
    }
}

resetAccount(myAccount)
addIncome(myAccount, 20)
console.log(getAccountSummary(myAccount).summary)
addIncome(myAccount, 50)
addExpense(myAccount, 5)

console.log(getAccountSummary(myAccount).summary)
resetAccount(myAccount)
let saldo = getAccountSummary(myAccount).summary
console.log(saldo)