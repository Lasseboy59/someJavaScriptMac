const createCounter = () => {
    let count = 0

    return {
        increment() {
            count++
        },
        decrement() {
            count--
        },
        get() {
            return count
        }
    }
}

const counter = createCounter()
counter.increment()
counter.decrement()
counter.decrement()
console.log(counter.get())

// Adder
const add = (a, b) => a + b

const createAdder = (a) => {
    return (b) => {
        return a + b
    }
}

const add10 = createAdder(10)
console.log(add10(-2))
console.log(add10(20))
const add100 = createAdder(100)
console.log(add100(-90))

console.log('-- Tipper ----')
// Tipper
const createTipper = (tipPercent) => {
    return (bill) => {
        return (tipPercent/100) * bill 
    }
}

const tip10 = createTipper(10)
const tip15 = createTipper(15)
console.log(tip10(60))
console.log(tip15(100))

// Example of closures !!!!! wordCount is available in the function below, 
// which returns puzzle to calling main functions in app.js (Hangman-game)

const getPuzzle = (wordCount, callback) => {

    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', (e) => {
        if(e.target.readyState === 4 && e.target.status === 200){
            const data = JSON.parse(e.target.responseText)
            callback(undefined, data.puzzle)
        } else if(e.target.readyState === 4) {
            callback(`An error has taken place`, undefined)
        }
    })

    request.open('GET',`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    request.send()
}

// const myFunction = () => {
//     const message = 'This is my message'
//     const printMessage = () => {
//         console.log(message)
//     }
//     return printMessage
// }

// const myPrintMessage = myFunction()
// myPrintMessage()

