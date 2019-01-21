// Primitive value: string, number, boolen, null, undefined

// Object: myObject --> Object.prototype --> null
// Array: myArray --> Array.prototype --> Object.prototype --> null
// Function: myFunc --> Function.prototype --> Object.prototype --> null
// String: myString --> String.prototype --> Object.prototype --> null
// Number: myNumber --> Number.prototype --> Object.prototype --> null
// Boolean: myBoolean --> Boolean.prototype --> Object.prototype --> null

// HTTP (Hyper Text Transfer Protocol)
// Request - What we want to do
// Response - What was actually done

const puzzleWord = document.querySelector('#puzzle')
const guessesLeft = document.querySelector('#guesses-left')
let gameOne

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    // if(gameOne.status === 'playing'){
        gameOne.makeGuess(guess)
        render()
    // }
})

const render = () => {
    puzzleWord.innerHTML = ''
    guessesLeft.textContent = gameOne.statusMessage // added
    // puzzleWord.textContent = gameOne.puzzle
    // gameOne.statusMessage // commented out

    gameOne.puzzle.split('').forEach((letter) => {
        const letterEl = document.createElement('span')
        letterEl.textContent = letter
        puzzleWord.appendChild(letterEl)
    })
}

const startGame = async () => {
    const puzzle = await getPuzzle('1')
    gameOne = new Hangman(puzzle, 5)
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()

// getPuzzle('2').then((puzzle) => {
//     console.log(puzzle)
// }).catch((err) => {
//     console.log(`Error: ${err}`)
// })

// getCurrentCountry().then((country) => {
//     console.log('--> ' + country.name)
// }).catch((error) => {
//     console.log(`Error: ${error}`)
// })
