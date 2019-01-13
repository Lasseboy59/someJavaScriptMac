// Callback
const getDataCallback = (callback) => {
    setTimeout(() => {
        callback('This is my callback error', undefined)
        callback('This is my callback error', undefined)
    }, 2000)
}

getDataCallback((err, data)=> {
    if(err){
        console.log(err)
    } else {
        console.log(data)
    }
})

// Promise
// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve('This is the promis data')
//         reject('This is my promise error')
//         reject('This is my promise error')
//     }, 2000)
// })


const getDataPromise = (data) => new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`This is the success data: ${data}`)
            // reject('This is my promise error')
            // reject('This is my promise error')
        }, 2000)
    })

const myPromise = getDataPromise(123)
console.log(myPromise)

myPromise.then((data) => {
    console.log(data)
}, (err) => {
    console.log(err)
})

myPromise.then((data) => {
    console.log(data)
}, (err) => {
    console.log(err)
})

