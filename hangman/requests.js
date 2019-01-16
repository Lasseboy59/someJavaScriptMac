const getPuzzle = async(wordCount) => {
    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)

    if(response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error('Unable to get puzzle')
    }
}

const getPuzzleOld = (wordCount) => {
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

const getCurrentCountry = async() => {
    const location = await getLocation()
    return country = await getCountryCode(location.country)
}

const getCountryCode = async(countryCode) => {
    const response = await fetch(`http://restcountries.eu/rest/v2/all`)

    if(response.status === 200){
        const data = await response.json()
        return country = data.find((country) => country.alpha2Code === countryCode)
    } else {
        throw new Error ('Unable to fetch the country NEW')
    }
}

const getCountryCodeOld = (countryCode) => {
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

const getLocation = async() => {
    const response = await fetch(`http://ipinfo.io/json?token=3d4e7ffcf7483a`)

    if(response.status === 200) {
        const data = await response.json()
        return data
    } else {
        throw new Error('Unable to get the location data')
    }
}

const getLocationOld = () => {
    return fetch(`http://ipinfo.io/json?token=3d4e7ffcf7483a`).then((response) => {

    if(response.status === 200){
        return response.json()
    } else {
        throw new Error ('Unable to fetch the location data')
    }
    }).then((location) => {
        return location
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




