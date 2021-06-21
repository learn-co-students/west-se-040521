# Intro to Redux

- What's hard about managing state in React
- Introducing Redux
- Designing our redux state
- Dispatching actions to our store
- Updating based on actions
- Problems with this version of our redux app

## (Psst! Redux Terminology Cheatsheet)
[Redux Terminology](https://gist.github.com/alexgriff/0e247dee73e9125177d9c04cec159cc6)

## The Problem - Refactoring Components
![gif](http://g.recordit.co/s2OFw0VtYb.gif)

We've changed `App` so that the computed value can render in the Header. What did we have to change?

- state initialization moved to App
- state managing functions moved to App
- count in Counter changed to `this.props.count`
- computation moved to Header
- computation switched to use a prop
- change functions switched to props in Counter

Almost everything in the code for the App had to change to accomodate this tiny design change!



## Challenge

Add buttons, actions, and cases to your reducer so that we can increment and decrement by `+3` and `-5`
