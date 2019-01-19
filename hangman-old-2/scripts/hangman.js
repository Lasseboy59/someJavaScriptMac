// Create a method for making a guess

class Hangman {
    constructor(word, remainingGuesses){
        this.word = word.toLowerCase().split('')
        this.remainingGuesses = remainingGuesses
        this.guessedLetters = []
        this.status = 'playing'
    }


    getStatus(){
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
            if(this.guessedLetters.includes(letter) || letter === ' ') {
                puzzle += letter
            } else {
                puzzle += '*'
            }
        })

        return puzzle 
    }

    addGuess(guess) {
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
            this.getStatus()
        }
    }

    get GameStatus(){
        if(this.status === 'playing'){
            return `Playing -> Guesses left: ${this.remainingGuesses}.`
        } else if (this.status === 'failed'){
            return `Failed -> Nice try! The word was: "${this.word.join('')}".`
         } else {
            return `Finished -> Great work! You guessed the word.`
         }
    }
}

/******************* above changed to class definition ***************************/

// const Hangman = function(word, remainingGuesses){
//     this.word = word.toLowerCase().split('')
//     this.remainingGuesses = remainingGuesses
//     this.guessedLetters = []
//     this.status = 'playing'
// }

// Hangman.prototype.getStatus = function(){

//     const finished = this.word.every((letter) => {
//         return this.guessedLetters.includes(letter)
//     })
    
//     if(this.remainingGuesses === 0){
//         this.status = 'failed'
//     } else if(finished) {
//         this.status = 'finished'
//     } else {
//         this.status = 'playing'
//     }
// }


// Hangman.prototype.getPuzzle = function(){
//     let puzzle = ''

//     this.word.forEach((letter) => {
//         if(this.guessedLetters.includes(letter) || letter === ' ') {
//             puzzle += letter
//         } else {
//             puzzle += '*'
//         }
//     })

//     return puzzle
// }

// Hangman.prototype.addGuess = function(guess) {
//     if(this.status === 'playing') {
//         this.guess = guess.toLowerCase()
//         const isUnigue = !this.guessedLetters.includes(guess)
//         const isBadGuess = !this.word.includes(guess)
        
//         if(!this.guessedLetters.includes(guess)){
//             this.guessedLetters.push(guess)
//         }
    
//         if(isUnigue && isBadGuess){
//             this.remainingGuesses--
//         }
//         this.getStatus()
//     }
// }

// Hangman.prototype.getGameStatus = function() {
//     if(this.status === 'playing'){
//         return `Playing -> Guesses left: ${this.remainingGuesses}.`
//     } else if (this.status === 'failed'){
//         return `Failed -> Nice try! The word was: "${this.word.join('')}".`
//      } else {
//         return `Finished -> Great work! You guessed the word.`
//      }

// }
