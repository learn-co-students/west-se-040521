# Object Oriented JS

## Objectives
  By the end of this lesson, SWBAT:
- [ ] create a Class in JavaScript using ES6 syntax
- [ ] instantiate a new instance of a Cat class
- [ ] write and execute an instance method 

## Key Questions
* What are some limitations of using Plain Old JavaScript Objects (POJOs) to store information?
* What is the relationship between JS objects and functions?
* How can I create a class using ES6 syntax?
  * How can I give that class a `constructor`? What is a `constructor`?
  * How can I make a `new` instance of that class?
* How can I write an instance method for a JS class?
  * What is `this`? 

## Activity

A Cat now has a weight attribute associated with it. Like the name and the breed of the cat, the weight of the cat will be provided when it's being created and we want the instance to hold onto that information. We also want a new method called `eat` that will increase the weight attribute of the cat to be 10 higher than what it was before and the method should also take in a string of a food. The method should return the string: `Yum, thanks for the ${FOODNAME}. I now weigh ${NUMBER} pounds` where FOODNAME is the food passed in and the NUMBER is the new weight. In your groups, think about how you would change the class of this cat to accomodate these two new features.


## Additional Resources
- [MDN Creating Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer)
- [MDN Article on Inheritance and the Prototype Chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
- [MDN Article on `Object.create`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create)
- [MDN Constructor Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor)
- [MDN `new` Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new)
- [MDN Article on the `class` keyword](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [Master the JS Interview: Difference Between Prototypal and Class Inheritance](https://medium.com/javascript-scene/master-the-javascript-interview-what-s-the-difference-between-class-prototypal-inheritance-e4cd0a7562e9)
- [MDN Article on Object Prototypes](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)
