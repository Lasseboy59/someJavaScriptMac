// Prototypal inheritance
// No quesses ? -> ***
// Guessed "c", "b", and "t" ? -> c*t

class Hangman {
    constructor(word, remainingGuesses){
        this.word = word.toLowerCase().split('')
        this.remainingGuesses = remainingGuesses
        this.guessedLetters = []
        this.status = 'playing'
    }

    calculateStatus(){
        const finished = this.word.every((letter) => {
            return this.guessedLetters.includes(letter) || letter === ' '
        })
        
        if(this.remainingGuesses === 0){
            this.status = 'failed'
        } else if(finished) {
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
        if(this.status === 'playing') {
            this.guess = guess.toLowerCase()
            const isUnigue = !this.guessedLetters.includes(guess)
            const isBadGuess = !this.word.includes(guess)
            
            if(!this.guessedLetters.includes(guess)){
                this.guessedLetters.push(guess)
            }
        
            if(isUnigue && isBadGuess){
                this.remainingGuesses--
            }
            this.calculateStatus()
        }
    }

    get statusMessage(){
        if(this.status === 'playing'){
            return `Playing -> Guesses left: ${this.remainingGuesses}`
        } else if (this.status === 'failed'){
            return `Failed  -> Nice try! The word was ${this.word.join('')}.`
        } else {
            return `Finished -> Great work! You guessed the word.`
        }
    }
}
