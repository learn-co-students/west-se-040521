# React-Form-Data-Flow

## SWBATs
* Write fully controlled forms
* Know how to use computed properties to simplify form change handlers
* Practice data flow in react


## CFU: Handling Multiple Controlled Inputs

  * What changes would you have to make so that every input element on this form is controlled?
  * Update the code so that text entered in each input element updates the corresponding key/value pair in state.


## CFU: Updating votes (if time allows)

* How could you update the code so that adding a vote would update the value on the corresponding painting object in App's state?
  * Think about what you could pass to the addVote() callback that could help you find the right object in `this.state.paintings`
  * Also consider how you will get the addVote() callback from App into each Painting component

## Resources

* [Thinking in React](https://reactjs.org/docs/thinking-in-react.html) A great walkthrough of building a React app from scratch
* [computed property name](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names)
