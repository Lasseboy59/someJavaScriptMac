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
const gameOne = new Hangman ('Car Parts', 2)

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    if(gameOne.status === 'playing'){
        gameOne.makeGuess(guess)
        puzzleWord.textContent = gameOne.puzzle
        gameOne.statusMessage
    }
})

getPuzzle("2", (error, puzzle) => {
    if(error){
        console.log(`Error: ${error}`)
    } else {
        console.log(puzzle)
    }
})

getCountryCode("FI", (error, coutryCode) => {
    if(error){
        console.log(`Error: ${error}`)
    } else {
        console.log(coutryCode.name)
    }
})

