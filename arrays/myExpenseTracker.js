const account = {
    name: 'Lasse',
    expenses: [],
    incomes: [],
    addExpense: function(description, amount){
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
    addIncome: function(description, amount){
        let totalIncome = 0
        this.incomes.push({
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function(){
        let totalExpenses = 0
        let totalIncome = 0
        let balance = 0
        
        this.expenses.forEach(function(expense){
            totalExpenses += expense.amount
        })
        this.incomes.forEach(function(income){
            totalIncome += income.amount
        })

        balance = totalIncome - totalExpenses

        return `${this.name} has balance of ${balance} $ with ${totalIncome} $ income and ${totalExpenses} $ in expenses.`
    }  
}

// Ecxpense -> discription , amount
// addExpense -> description, amount
// getAccountSummary -> total up all expenses -> Lasse Aro has $1250 in expenses.

// Add an income array 
// addIncome -> description, amount
// tweak getAccountSummary (income - expenses)
// Lauri has a balance of 200$. 300$ in income. 10   0$ in expense.

account.addExpense('Rent', 1000)
account.addExpense('Coffee', 5)
account.addIncome('salary', 2500)
console.log(account.getAccountSummary())