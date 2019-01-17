// Unix Epoch - January 1st 1970 00:00:00 // -60000 (minute before)
// const now = new Date('January 21 2001 6:25:01')

const now = new Date()
const timestamp = now.getTime()
// console.log(timestamp)

const myDate = new Date(timestamp)
console.log(myDate.getFullYear())

// console.log(now.getTime())

// console.log(`Year: ${now.getFullYear()}`)
// console.log(`Month: ${now.getMonth()}`)
// console.log(`Day of the month: ${now.getDate()}`)
// console.log(`Hour: ${now.getHours()}`)
// console.log(`Minutes: ${now.getMinutes()}`)
// console.log(`Seconds: ${now.getSeconds()}`)

 const dayOne = new Date('January 21 2008 16:05:00')
 const timestampOne = dayOne.getTime()
 const dayTwo = new Date('January 21 2008 16:05:00')
 const timestampTwo = dayTwo.getTime()

 if(timestampOne < timestampTwo){
     console.log(dayOne.toString())
} else {
     console.log(dayTwo.toString())
 }


 const now = moment()
// const now = moment().format("dddd, MMMM Do YYYY, HH:mm:ss")
// now.add(1, 'year').subtract(2, 'days')
now.subtract(1, 'month')
// console.log(now.toString()) 


// November 3rd, 2003
console.log(now.format("MMMM Do, YYYY"))
console.log(now.fromNow())

const nowTimestamp = now.valueOf()

console.log('-> ' + moment(nowTimestamp).toString())

// 1. Create a new moment
// 2. Set the month, day and year to your birthday
// 3. Use format to print it in the following way: Jan 6, 1991

const myBirthday = moment("1959-07-18").format("MMM D, YYYY")
console.log('My birthday: ' + myBirthday.toString())

const birthday = moment()
birthday.month(6).day(18).year(1959)

console.log('-> ' + birthday.format('MMM D, YYYY'))