// // const calculateAverage = (thing, ...numbers) => {
// //     let sum = 0
// //     numbers.forEach((num) => sum += num)
// //     const average = sum / numbers.length
// //     return `The average ${thing} is ${average}`
// // }

// // console.log(calculateAverage('grade',50, 100, 200, 400))


// // const printTeam = (Team, Coach, ...team) => {
// //     var teams = []
// //     team.forEach((teamMember) => teams.push(teamMember))
// //     return `Team: ${Team}\nCoach: ${Coach}\nPlayers:${teams.join(',')}`
// // }

// // console.log(printTeam('Liberty', 'Casey Penn', 'Marge', 'Aiden', 'Herbert', 'Sherry'))
// // console.log('------------------')

// const printTeam2 = (Team, Coach, ...team) => {
// // const printTeam2 = (Team, Coach, firstPlayer, secondPlayer) => {
//     console.log(`Team: ${Team}`)
//     console.log(`Coach: ${Coach}`)
//     console.log(`Players: ${team.join(', ')}`)
//     // console.log(firstPlayer, secondPlayer)
// }

// const team = {
//     name: 'Liberty',
//     coach: ' Casey Penn',
//     players: ['Marge', 'Aiden', 'Herbert', 'Sherry']
// }
// printTeam2(team.name, team.coach, ...team.players)

// const cities = ['Barcelona', 'Cape Town', 'Paris']  // or let to 
// const citiesCopy = [...cities]
// const newCities = [...cities, 'Santiago']
// citiesCopy.push('Santiago')

// console.log(cities)
// console.log(citiesCopy)
// console.log(newCities)

// let house = {
//     bedrooms:2,
//     bathroom: 1.5,
//     yearBuilt: 2017
// }

// let newHouse = {
//     basement: true,
//     ...house,
//     bedrooms: 3
// }

// newHouse.yearBuilt = 2018

// console.log(house)
// console.log(newHouse)

// let person = {
//     name: 'Lasse',
//     age: 45
// }

// let location = {
//     city: 'Vantaa',
//     country: 'Finland'
// }

// let overview = {
//     ...person,
//     ...location
// }

// console.log(overview)

// console.log(overview.name, overview.age)

const todo = {
    id: 'safhjagjkhjkhk',
    text: 'Pay the bills',
    completed: false,
    details
}

const printTodo = ({ text, completed }) => {
    console.log(`${text}: ${completed}`)
}
printTodo(todo)

// const text = todo.text
// const completed = todo.completed

const {text: todoText, completed, details = 'No details provided', ...others} = todo

console.log(todoText)
console.log(completed)
console.log(details)
console.log(others)

const age = [65, 14, 31]
// const [firstAge, secondAge, ,lastAge = 21] = age
const [firstAge, ...otherAges] = age

// console.log(firstAge, secondAge, lastAge)
console.log(firstAge)
console.log(otherAges)
