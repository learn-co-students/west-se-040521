import React, { Component } from 'react';
import Counter from './components/Counter';
import Header from './components/Header';

class App extends Component {
    state = { count: 0 };
  
    increment = () => {
      this.setState(prevState => ({ count: prevState.count + 1 }));
    };
  
    decrement = () => {
      this.setState(prevState => ({ count: prevState.count - 1 }));
    };
  
    render() {
      return (
        <div className="App">
          <Header count={this.state.count} />
          <Counter
            count={this.state.count}
            increment={this.increment}
            decrement={this.decrement}
          />
        </div>
      );
    }
  }

  export default App