---
title: React Intro
layout: post
---

# Intro To React

## SWBATs

* Understand build tools and show how webpack works
* Start to understand the Virtual DOM
* See what a React Component actually is (an object, made by a class or function)
* Build custom components and see initial JSX




Student Task: write a function called Navbar I would expect to be used like this:

```js
const Navbar = props => {
  // ...
};

ReactDOM.render(
  Navbar({
    title: 'Paintr',
    icon: 'paint brush',
    color: 'green',
    description: 'Make collections of art'
  }),
  document.getElementById('main')
);
```

Vanilla JS problems:
- grabbing many elements created in JS
- scoping issues
- keeping DOM and data in sync
- difficulties organizing code