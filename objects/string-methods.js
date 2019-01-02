let name = 'Lasse Mäki'

console.log(name.length)

console.log(name.toUpperCase())
console.log(name.toLowerCase())

let password = 'harmaaväri'

console.log(password.includes('lokki'))

let myName = '  Lasse  Kotilainen   '

console.log(myName.trim())

// isValidPassword

// ret true if length > 8 and doesn't contain password


// let isValidPassword = function(password){
//     if(password.length > 8 && !password.includes('password')){
//         return true
//     } else {
//         return false
//     }
// }

let isValidPassword = function(password){
    return password.length > 8 && !password.includes('password')

}

console.log(isValidPassword('1212wq'))
console.log(isValidPassword('1212w++asasq'))
console.log(isValidPassword('ashajspasswordfsf'))

