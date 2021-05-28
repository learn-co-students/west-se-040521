import React from 'react';
import ToyCard from './ToyCard'

const ToyContainer = (props) => {
  return(
    <div id="toy-collection">
      {props.toyData.map(toy => <ToyCard key = {toy.id} toy={toy} handleLikes = {props.handleLikes} deleteToy={props.deleteToy}/>)}
    </div>
  );
}

export default ToyContainer;
