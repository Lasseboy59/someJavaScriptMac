let restaurant = {
    name: 'ABC',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function (partySize){
        if(this.guestCapacity >= this.guestCount + partySize){
            this.guestCapacity += partySize
            return true
        } else {
            return false
        } 
    },
    setParty: function(partySize){
        this.guestCount += partySize
        return this.partySize
    },
    removeParty: function(partySize){
        this.guestCount -= partySize
        return this.guestCount
    }

}

// let restaurant = {
//     name: 'ABC',
//     guestCapacity: 75,
//     guestCount: 0,
//     checkAvailability: function (partySize){
//         let seatsLeft = this.guestCapacity - this.guestCount
//         return partySize <= seatsLeft
//     },
//     setParty: function(partySize){
//         this.guestCount += partySize
//     },
//     removeParty: function(partySize){
//         this.guestCount -= partySize
//     }

// }

restaurant.setParty(72)
console.log(restaurant.checkAvailability(4))
restaurant.removeParty(5)
console.log(restaurant.checkAvailability(4))


