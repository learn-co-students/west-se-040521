import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css';
import NavBar from './NavBar';
import PaintingForm from './PaintingForm';
import PaintingsList from './PaintingsList';
import paintings from './painting_data'



// function App() {
//   return (
//     <div>
//       <NavBar
//         color="red"
//         title="Paintr"
//         icon="paint brush"
//         description="an app we made"
//       />
//       <PaintingsList paintings={paintings} />
//     </div>
//   );
// }

export default class App extends Component {

  constructor(){
    super()
    this.state = {
      color: "purple",
      formView: false
    }
    
  }

  // initializing state outside of constructor 
  // state = {
  //   color: "red"
  // }

  changeColor = () => {
    // this.state.color = "yellow"  // ANTI-PATTERN don't mutate state directly
    this.setState({ color: "yellow"}, () => console.log(this.state.color))  // the 2nd (optional) argument is a callback that only fires when setState is finished 
    console.log(this.state.color) // showing that setState is async
  }

  toggleForm = () => {
    this.setState(prevState => { //alternate syntax for setState
      return { formView: !prevState.formView }
    })
  }
  
  render() {
    return (
      <div>
        <NavBar
          color={this.state.color}
          title="Paintr"
          icon="paint brush"
          description="an app we made"
          myChangeColor={this.changeColor}
        />
        {/* <button onClick={() => this.changeColor()}>Change color</button> */}
        {/* <button onClick={this.changeColor}>Change color</button> can just give a reference to the callback fn without calling it */}
        <button onClick={this.toggleForm}>Show/Hide new painting form</button>
        {this.state.formView ? <PaintingForm /> : <PaintingsList paintings={paintings} />}
      </div>
    );

  }
}

// export default App;
