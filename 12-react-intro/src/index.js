console.log("index loaded")

// ReactDOM.render(whatToAddToDOM, whereToPutIt)

const myElement = React.createElement('h1', {}, 'hello')
const myCreateElement = (type, props={}, children) => {
    return {
        $$typeof: Symbol.for('react.element'),
        type: type,
        props: {...props, children: children},
        ref: null
    }
}
// debugger

const Article = props => {
  return  myCreateElement('div', {className: 'article'}, [
        myCreateElement('h1', {className: 'header'}, props.title),
        React.createElement('p', {className: 'body'}, props.text)
    ])
}

ReactDOM.render(
    Article({title: 'Title', text: 'example text'}), 
    document.getElementById('main')
    )


