// Multiple arguments

let add = function(a, b, c){
    return a + b + c
}

let result = add(10, 1, 3)
console.log(result)

// Default arguments

let getScoreText = function(name = 'anonymous', score = 100) {
    return 'Name: ' + name + ' - Score: ' + score
}

let scoreText = getScoreText(undefined, 99)
console.log(scoreText)

// Challange - tip calculator

// arguments total, tipProcent e.g. 0.2

let tipProcent = function(total, tipPercent = 0.2) {
    tip = (total * tipPercent)
    return `Tip of ${total} euros with ${tipPercent*100}% is ${tip} euros.`
}

let tipAmount = tipProcent(20)
console.log(tipAmount)