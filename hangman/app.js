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

getPuzzle('2').then((puzzle) => {
    console.log(puzzle)
}).catch((err) => {
    console.log(`Error: ${err}`)
})

// getCountryCode('FI').then((country) => {
//     console.log(country.name)
// }).catch((err) => {
//     console.log(`Error: ${err}`)
// })

// getLocation().then((location) => {
//     console.log('Your location is currently: ' + location.country + ', ' + location.region + ', ' + location.city)
// }).catch((err) => {
//     console.log(`Error: ${err}`)
// })


getCountryCode('FI').then((country) => {
    console.log(country.name)
}).catch((err) => {
    console.log(`Error: ${err}`)
})

getLocation().then((location) => {
    return getCountryCode(location.country)
}).then((data) => {
    console.log('-> ' + data.name)
}).catch((err) => {
    console.log(`Error: ${err}`)
})

getCurrentCountry().then((country) => {
    console.log('--> ' + country.name)
}).catch((error) => {
    console.log(`Error: ${error}`)
})


// console.log('---')

// getLocation().then((location) => {
//     console.log('Your location is currently: ' + location.country + ', ' + location.region + ', ' + location.city)
// }).catch((err) => {
//     console.log(`Error: ${err}`)
// })


// getCountryCode('FI').then((country) => {
//     console.log(country.name)
// }, (err) => {
//     console.log(`Error: ${err}`)
// })

// fetch('http://puzzle.mead.io/puzzle', {}).then((response)=> {
//     if(response.status === 200){
//         return response.json()
//     } else {
//         throw new Error('Unable to fetch the puzzle')
//     }
// }).then((data)=> {
//     console.log('-> ' + data.puzzle)
// }).catch((err) => {
//     console.log(err)
// })