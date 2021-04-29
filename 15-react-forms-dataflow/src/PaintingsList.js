import React from 'react';
import Painting from './Painting';

class PaintingsList extends React.Component{
  render(){
    return(<div>
       <h1>Paintings</h1>
      {
      this.props.paintings.map(painting => (
        <Painting
          key={painting.id}
          painting={painting}
          addVote={this.props.addVote}
        />
      ))
      }
    </div>)
  }
}

export default PaintingsList;
