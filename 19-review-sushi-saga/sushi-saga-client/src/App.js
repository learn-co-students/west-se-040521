import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import WalletForm from './components/WalletForm'

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
    this.setState(prevState => {
      let tempIndex
      if (prevState.currIndex + 4 >= prevState.allSushis.length){
        tempIndex = 0
      } else {
        tempIndex = prevState.currIndex + 4
      }
      return { currIndex: tempIndex}})
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

  getEaten = () => {
    return this.state.allSushis.filter(s => s.eaten === true)
  }

  addMoney = (amt) => {
    // let amt = prompt("How much money are you adding?")
    // if(!amt.match(/[0-9/]/)){
    //   alert("Must enter numbers only!")
    // } else {
    //   let newMoney = parseInt(amt) + this.state.money
    //   this.setState({money: newMoney})
    // }
    let newMoney = parseInt(amt.amount) + this.state.money
    this.setState({money: newMoney})
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
        eatenSushis={this.getEaten()}
        money={this.state.money}
        />
        {/* <button onClick={this.addMoney}>Add $$$</button> */}
        <WalletForm addMoney={this.addMoney} />
      </div>
    );
  }
}

export default App;