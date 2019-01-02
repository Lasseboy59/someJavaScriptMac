let num = 103.914

console.log(num.toFixed(2))

console.log(Math.round(num))

console.log(Math.floor(num))
console.log(Math.ceil(num))

let min = 10
let max = 20
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
// 10 - 20

console.log(randomNum)

// A guessing game
// between 1 - 5

let makeGuess = function(guess){
    let min = 0
    let max = 5
    let randomNum = Math.floor(Math.random() * (max - min + 1))
    return guess === randomNum
}

console.log(makeGuess(2))