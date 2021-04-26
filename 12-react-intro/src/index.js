// console.log("index loaded")

// ReactDOM.render() takes 2 arguments
// ReactDOM.render(whatToAddToDOM, whereToPutIt)

// since React.createElement() returns a POJO (Plain Old Javascript Object), we can write our own element creator function!
// const myElement = React.createElement('h1', {}, 'hello')
// // const myCreateElement = (type, props={}, children) => {
// //     return {
// //         $$typeof: Symbol.for('react.element'),
// //         type: type,
// //         props: {...props, children: children},
// //         ref: null
// //     }
// // }
// // debugger


// We can write a function which returns nested objects to be rendered in the DOM (through the virtual DOM)
// const Article = props => {
//   return  myCreateElement('div', {className: 'article'}, [
//         myCreateElement('h1', {className: 'header'}, props.title),
//         React.createElement('p', {className: 'body'}, props.text)
//     ])
// }

// // ReactDOM.render(
// //     Article({title: 'Title', text: 'example text'}), 
// //     document.getElementById('main')
// //     )

// here's a solution to the Navbar challenge using React.createElement()
// const Navbar = props => {
//     // ...
//     return React.createElement('div', {className: `ui inverted ${props.color} menu`}, [
//         React.createElement('a', {className: 'item'}, [
//           React.createElement('h2', {className: 'ui header'}, [
//             React.createElement('i', {className: `${props.icon} icon`}, null),
//             React.createElement('div', {className: 'content'},  props.title),
//             React.createElement('div', {className: 'sub header'}, props.description)
//           ])
//         ])
//       ])
//   };
     
// We can pass an object (we'll call it props) to our Navbar function containing data to dynamically customize the DOM-object returned by Navbar
//   ReactDOM.render(
//     Navbar({
//       title: 'Paintr',
//       icon: 'paint brush',
//       color: 'orange',
//       description: 'Make your personal collections of art'
//     }),
//     document.getElementById('main')
//   );


// now we'll import our libraries instead of linking them in the HTML doc
import React from 'react'
import ReactDOM from 'react-dom'

// here's our Navbar function
const Navbar = props => {
    // It will return JSX.  React parses through the JSX and returns it as virtual DOM-objects, identical to the ones created by React.createElement()
    return (
        <div class={`ui inverted ${props.color} menu`} >
            <a class='item'>
                <h2 class='ui header'>
                    <i class={`${props.icon} icon`}></i>
                    <div class='content'>
                        {props.title}
                    </div>
                    <div class="sub header">
                        {props.description}
                     </div>
                </h2>

            </a>
        </div>
    )
}

ReactDOM.render(
    // the 1st argument of .render() is *still* the virtual DOM object to be inserted into the DOM, but we're using JSX to call the component function -- <Navbar /> instead of Navbar()
    <Navbar 
        // we are still passing dynamic data to the Navbar component function. They *look* a lot like HTML element attributes, but React bundles them into a props object, so <NavBar key='value' /> gets interpreted as NavBar({key: 'value'})
        title='Paintr'
        color='green'
        description='Make collection of artwork'
        icon='paint brush'
    />,
    document.getElementById('main')
)