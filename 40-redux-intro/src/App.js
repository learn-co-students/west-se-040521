import React, { Component } from 'react';
import Counter from './components/Counter';
import Header from './components/Header';
import { createStore } from 'redux'

const intialState = {
  count: 0,
  friend: [],
  loading: false
}

const reducer = (prevState=intialState, action) => {
  console.log('prevState: ', prevState, 'action: ', action)
  switch (action.type) {
    case 'INCREMENT':
      return {...prevState, count: prevState.count + 1}
    case 'DECREMENT':
      return {...prevState, count: prevState.count - 1}
    case 'MINUS_FIVE':
      return {...prevState, count: prevState.count + action.payload}
    case 'PLUS_THREE':
      return {...prevState, count: prevState.count + action.payload}
    default:
      return prevState

  }
  
}

export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

class App extends Component {
    // state = { count: 0 };

    componentDidMount() {
      store.subscribe(() => this.forceUpdate())
    }
  
    render() {
      return (
        <div className="App">
          <Header  />
          <Counter
          />
        </div>
      );
    }
  }

  export default App