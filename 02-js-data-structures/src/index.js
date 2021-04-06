//Lets make an app to track orders at our bakery Flatiron Cakes!
// Array
let cakeNames = ['Chocolate Porter', 'Earl Grey', 'Salted Carmel', 'Vanilla', 'Carrot', 'Lemon Cream', 'Rose', 'Pink Champagne', 'Raspberry Cardamon Rose']
//Plain Old JavaScript Object/POJO
let cakeOrder1 = {
    id: 1,
    flavor: 'Earl Grey',
    size: 'cup cake',
    amount: 12,
    price: 18.00
}
//Access array values through index
console.log(cakeNames[0])
console.log(cakeNames[2])
console.log(cakeNames[cakeNames.length-1])
// reassign index value
cakeNames[0] = '9lb Chocolate Porter'
console.log(cakeNames)

//push item to the end of an array
cakeNames.push('Raspberry and Lime')
console.log(cakeNames)
//pop item off the end of an array
cakeNames.pop()

//unshift item to the front of the array
cakeNames.unshift('Blueberry and Lemon')

//shift items off the front of the array
cakeNames.shift()
console.log(cakeOrder1['size'])

// Access object properties through key
console.log(cakeOrder1['flavor'])
console.log(cakeOrder1.size)

// reassign key/value in an object
cakeOrder1.amount = 13
console.log(cakeOrder1.amount)

// return an array of obj values
console.log(Object.values(cakeOrder1))

// return an array of obj keys
console.log(Object.keys(cakeOrder1))

// returns a nested array
console.log(Object.entries(cakeOrder1))


//nested data
const daysOrders = [
    {
        id: 13,
        flavor: 'Vanilla',
        size: '6" cake',
        amount: 1,
        price: 40.00
    },
    {
        id: 14,
        flavor: 'Raspberry Cardamon Rose',
        size: '9" cake',
        amount: 1,
        price: 50.00
    },
    {
        id: 15,
        flavor: 'Pink Champagne',
        size: 'cup cake',
        amount: 25,
        price: 37.5
    },
    {
        id: 1,
        flavor: 'Earl Grey',
        size: 'cup cake',
        amount: 12,
        price: 18.00
    }
]

// How do you access the price of the second cake with dot notation?
let cake2 = daysOrders[1]
console.log(cake2.price)
console.log(daysOrders[1].price)
// How do you update the size of the first cake from 6" to 9"
daysOrders[0].size = '9" cake'
console.log(daysOrders[0])
// How do you access just the third cake?
console.dir(daysOrders[2])
// How do you acces all the values from the first cake at once?
console.log(Object.values(daysOrders[0]))

// let myobj = new Object
// myobj.name = 'Simon'
// console.log(myobj)

// Loops
 
// for loop
function printCakeName(arr) {
    for(let i = 0; i < arr.length; i++){
        console.log(i)
        console.log(arr[i])
    }
}
printCakeName(cakeNames)

// do...while loop
function upCaseCakes(arr){
    let i = 0
    do {
        console.log(arr[i].toUpperCase())
        i++
    } while (i < arr.length)
    console.log('done with upCaseCakes')
}
upCaseCakes(cakeNames)

// while and break loop
function findFlavor(myArray, flavor) {
    let i = 0
    let found = false
    while(i < myArray.length){
        if(myArray[i]==flavor){
            found = myArray[i]
            break
        }
        i++
    }
    return found
}
console.log(findFlavor(cakeNames, 'Vanilla'))
console.log(findFlavor(cakeNames, 'Rootbeer'))

// for...of iterates arrays
function downCaseCakes(){
    for(let name of cakeNames){
        console.log(name.toLowerCase())
    }
    return cakeNames
}
console.log(downCaseCakes())

// for...in iterates obj keys
function printObjProps(){
    for(let key in cakeOrder1){
        console.log(key)
        console.log(cakeOrder1[key])
    }
}
printObjProps()

function getFlavors(cakeArr){
    for(let cake of cakeArr){
        console.log(cake.flavor)
    }
}
getFlavors(daysOrders)

// Callbacks and Higher-Order Functions

function bakeCake(input){
    return input('cake')
}

function bake(str){
    return `Hello Bakers, today we will be baking ${str}`
}

bakeCake(bake)