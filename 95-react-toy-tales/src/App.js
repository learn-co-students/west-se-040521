import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'


class App extends React.Component{

  state = {
    display: false,
    allToys: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/toys')
    .then(res => res.json())
    .then(toys => this.setState({ allToys: toys }))
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  postToyData = toy => {
    // make config object with POST method
    const configObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(toy)
    }

    // make fetch
    fetch('http://localhost:3000/toys', configObj)
    .then(res => res.json())
    // update state with return of fetch
    .then(toy => {
      this.setState({
        allToys: [...this.state.allToys, toy]
      })
    })
  }

  deleteToy = (id, parentNode) => {
    console.log(id, parentNode);

    const configObj = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }

    fetch(`http://localhost:3000/toys/${id}`, configObj)
    .then(res => res.json())
    .then(parentNode.remove())
  }

  patchLikes = (toy) => {
    toy.likes += 1

    const toyObj = {
      likes: toy.likes
    }

    const configObj = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(toyObj)
    }

    fetch(`http://localhost:3000/toys/${toy.id}`, configObj)
    .then(res => res.json())

  } 

  render(){
    return (
      <>
        <Header/>
        { this.state.display
            ?
          <ToyForm postToyData={this.postToyData} />
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer deleteToy={this.deleteToy} patchLikes={this.patchLikes} toys={this.state.allToys} />
      </>
    );
  }

}

export default App;
