import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    allSushis: [],
    currIndex: 0,
    money: 100
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
    if (sushi.eaten) {
      alert("You can't eat what's in your belly!")
    } else if (sushi.price > this.state.money){
      alert("You broke the bank! No mo soosh!")
    } else {
      sushi.eaten = true
      // TODO: forceUpdate is temp workaround until we update money
      // this.forceUpdate()
      this.setState({ money: this.state.money - sushi.price})
    }
  }

  render() {
    return (
      <div className="app">
        <SushiContainer 
          sushis={this.getSlice()} 
          nextFour={this.nextFour}
          eatSushi={this.eatSushi}
        />
        <Table 
        eatenSushis={this.state.allSushis.filter(s => s.eaten === true)}
        money={this.state.money}
        />
      </div>
    );
  }
}

export default App;