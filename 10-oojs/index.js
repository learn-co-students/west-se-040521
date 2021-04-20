// let garfield = {
//     name: "Garfield",
//     breed: "Persian Tabby",
//     introduce: function(){
//         return `Meow, my name is Garfield and I'm a Persian Tabby.`
//     }
// }

// let helloKitty = {
//     name: "Hello Kitty",
//     breed: "Cartoon",
//     introduce: function(){
//         return `Meow, my name is Hello Kitty and I'm a Cartoon.`
//     }
// }

// let keyboardCat = {
//     name: "Keyboard Cat",
//     bread: "Yes",
//     introduce: function(){
//         return `Meow, my name is Keyboard Cat and I like Bread.`
//     }
// }
// let garfield = keyboardCat
// garfield.name = "Garfield"


class Cat {

    constructor(myName, myBreed){
        // console.log('THE NAME IS: ', name)
        // console.log('THE BREED IS: ', breed)
        // console.log("Hello, I am: ", this)
        // this => Referring to the instance being created
        this.name = myName
        this.breed = myBreed
    }

    introduce(){
        // this -> Referring to the instance which introduce() is called on
        console.log(this)
        return `Meow, my name is ${this.name} and I'm a ${this.breed}.`
    }

}

let helloKitty = new Cat("HelloKitty", "Cartoon")
let garfield = new Cat("Garfield", "Persian Tabby")
let keyboardCat = new Cat("Keyboard Cat", "Meowsician")
