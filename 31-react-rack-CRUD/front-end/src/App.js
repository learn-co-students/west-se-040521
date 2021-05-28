import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'

URL = "http://localhost:3000/toys"
class App extends React.Component{

  state = {
    display: false,
    toys: []
  }

  componentDidMount(){
    fetch(URL)
    .then(res => res.json())
    .then(toyData => {
      this.setState({
        toys: toyData
      })
    })
  }

  handleIncreaseLikes = (toyLike) => {
    let updateToy = {likes: toyLike.likes+1}
    let reqPackage = {
      headers: {"Content-Type":"application/json"},
      method: "PATCH",
      body: JSON.stringify(updateToy)
    }

    fetch(`${URL}/${toyLike.id}`, reqPackage)
    .then(res => res.json())
    .then(updateToy => {
      this.setState({
        toys: [...this.state.toys.map(toy => toy.id === updateToy.id ? updateToy : toy)]
      })
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    let newToy = {
      name: event.target.name.value,
      image: event.target.image.value,
      likes: 0
    }

    let reqPackage = {
      headers: {"Content-Type":"application/json"},
      method: "POST",
      body: JSON.stringify(newToy)
    }

    fetch(URL, reqPackage)
    .then(res => res.json())
    .then(toy => {
      this.setState({
        toys: [...this.state.toys, toy],
        display: !this.state.display
      })
    })
  }

  deleteToy = (toyDelete) => {
    fetch(`${URL}/${toyDelete.id}`, {
      method: "DELETE",
    })
    .then(res => res.json())
    .then(() => {
      this.setState({
        toys: this.state.toys.filter(toy => toy !== toyDelete)
      })
    })
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  render(){
    return (
      <>
        <Header/>
        { this.state.display
            ?
          <ToyForm handleSubmit = {this.handleSubmit}/>
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer toyData={this.state.toys} handleLikes={this.handleIncreaseLikes} 
        deleteToy={this.deleteToy} />
      </>
    );
  }

}

export default App;
