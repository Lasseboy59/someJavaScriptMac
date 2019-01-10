const products = [{name: 'comp mouse'}]
const product = products[0]

// Truthy - values that resolve to true in boolean context
// Falsy - values that resolve to false in boolean context
// Falsy values - false, 0, empty string, null, undefined, NaN

// if (product !== undefined) {
if(product) {
    console.log('Product found')
} else {
    console.log('Product not found')
}

