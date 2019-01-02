// Undifed for variable
let name = 'Jen'

if(name === undefined){
    console.log('Please provide a name')
} else {
    console.log(name)
}


// Undifined for funcrion
// Undefined as a function ret value

let square = function(num) {
    console.log(num)
    return num
}

let  result = square()
console.log(result)

let age = 27
age = undefined
// null as a assigned value
age = null
console.log(age)