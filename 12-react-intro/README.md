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

## Resources

* [Example Video](https://www.youtube.com/watch?v=_RrcmQcfRkQ)
* _'webpack' branch has boilerplate webpack setup_

## Outline

     5m Discuss Vanilla JS
     5m Brief History/Context
    15m Project Set Up
     5m Briefly on Virtual DOM
    15m myCreateElement
    20m Navbar Student Exercise
    15m JSX
    ===
    80m Total

### Discuss Vanilla JS

Start by asking students what was hard about building a project in Phase 1 and record their responses. Generally you'll get at least a few responses that are pretty on point. Examples:

* Updating the DOM to reflect changes in your data
* Managing State
* state lives in different places
* difficult to keep the DOM in sync correctly
* keep track of changes to state
* How to organize code

point out what React is designed to solve and what it isn't.

### Brief History/Context

React is made by Facebook. Point out that if anyone's ever heard about the licensing thing (i.e. you can't build an app that competes with FB in React) that's no longer true and React uses the MIT open source license. There are two libraries `react`, `react-dom`, this is to divide up the functionality and enables `react-native`, `react-vr`, etc.

### Project Set Up

To start I will not use webpack or anything special. I'll just include react and react-dom in my index.html.

_Though I point out and stress that I am not doing this like how the weekend labs are set ups:_

* _I am not going to write `import React from 'react'`_
* _I am not going to run `npm start`_
* _I am just doing this like in last Phase._

_When I break into some exercises later everyone asks why they cant run npm start and why they won't be importing React, I remind them that we are just including some js files in out html like last Phase._

First, `npm install --save react react-dom semantic-ui-css`. Discuss how npm differs from installing gem. Show node_modules folder, (mention that if a student can't see their directory-- it's there-- they just need to enable seeing .gitignore'd files in atom). Show that we're just linking to js/css files in our index.html. I've had some issues if I do not use these specific links:

```html
<link rel="stylesheet" type="text/css" href="node_modules/semantic-ui-css/semantic.min.css">
<script src="node_modules/react/umd/react.development.js"></script>
<script src="node_modules/react-dom/umd/react-dom.development.js"></script>
```

Now in index.js
`ReactDOM.render` take two args:

```js
ReactDOM.render(whatToAddToDOM, whereToPutIt);
```

Demonstrate that the second arg is the **only place we will be using code from Phase 1 such as `document.getElementById('main')`**. This is also why we won't be bringing in jQuery. It'd be overkill to import a huge library to run one line of code `$('#main')`

whatToAddToDOM: we need to add a React Element! First thing I'd do is to write like:

```js
ReactDOM.render(React.createElement('h1'), document.getElementById('main'));
```

And inspect the HTML, an h1 will be there, but we won't see any text. Change it to:

```js
// mention that we won't quite talk about
// this second arg, the 'props' yet
ReactDOM.render(
  React.createElement('h1', {}, 'hello'),
  document.getElementById('main')
);
```

And we'll see it on the page!

### Briefly on Virtual DOM

Put a debugger and look what `React.createElement` returns. Ask what that looks like: an object-- that's it! That's what the Virtual DOM is, a plain JS object that builds up a picture of what the real DOM should look like. Reminder: html is just a string, the DOM is a _representation_ of that string we can interact with programmatically, ask questions to, etc. Virtual DOM is a representation of that representation. React will be in charge of making sure the real DOM looks like and will always be in sync with the virtual DOM. Declarative vs. Imperative.

### myCreateElement

If `React.createElement` just returns an object we should be able to write this on our own. Here's the bare minimum needed.
```js
const myCreateElement = (type, props = {}, children) => {
  return {
    $$typeof: Symbol.for('react.element'),
    type: type,
    props: { children: children },
    ref: null
  };
};
```

Use your function instead of React's. Cool!

Now present the problem of wanting to create an "Article", i.e. some type of title in an h1, followed by the text in a p tag. How can we do this?

Someone should know that you'll have to wrap the whole thing in another element such as a div. Point out that this isn't like a React thing its just a programming thing. CreateElement is a function that returns an object. You can't return 2 things from a function. Talk through children being an array (not nested nodes, but siblings)

```js
ReactDOM.render(
  myCreateElement('div', {}, [
    myCreateElement('h1', {}, 'My Title'),
    myCreateElement('p', {}, 'some text of article')
  ]),
  document.getElementById('main')
);
```

Refactor to a function:

```js
const Article = props => {
  return myCreateElement('div', {}, [
    myCreateElement('h1', {}, props.title),
    myCreateElement('p', {}, props.text)
  ]);
};

ReactDOM.render(
  Article({ title: 'Title', text: 'some text' }),
  document.getElementById('main')
);
```

What if you wanted to add a CSS class. Why can't we use the keyword 'class'. Make sure to change myCreateElement to merge in props. Talk about ES2015 all the time.

```js
const myCreateElement = (type, props = {}, children) => {
  return {
    $$typeof: Symbol.for('react.element'),
    type: type,
    props: { ...props, children: children },
    ref: null
  };
};

const Article = props => {
  // show how we'll see this in the HTML
  // virtual dom = picture of what html should look like
  return myCreateElement('div', { className: 'article' }, [
    myCreateElement('h1', { className: 'header' }, props.title),
    myCreateElement('p', { className: 'body' }, props.text)
  ]);
};
```

### Navbar Student Exercise

If we were able to write a function which returns a React element which produces some html, we should be able to continue building out functions which return React elements.

I provide them some markup for a navbar with semantic ui css (provided in starter code)

```js
// <div class="ui inverted orange menu">
//     <a class='item'>
//       <h2 class="ui header">
//         <i class="paw icon"></i>
//         <div class="content">
//           ZooKeepr
//         </div>
//         <div class="sub header">
//           Keep track of your animals
//         </div>
//       </h2>
//     </a>
//   </div>
```

Student Task: write a function called Navbar I would expect to be used like this:

```js
const Navbar = props => {
  // ...
};

ReactDOM.render(
  Navbar({
    title: 'ZooKeepr',
    icon: 'paw',
    color: 'green',
    description: 'keep track of your animals'
  }),
  document.getElementById('main')
);
```

_A lot of students will try do like `class Navbar extends React.Component`.... NOPE! we are just writing a function which returns an object! Students will raise their hands and ask why `npm start` doesn't work. NOPE! They should just open the index.html in their browser like before_

Be very clear about it's just playing this nesting game of React.createElement inside of React.createElement. Have them look at the example markup and identify how many children each element has to determine if they need to pass an array or another element. Perhaps get them started on right track.

### JSX

Show solution, ok cool, but if this was how we had to write React it would not be the popular framework it is. Refactor to using JSX (on webpack branch). Ask why we would need to import React even if we don't see the variable used. Because JSX is just sugar for React.createElement!! It's all just JavaScript!!

Compare `{}` in JSX to ERB. They mean "evaluate this as JavaScript". Show an example like `<h1>props.title</h1>` vs. `<h1>{props.title}</h1>`

Start pulling things into different files. Mention no way around `import React from 'react'` in each file, that's normal get used to it, learn to like it. Time permitting show an `App` component that renders other components, `Navbar` + `Article`. Start defining Components.
