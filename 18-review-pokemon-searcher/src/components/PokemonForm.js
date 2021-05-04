import React from 'react'
import { Form } from 'semantic-ui-react'

// [x] Wire up the form to add a missing pokemon; new pokemon added to db AND DOM

class PokemonForm extends React.Component {

  state = {
    name: '',
    hp: '',
    frontUrl: '',
    backUrl: ''
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.setState({
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    })
    this.props.addPokemon(this.state)
  }
  
  // this is completely optional; you can always just write out your inputs in the form
  renderInputs = () => {
    return ['name', 'hp', 'frontUrl', 'backUrl'].map((inputName, idx) => {
      return (
        <Form.Input
          key={inputName + idx}
          fluid label={inputName}
          placeholder={inputName}
          name={inputName}
          value={this.state[`${inputName}`]}
          onChange={this.handleChange}
        />
      )
    })
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <img src={this.state.frontUrl} />
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            {/* <Form.Input fluid label="Name" placeholder="Name" name="name" value={this.state.name} onChange={this.handleChange}/>
            <Form.Input fluid label="hp" placeholder="hp" name="hp" value={this.state.hp} onChange={this.handleChange}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" value={this.state.frontUrl} onChange={this.handleChange}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" value={this.state.backUrl} onChange={this.handleChange}/> */}
            {this.renderInputs()}
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
