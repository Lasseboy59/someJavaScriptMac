// Prototypal inheritance 
// myPerson --> Person.prototype --> Object.prototype --> null

class Person {
    constructor(firstName, lastName, age, likes = []){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age 
        this.likes = likes
    }
    getBio(){
        let bio = `${this.firstName} is ${this.age}.`

        this.likes.forEach((like) => {
            bio += ` ${this.firstName} likes ${like}.`
        })
    
        return bio
    }
    set fullName(fullName){
        const names = fullName.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }

    // setName(fullName){
    //     const names = fullName.split(' ')
    //     this.firstName = names[0]
    //     this.lastName = names[1]
    // }
}

class Employee extends Person {
    constructor(firstName, lastName, age, position, likes){
        super(firstName, lastName,age,likes)
        this.position = position
    }
    getBio(){
        return `${this.fullName} is a ${this.position}.`
    }
    getYearsLeft(){
        return 65 - this.age
    }
}

class Student extends Person {
    constructor(firstName, lastName, age, grade, likes){
        super(firstName, lastName, age, likes)
        this.grade = grade
    }
    updateGrade(value){
        this.grade += value
        let passOrNot = this.grade >= 70 ? 'passing' : 'failing'
        return `${this.firstName} is ${passOrNot} the exam.`
    }
    getBio(){
        let passOrNot = this.grade >= 70 ? 'passing' : 'failing'
        return `${this.firstName} is ${passOrNot} the exam.`
    }
}

const me = new Employee('Timo', 'Kallio', 35, 'Teacher', [])
me.fullName = 'Olli Savela'
console.log(me.getBio())


// const me = new Employee('Lasse', 'Ojala', 45, 'Teacher', ['Reading', 'Skiing'])
// me.setName('Aleksis Pyy')
// console.log(me.getBio())
// console.log(me.getYearsLeft())

// const person2 = new Person('Lancy', 'Turner', 51)
// console.log(person2.getBio())


// const Person = function (firstName, lastName, age, likes = []) {
//     this.firstName = firstName
//     this.lastName = lastName
//     this.age = age 
//     this.likes = likes
// }

// Person.prototype.getBio = function() {
//     let bio = `${this.firstName} is ${this.age}.`

//     this.likes.forEach((like) => {
//         bio += ` ${this.firstName} likes ${like}.`
//     })

//     return bio
// }

// Person.prototype.setName = function(fullName) {
//     const names = fullName.split(' ')
//     this.firstName = names[0]
//     this.lastName = names[1]
// }

// const me = new Person('Lasse', 'Ojala', 45, ['Reading', 'Skiing'])
// me.setName('Aleksis Pyy')
// console.log(me.getBio())

// const person2 = new Person('Lancy', 'Turner', 51)
// console.log(person2.getBio())

