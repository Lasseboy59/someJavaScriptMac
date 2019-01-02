// Function - input, output, code

let greetUser = function(message) {
    return 'Hello ' + message
}

console.log(greetUser('testing function'))


let squreNumber = function(number) {
    return number * number
}

console.log(squreNumber(2))


let mathFunction = function(argument){
    let result = argument * argument
    return `The result is ${result}`
}

let result = mathFunction(3)
console.log(result)

console.log('-----------------')
// convertFahrenheitToCelsius

let convertFahrenheitToCelsius = function(argument) {
    let result = (argument - 32)/1.8
    return `${argument} degrees Celsius is ${result} degrees Fahrenheit`
}

let result2 = convertFahrenheitToCelsius(32)
console.log(result2)

result2 =  convertFahrenheitToCelsius(68)
console.log(result2)