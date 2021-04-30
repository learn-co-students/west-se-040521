import React from 'react';

class Painting extends React.Component{

  constructor(props){
    super()
    this.state = {
      votes: props.painting.votes
    }
  }

  componentDidUpdate(prevProps, prevState){  // if you aren't going to use prevProps, you can use _ as a placeholder like (_, prevState)
    console.log("Painting: ComponentDidUpdate")

    // we access current props with this.props
    // and current state with this.state
    
    // prevState contains state before update
    // prevProps contains props before update

    if (prevState.votes < this.state.votes){
      console.log("Painting got a new vote!")
    }

  }

  addVote = () => {
    this.setState({
      votes: this.state.votes + 1
    })
  }

  render(){
    return (
      <div>
        <img src={this.props.painting.image} />
        <h4>
          "{this.props.painting.title}" by {this.props.painting.artist.name}
        </h4>
        <p>Year: {this.props.painting.date}</p>
        <p>
          Dimensions: {this.props.painting.dimensions.width} in. x {this.props.painting.dimensions.height} in.
        </p>

        <div className="ui labeled button" tabIndex="0">
          <div className="ui red button" onClick={this.addVote}>
            <i className="heart icon"></i> Add Vote
          </div>
          <a className="ui basic red left pointing label">
            {this.state.votes}
          </a>
        </div>
      </div>
        
    );
  }
  
};

export default Painting;
