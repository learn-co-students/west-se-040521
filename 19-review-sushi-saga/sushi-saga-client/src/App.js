import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    allSushis: [],
    currIndex: 0
  }

  componentDidMount() {
    fetch(API)
      .then(res => res.json())
      .then(sushArr => {
        const enhanced = sushArr.map(s => {s.eaten = false; return s})
        this.setState({ allSushis: enhanced})
      })
  }

  getSlice = () => {
    return this.state.allSushis.slice(this.state.currIndex, this.state.currIndex + 4)
  }

  nextFour = () => {
    this.setState({ currIndex: this.state.currIndex + 4})
  }

  eatSushi = sushi => {
    console.log('ate a soosh')
  }

  render() {
    return (
      <div className="app">
        <SushiContainer 
          sushis={this.getSlice()} 
          nextFour={this.nextFour}
          eatSushi={this.eatSushi}
        />
        <Table />
      </div>
    );
  }
}

export default App;