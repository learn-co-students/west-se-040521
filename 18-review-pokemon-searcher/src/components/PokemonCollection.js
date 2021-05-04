import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  // [X] Create an index displaying pokemon 'cards'

  renderPokemon = () => {
    return this.props.pokemon.map(poke => <PokemonCard key={poke.id} poke={poke}/>)
  }


  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {this.renderPokemon()}
      </Card.Group>
    )
  }
}

export default PokemonCollection
