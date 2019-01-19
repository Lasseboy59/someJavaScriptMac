// Prototypal inheritance
// No quesses ? -> ***
// Guessed "c", "b", and "t" ? -> c*t

const updateElement = document.querySelector('#puzzle')

class Hangman {
    constructor(word, remainingGuesses){
        this.word = word.toLowerCase().split('')
        this.remainingGuesses = remainingGuesses
        this.guessedLetters = []
        this.status = 'playing'
    }
    calculateStatus(){
        let finished = true

        this.word.forEach((letter) => {
            if(this.guessedLetters.includes(letter) || letter === ' '){
    
            } else {
                finished = false
            }
        })
    
        if(this.remainingGuesses === 0){
            this.status = 'failed'
        } else if (finished){
            this.status = 'finished'
        } else {
            this.status = 'playing'
        }
    }
    get puzzle(){
        let puzzle = ''

        this.word.forEach((letter) => {
            if(this.guessedLetters.includes(letter) || letter ===  ' '){
                puzzle += letter
            }else {
                puzzle += '*'
            }
        })
        return puzzle
    }
    makeGuess(guess){
        guess = guess.toLowerCase()
        const isUnique = !this.guessedLetters.includes(guess)
        const isBadGuess = !this.word.includes(guess)
    
        if(isUnique){
            this.guessedLetters.push(guess)
        } 
        if(isUnique && isBadGuess){
            this.remainingGuesses--
        }
        this.calculateStatus()
    }
    get statusMessage(){
        if(gameOne.status === 'playing'){
            guessesLeft.textContent = `Playing -> Guesses left: ${gameOne.remainingGuesses}`
        } else if (gameOne.status === 'failed'){
            guessesLeft.textContent = `Failed  -> Nice try! The word was ${gameOne.word.join('')}.`
        } else {
            guessesLeft.textContent = `Finished -> Great work! You guessed the word.`
        }
    }
}
