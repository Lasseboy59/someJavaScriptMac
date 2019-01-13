// Callback
const getDataCallback = (num, callback) => {
    setTimeout(() => {
        if(typeof num === 'number') {
            callback(undefined, num * 2)
        } else {
            callback('Number must be provided')
        }
    }, 2000)
}

getDataCallback(2, (err, data)=> {
    if(err){
        console.log(err)
    } else {
        getDataCallback(data, (err, data) => {
            if(err) {
                console.log('Error')
            } else {
                console.log(`Callback data: ${data}`)
            }
        })
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


// const getDataPromise = (data) => new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(`This is the success data: ${data}`)
//         // reject('This is my promise error')
//         // reject('This is my promise error')
//     }, 2000)
// })

// const myPromise = getDataPromise(123)
// console.log(myPromise)

// myPromise.then((data) => {
//     console.log(data)
// }, (err) => {
//     console.log(err)
// })

const getDataPromise = (num) => new Promise((resolve, reject) => {
    setTimeout(() => {
        typeof num === 'number' ? resolve(num * 2) : reject('Number must be provided')
    }, 2000)
})

getDataPromise(2).then((data) => {
    getDataPromise(data).then((data) => {
        console.log(`Promise data: ${data}`)
    }, (err) => {
        console.log(err)
    })
}, (err) => {
    console.log(err)
})

getDataPromise(10).then((data) => {
    return getDataPromise(data)
}).then((data) => {
    // return getDataPromise(data)
    return 'This is some test data'
}).then((data) => {
    console.log(`Promise chaining data: ${data}`)
}).catch((err) => {
    console.log(err)
})