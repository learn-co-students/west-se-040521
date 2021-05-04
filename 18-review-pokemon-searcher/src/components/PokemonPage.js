import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokemon: [],
    filteredPokemon: []
  }

  // [X] Create an index displaying pokemon 'cards'
  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
      .then(res => res.json())
      .then(pokeArr => this.setState({ pokemon: pokeArr, filteredPokemon: pokeArr}))
  }

  // [x] Allow users to search a pokemon by its name in order to narrow down the cards shown on the page

  search = e => {
    console.log(e.target.value)
    let filteredArr
    e.target.value.length ?
    filteredArr = this.state.pokemon.filter(poke => poke.name.includes(e.target.value)) :
    filteredArr = this.state.pokemon
    this.setState({filteredPokemon: filteredArr})
  }

  // [X] Wire up the form to add a missing pokemon; new pokemon added to db AND DOM
  
  // {
    //   "id": 2,
    //   "name": "ivysaur",
    //   "hp": 60,
    //   "sprites": {
    //     "front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
    //     "back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png"
    //   }
    // }
  addPokemon = (pokeData) => {
    // e.preventDefault()
    console.log(pokeData)
    // destructuring the data object
    const { name, hp, frontUrl, backUrl } = pokeData
    // composing its values into a new object conforming to the shape of db objects
    const newPoke = {
      name,
      hp,
      sprites: {
        front: frontUrl,
        back: backUrl
      }
    }
    // compose our fetch config object
    const config = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(newPoke)
    }
    // do the fetch with the config, then update state with newPoke from db
    fetch('http://localhost:3000/pokemon', config)
      .then(res => res.json())
      .then(newPoke => {
        this.setState({
          pokemon: [newPoke, ...this.state.pokemon],
          filteredPokemon: [newPoke, ...this.state.filteredPokemon]
        })
      })

  }


  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon}/>
        <br />
        <Search search={this.search} />
        <br />
        <PokemonCollection pokemon={this.state.filteredPokemon}/>
      </Container>
    )
  }
}

export default PokemonPage
