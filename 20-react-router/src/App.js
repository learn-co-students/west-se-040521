import React from 'react'
import 'semantic-ui-css/semantic.min.css';
import NavBar from './NavBar';
import PaintingsList from './PaintingsList';
import PaintingForm from './PaintingForm'


class App extends React.Component{

  constructor(){
    super()
    this.state = {
      color: "red",
      paintings: [],
      formView: false
    }
  }

  componentDidMount(){
    fetch("http://localhost:3000/paintings")
    .then(res => res.json())
    .then(paintings => this.setState({ paintings })) 
  }

  changeColor = () => {
    this.setState({color: "yellow"})
  }

  toggleForm = () => {
    this.setState({
      formView: !this.state.formView
    })
  }

  addPainting = (info) => {
    // console.log(info)

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
      paintings: [...this.state.paintings, newPainting], 
      formView: !this.state.formView //to display paintings after adding a new painting info
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

      {this.state.formView 
      ? <PaintingForm addPainting={this.addPainting} /> 
      : <PaintingsList paintings={this.state.paintings} />}

    </div>
  )
  }
}

export default App;
