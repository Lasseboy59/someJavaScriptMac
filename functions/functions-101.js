// Global scope (convertFahrenheitToCelsius, tempOne, tempTwo)
// Local scope (fahrenheit, celsius)

let convertFahrenheitToCelsius = function(fahrenheit) {
    let isFreezing = false
    let celsius = (fahrenheit - 32)/1.8
    if(celsius <= 0){
        isFreezing = true
    }
    return `${fahrenheit} degrees Celsius is ${celsius} degrees Fahrenheit freesing point = ${isFreezing}`
}

let tempOne = convertFahrenheitToCelsius(10)

let tempTwo =  convertFahrenheitToCelsius(68)
console.log(tempOne)
console.log(tempTwo)

let square = (num) => num * num 
console.log(square(2))

let square2 = function(num) {
    return num * num
}

console.log(square2(5))