const getPuzzle = async(wordCount) => {
    const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`)

    if(response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error('Unable to get puzzle')
    }
}

const getCurrentCountry = async() => {
    const location = await getLocation()
    return country = await getCountryCode(location.country)
}

const getCountryCode = async(countryCode) => {
    const response = await fetch(`//restcountries.eu/rest/v2/all`)

    if(response.status === 200){
        const data = await response.json()
        return country = data.find((country) => country.alpha2Code === countryCode)
    } else {
        throw new Error ('Unable to fetch the country NEW')
    }
}

const getLocation = async() => {
    const response = await fetch(`//ipinfo.io/json?token=3d4e7ffcf7483a`)

    if(response.status === 200) {
        const data = await response.json()
        return data
    } else {
        throw new Error('Unable to get the location data')
    }
}
