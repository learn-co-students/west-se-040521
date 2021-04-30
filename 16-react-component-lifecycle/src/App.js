import React from 'react'
import 'semantic-ui-css/semantic.min.css';
import NavBar from './NavBar';
import PaintingsList from './PaintingsList';
import PaintingForm from './PaintingForm'
import paintings from './painting_data'
import Bob from './Bob'

class App extends React.Component{

  constructor(){
    super()
    this.state = {
      color: "red",
      paintings: paintings,
      formView: false,
      bobView: false // toggle-able boolean for conditional rendering of <Bob />
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

  toggleBob = () => {
    this.setState({
      bobView: !this.state.bobView
    })
  }

  addPainting = (info) => {

    const newPainting = {
      // id: this.state.paintings[this.state.paintings.length-1].id + 1, //BONUS to get rid of warning
      image: info.image,
      title: info.title,
      artist: {
        name: info.artist
      },
      date: info.date,
      dimensions: {
        width: info.width,
        height: info.height
      },
      votes: 0 //add initial votes for a painting
    } // to match painting data format

    this.setState({
      paintings: [...this.state.paintings, newPainting], //.push is not used here because it returns length of an array after adding new element
      formView: !this.state.formView //to display paintings after adding a new painting info
    })


  }

  render(){
  
  return (
    <div>

      {this.state.bobView && <Bob/>}


      <NavBar
        color={this.state.color}
        title="Paintr"
        icon="paint brush"
        description="an app we made"
        changeColor={this.changeColor}
      />

      <button onClick={this.toggleForm}>Show/Hide new painting form</button><br/>
      <button className="bob-btn" onClick={this.toggleBob}>Show/Hide Bob Ross</button>

      {this.state.formView 
      ? <PaintingForm addPainting={this.addPainting} /> 
      : <PaintingsList paintings={this.state.paintings} />}

    </div>
  )
  }
}

export default App;
