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

      {this.state.formView ? <PaintingForm/> : <PaintingsList paintings={this.state.paintings} />}

    </div>
  )
  }
}

export default App;
