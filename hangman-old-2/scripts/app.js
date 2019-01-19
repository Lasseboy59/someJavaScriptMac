// Primitive values: string, number, boolean, null, undefined

// Object: myObject --> Object.prototype --> null
// Array: myArray --> Array.prototype --> Object.prototype --> null
// Function: myFunc --> Function.prototype --> Object.prototype --> null
// String: myString --> String.prototype --> Object.prototype --> null
// Number: muNumber --> Number.prototype --> Object.prototype --> null
// Boolean: myBoolean --> Boolean.prototype --> Object.prototype --> null

// HTTP (Hypertext Transfer Protocol)
// Request - What do we want to do
// Response - What was actually done

const puzzleEl = document.querySelector('#puzzle')
const statusEl = document.querySelector('#status')
let game1 

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.addGuess(guess)
    render()
})

const render = () => {
    puzzleEl.innerHTML = ''
    statusEl.textContent =  game1.GameStatus

    game1.puzzle.split('').forEach((letter) => {
        const letterEl = document.createElement('span')
        letterEl.textContent = letter
        puzzleEl.appendChild(letterEl)
    })  

}

const startGame = async () => {
    const puzzle = await getPuzzle('2')
    game1 = new Hangman(puzzle, 5)
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()

// getPuzzle('2').then((puzzle) => {
//     console.log(puzzle)
// }).catch((err) => {
//     console.log(err)
// })

// getCurrentCountry().then((country) => {
//     console.log(country.name)
// }).catch((err)=> {
//     console.log(err)
// })
