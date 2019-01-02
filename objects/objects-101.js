let myBook = {
    title : 'Hicthiker',
    author: 'WSOY',
    pageCount: 350
}

console.log(`The book title ${myBook.title}, author ${myBook.author} pages ${myBook.pageCount}`)

myBook.title = 'Animal farm'

console.log(`The book title ${myBook.title}, author ${myBook.author} pages ${myBook.pageCount}`)

// name, area, location

let personDescription = {
    name : 'Lasse',
    age: 45,
    location: 'Vantaa'
}

console.log(`Person's name is ${personDescription.name}, age: ${personDescription.age} and she/he lives in lives in ${personDescription.location}.`)
personDescription.age = 51
console.log(`Person's name is ${personDescription.name}, age: ${personDescription.age} and she/he lives in lives in ${personDescription.location}.`)
