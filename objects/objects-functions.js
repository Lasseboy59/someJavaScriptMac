let myBook = {
    title : 'Hicthiker',
    author: 'Zimmerman',
    pageCount: 350
}

let otherBook = {
    title : '1984',
    author: 'George Orwell',
    pageCount: 279 
}

let getSummary = function(book){
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long `
    }
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.summary)
console.log(otherBookSummary.pageCountSummary)

// Challenge
// Function - take Fahrenheit return object with all three

let fahrenheit = 50
let celsius = (fahrenheit - 32) * 5/9
let kelvin = (fahrenheit + 459.67) * 5/9

let temperature = {
    temp: fahrenheit
}

let convertTemperature = function(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5/9
    let kelvin = (fahrenheit + 459.67) * 5/9
    return {
        inFahrenheit: `${fahrenheit} degrees fahrenheit`,
        inCelsius: `${celsius} degrees celsius`,
        inKelvin: `${kelvin} degreen kelvin`,
        all: `${fahrenheit} degrees fahrenheit, ${celsius}C and ${kelvin}K `
    }

}

console.log(convertTemperature(50).all)
console.log(convertTemperature(50).inCelsius)