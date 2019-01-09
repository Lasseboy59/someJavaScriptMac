// Old syntax
const square_1 = function (num) {
    return num * num
}

// Arrow syntax
console.log(square_1(2))

const square = (num) => {
    return num * num
}

const square2 = (num) => num * num
console.log(square2(4))

const people = [{
    name: 'Lasse',
    age: 27
},{
    name: 'Erik',
    age: 35
}, {
    name: 'Jen',
    age: 21
}]

const under30 = people.filter(function (person) {
    return person.age < 30
})

const under31 = people.filter((person) => person.age < 31)

console.log(under31)
console.log('-----------')

// 1. Find person with age 27
// 2. Print the person's name

const age27 = people.filter(function(person) {
    return person.age === 27
})

const age21 = people.filter((person) => person.age === 21 )

console.log(age21)

