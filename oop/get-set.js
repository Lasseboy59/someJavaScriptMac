const data = {
    locations: [],
    get location(){
        return this._location
    },
    set location(value){
        this._location = value.trim()
        this.locations.push(this._location)
    }
}

// code that uses the dataobject
data.location = '   Vantaa  '
data.location = '  Lohja'
console.log(data)