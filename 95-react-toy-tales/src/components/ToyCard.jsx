import React, { Component } from 'react';

class ToyCard extends Component {

  state = {
    likes: this.props.toy.likes
  }

  updateLikes = () => {
    this.props.patchLikes(this.props.toy)
    this.setState({
      likes: this.state.likes + 1
    })
  }

  handleDelete = event => {
    this.props.deleteToy(this.props.toy.id, event.target.parentNode)
  }

  render() {
    const { name, image } = this.props.toy
    return (
      <div className="card">
        <h2>{name}</h2>
        <img src={image} alt={name} className="toy-avatar" />
        <p>{this.state.likes} Likes </p>
        <button onClick={this.updateLikes} className="like-btn">Like {'<3'}</button>
        <button onClick={this.handleDelete} className="del-btn">Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;
