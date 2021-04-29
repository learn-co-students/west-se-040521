import React from 'react'
import 'semantic-ui-css/semantic.min.css';
import NavBar from './NavBar';
import PaintingsList from './PaintingsList';
import paintings from './painting_data'
import PaintingForm from './PaintingForm'


class App extends React.Component{

  constructor(){
    super()
    this.state = {
      color: "red",
      paintings: paintings,
      formView: false
    }
  }

  changeColor = () => {
    this.setState({color: "yellow"})
  }

  toggleForm = () => {
    this.setState({
      formView: !this.state.formView
    })
  }


  addPainting = (data) => {
    console.log(data)
    const newPainting = {
      image: data.image,
      title: data.title,
      artist: {
        name: data.artist
      },
      date: data.date,
      dimensions: {
        width: data.width,
        height: data.height
      },
      votes: 0
    }
    this.setState({
      paintings: [...this.state.paintings, newPainting],
      formView: !this.state.formView
    })
  }

  addVote = (id) => {
    console.log("in addVote", id)
    this.setState({
      paintings: this.state.paintings.map(pObj => {
        if(pObj.id === id){
          return {...pObj, votes: pObj.votes + 1}
        } else {
          return pObj
        }
      })
    })
  }

  render(){
  return (
    <div>

      <NavBar
        color={this.state.color}
        title="Paintr"
        icon="paint brush"
        description="an app we made"
        changeColor={this.changeColor}
      />

      <button onClick={this.toggleForm}>Show/Hide new painting form</button>

      {this.state.formView ? <PaintingForm addPainting={this.addPainting}/> : <PaintingsList paintings={this.state.paintings} addVote={this.addVote}/>}

    </div>
  )
  }
}

export default App;
