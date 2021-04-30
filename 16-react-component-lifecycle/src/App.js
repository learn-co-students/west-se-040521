import React from 'react'
import 'semantic-ui-css/semantic.min.css';
import NavBar from './NavBar';
import PaintingsList from './PaintingsList';
import PaintingForm from './PaintingForm'
// import paintings from './painting_data'
import Bob from './Bob'
import { findRenderedDOMComponentWithClass } from 'react-dom/test-utils';

class App extends React.Component{

  constructor(){
    console.log("APP: Constructor")
    super()
    this.state = {
      color: "red",
      paintings: [],
      formView: false,
      bobView: false // toggle-able boolean for conditional rendering of <Bob />
    }
  }
  
  // componentDidMount() is often used for initial fetches
  // lifecycle methods are only available on class components
  componentDidMount() {
    console.log("APP: ComponentDidMount")
    fetch('http://localhost:3000/paintings')
    .then(res => res.json())
    .then(paintings => this.setState({ paintings })) // { paintings } is the same as { paintings: paintings }
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
  console.log("APP: Render")
  return (
    <div>
      {/* conditional rendering of a single component using logical AND */}
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
