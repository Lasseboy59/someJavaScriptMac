// Primitive value: string, number, boolen, null, undefined

// Object: myObject --> Object.prototype --> null
// Array: myArray --> Array.prototype --> Object.prototype --> null
// Function: myFunc --> Function.prototype --> Object.prototype --> null
// String: myString --> String.prototype --> Object.prototype --> null
// Number: myNumber --> Number.prototype --> Object.prototype --> null
// Boolean: myBoolean --> Boolean.prototype --> Object.prototype --> null

const puzzleWord = document.querySelector('#puzzle')
const guessesLeft = document.querySelector('#guesses-left')
const gameOne = new Hangman ('Car Parts', 2)

window.addEventListener('keypress', function(e){
    const guess = String.fromCharCode(e.charCode)
    if(gameOne.status === 'playing'){
        gameOne.makeGuess(guess)
        puzzleWord.textContent = gameOne.puzzle
        gameOne.statusMessage
    }
})
