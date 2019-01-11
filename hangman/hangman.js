// Prototypal inheritance
// No quesses ? -> ***
// Guessed "c", "b", and "t" ? -> c*t

const Hangman = function(word, remainingGuesses){
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = []
}

Hangman.prototype.getPuzzle = function(){

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

Hangman.prototype.makeGuess = function(guess){
  
    guess = guess.toLowerCase()
    const isUnique = !this.guessedLetters.includes(guess)
    const isBadGuess = !this.word.includes(guess)

    if(isUnique){
        this.guessedLetters.push(guess)
    } 
    if(isUnique && isBadGuess){
        this.remainingGuesses--
    }
}

const gameOne = new Hangman ('Cat', 2)
// Guess c, t, z
// gameOne.makeGuess('c')
// gameOne.makeGuess('t')

console.log(gameOne.remainingGuesses)
console.log(gameOne.getPuzzle()) //c*t

window.addEventListener('keypress', function(e){
    const guess = String.fromCharCode(e.charCode)
    gameOne.makeGuess(guess)
    console.log(gameOne.getPuzzle()) //c*t
    console.log(gameOne.remainingGuesses)
})

