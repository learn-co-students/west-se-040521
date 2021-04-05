console.log('Hello world!')
// Open up the browser and test out some code in the console!
// Lets build an app for a FlatIron Podcast
//JavaScript Functions 
    //Define a function
    function introduction() {
        console.log('Thanks for tuning in to the Flatiron Podcast!')
        return 'Where we talk about coding!'
    }

    console.log(introduction)
    console.log(introduction())

    //Now with Arrow Function syntax! 
    
    let guestAppearance = () => {
        let guest = prompt('Welcome to FIS Podcast! What is your name?')
        return guest
    }
    
    // function guestAppearance() {
    //     let guest = prompt('Welcome to FIS Podcast! What is your name?')
    //     return guest
    // }
    
    // console.log('guestAppearance: ', guestAppearance());
    
    

    //One Line implicit returns

    let sayHi = () => console.log('Hello, happy to be here!')

    sayHi()

    let greeting = () => 'thanks for inviting me on your podcast!'
    console.log(greeting())


//Defining parameters and passing arguments

    let service = 'spotify'
    let service2 = 'Apple Podcasts'
    // `location` is a parameter of the `whereToListen` fuction
    // let whereToListen = (location) => console.log(`To hear more episodes, go to ${location}`)
    //Arrow functions do not need () if they are passed a single param
    let whereToListen = location => console.log(`To hear more episodes, go to ${location}`)
   

    whereToListen(service)
    // whereToListen(service2)
    // whereToListen()
    // we pass the `service` argument to the `whereToListen` function

    let thisWeeksSubject = (week, topic) => console.log(`It's week ${week}, and our topic will be ... ${topic}`)

    //'one' and 'Functions and Variables in JS are arguments ' 
    thisWeeksSubject('one', 'Functions and Variables in JS')

//Scope 
    //host is in global Scope 
    let host = "Simon"

    function recordShow() {
        let epName = 'ep2. Javascript Scope'
        console.log(`${epName} with ${host}`)
        // variables declared within conditionals are block scoped
        if(true){
            var cookie = 'peanut butter'
            let cookie2 = 'snickerdoodle'
            const cookie3 = 'chocolate chip'
            console.log(cookie)
            console.log(cookie2)
            console.log(cookie3)
        }
        introduction()
    }
    recordShow()
    console.log(host)
    // console.log(epName)

    //Const variables can not be overwritten 
    const producer = "Jasper"
    // producer = "Kyle"

// Hoisting

// assigned here
cat = "Mimi"

console.log(cat)

// declared here
var cat

// `let` variables will not hoist
// let cat // will raise error

// invoked here
foo()

// declared here
function foo(){
    console.log("bar")
}

// Arrays
let episodes = ['Are Arrays Objects?', 'Why 3 variable types?', 'HTML Forms and Request Methods']
let mixed = [3, 'Simon', false]

console.log(episodes[1])
console.log(episodes[0])
console.log(episodes.length)
console.log(episodes[episodes.length-1])
// overwrite the value at index 2
episodes[2] = 'All about GraphQL'
console.log(episodes[2])
// add to the end of an array
episodes.push('Adventures in the DOM')
// remove from the end
episodes.pop()
// add to front of an array
episodes.unshift('Event Listeners')
// remove from front
episodes.shift()

console.log(episodes)

//The Call Stack

// an heirarchy and ordering of function exection based on LIFO (last-in-first-out)

// function twoThree(){
//     return `${testingOne()}, two three`
// }

// function testingOne(){
//     return `Testing one`
// }

// console.log(twoThree())

function preShowCheck(){
    console.log('begin pre-show check')
    micCheck()
    console.log('done with preShowCheck')
    return
}

function micCheck(){
    console.log('testing one two three')
    soundCheck()
    console.log('done with mic Check')
    return
}

function soundCheck(){
    console.log('can you hear the beep?')
    recordingCheck()
    console.log('done with sound check')
    return
}

function recordingCheck(){
    console.log('playing back recording... sounds like everything is fine')
    console.log('done with recording check')
    return 
}

preShowCheck()

//Check for understanding 
//Draw out the call stack for the following 


