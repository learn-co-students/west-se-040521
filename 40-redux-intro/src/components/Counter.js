import React, { Component } from 'react';
import {store} from '../App'


export default class Counter extends Component {

    increment = () => {
        store.dispatch({type: 'INCREMENT'})
    };
    
    decrement = () => {
        store.dispatch({type: 'DECREMENT'})
    };


    render() {
      return (
        <div className="Counter">
          <h1>{store.getState().count}</h1>
          <button onClick={this.decrement}> - </button>
          <button onClick={this.increment}> + </button>
        </div>
      );
    }
  }