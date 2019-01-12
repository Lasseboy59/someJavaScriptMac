// https://www.linkedin.com/pulse/javascript-find-object-array-based-objects-property-rafael/

let objArray = [
    { id: 0, name: 'Object 0', otherProp: '321' },
    { id: 1, name: 'O1', otherProp: '648' },
    { id: 2, name: 'Another Object', otherProp: '850' },
    { id: 3, name: 'Almost There', otherProp: '046' },
    { id: 4, name: 'Last Obj', otherProp: '984' }
];

let obj = objArray.find((obj) => obj.name === 'Last Obj')
console.log(obj)

let arrayOfNames = ['MacMillan', 'Ford', 'Janus', 'Virtanen', 'Olli']

const selectedNames = arrayOfNames.find((name) => name === 'Janus')
console.log(selectedNames)

const selectedNames2 = arrayOfNames.findIndex((name) => name === 'Virtanen')
console.log(selectedNames2)

const selectedNames3 = arrayOfNames.filter((name) => name.length >= 5)
console.log(selectedNames3)

arrayOfNames.forEach(function(name){
    console.log(name)
})