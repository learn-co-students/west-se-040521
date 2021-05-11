import { useState } from 'react'

const Painting = props => {

  const [votes, setVotes] = useState(props.painting.votes)

  return (
    <div>
      <img src={props.painting.image} />
      <h4>
        "{props.painting.title}" by {props.painting.artist.name}
      </h4>
      <p>Year: {props.painting.date}</p>
      <p>
        Dimensions: {props.painting.dimensions.width} in. x {props.painting.dimensions.height} in.
      </p>
      <div className="ui labeled button" tabIndex="0">
        <div className='ui red button' onClick={() => setVotes(votes + 1)}>
          <i className='heart icon'></i> Add Vote
        </div>
        <a className="ui basic red left pointing label">{votes}</a>
      </div>
    </div>
      
  );
};

export default Painting;
