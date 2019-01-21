import Hangman from './hangman'
import getPuzzle from './requests'

const puzzleWord = document.querySelector('#puzzle')
const guessesLeft = document.querySelector('#status')
let gameOne

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
        gameOne.makeGuess(guess)
        render()
})

const render = () => {
    puzzleWord.innerHTML = ''
    guessesLeft.textContent = gameOne.statusMessage

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