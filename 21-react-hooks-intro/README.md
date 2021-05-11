# React-Hooks

## SWBATs

* Understand how react hooks are used to declare and update the state
* Use `useEffect()` to replace `componentDidMount()` lifecycle method

## Resources

* [Hooks Overview](https://reactjs.org/docs/hooks-overview.html) - a great summary of Hooks from the original documentation
* [Workshop on useEffect()](https://github.com/betalantz/workshop-use-effect) - a React app created by one of our Central Ed Team with great small exercises and tests
* [Building Your Own Hooks](https://reactjs.org/docs/hooks-custom.html)

### What are hooks?

To hook react class functionality to a functional component. Find more details [here](https://reactjs.org/docs/hooks-overview.html)

- Introduced: React v16.8.0
- Hooks are functions that let you “hook into” React state and lifecycle features from function components.
- This makes development easier and improves performance. 
- Migrating code to use hooks is easy.
- No need to use class components any more!
- Hooks are only used inside a functional component.



### CFU: `useState()` to add votes

Task: Display votes and add votes using `useState()` on the Painting component. For this intro exercise, votes can be maintained in state on each Painting component (even though this has the drawbacks of votes not persisting and getting out of sync with the parent array).

