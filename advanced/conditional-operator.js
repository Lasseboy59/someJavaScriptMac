// const humidityStep = 65

// humidityStep > 60 ? console.log('Lot of moisture') : console.log('Moisture ok')

// const myAge = 17
// let message

// if(myAge >= 18){
//     message = 'You can vote'
// } else {
//     message = 'You cannot vote'
// }

// myAge >= 18 ? message = 'You can vote' : message = 'You cannot vote'

// console.log(message)

const myAge = 27
const showPage = () => {
    return 'Showing the page'
}
const showErrorPage = () => {
    return 'Show error page'
}

const message =  myAge >= 21 ? showPage() : showErrorPage()
console.log(message)

const team = ['Tyler', 'Porter', 'Tom', 'Ann', 'Tim']
// 1. "print team size: 3" , if less than equal to 4
// 2. print "Too many people on your team"

team.length <= 4 ? console.log(`Team size: ${team.length} `) : console.log('Too many people in your team')

console.log(team.length <= 4 ? `Team size: ${team.length}` : 'Too many people on your team')
