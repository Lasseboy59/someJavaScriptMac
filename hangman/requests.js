const getPuzzle = (wordCount) => {
    return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response)=> {
        if(response.status === 200) {
            return response.json()
        } else {
            throw new Error ('Unable to fetch the puzzle')
        }
    }).then((data) => {
        return data.puzzle
    })
}

const getCountryCode = (countryCode) => {
    return fetch(`http://restcountries.eu/rest/v2/all`).then((response) => {

        if(response.status === 200){
            return response.json()
        } else {
            throw new Error ('Unable to fetch the country')
        }
    }).then((data) => {
        const country = data.find((country) => country.alpha2Code === countryCode)
        return country
    })
}

// const getPuzzle = (wordCount) => new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest()

//     request.addEventListener('readystatechange', (e) => {
//         if(e.target.readyState === 4 && e.target.status === 200){
//             const data = JSON.parse(e.target.responseText)
//             resolve(data.puzzle)
//         } else if(e.target.readyState === 4) {
//             reject(`An error has taken place`)
//         }
//     })

//     request.open('GET',`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
//     request.send()
// })


// const getCountryCode = (countryCode) => new Promise((resolve, reject) => {
//     const countryRequest = new XMLHttpRequest()

    // countryRequest.addEventListener('readystatechange', (e) => {
    //     if(e.target.readyState === 4 && e.target.status === 200){
    //         const data = JSON.parse(e.target.responseText)
    //         const country = data.find((country) => country.alpha2Code === countryCode)
    //         resolve(country)
    //     } else if(e.target.readyState === 4) {
    //         reject(`An error has taken place`)
    //     }
    // })

//     countryRequest.open('GET','http://restcountries.eu/rest/v2/all')
//     countryRequest.send()
// })




