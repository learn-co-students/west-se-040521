import React, { Component } from 'react';


export default class Counter extends Component {
    render() {
      return (
        <div className="Counter">
          <h1>{this.props.count}</h1>
          <button onClick={this.props.decrement}> - </button>
          <button onClick={this.props.increment}> + </button>
        </div>
      );
    }
  }