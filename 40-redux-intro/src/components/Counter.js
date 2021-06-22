import React, { Component } from 'react';
import {store} from '../App'


export default class Counter extends Component {

    increment = () => {
        store.dispatch({type: 'INCREMENT'})
    };
    
    decrement = () => {
        store.dispatch({type: 'DECREMENT'})
    };

    minusFive = () => {
        store.dispatch(
            {type: "MINUS_FIVE",
            payload: -5
            })
    }
        
    plusThree = () => {
        store.dispatch(
            {type: "MINUS_FIVE",
            payload: 3
            })   
    }


    render() {
        return (
        <div className="Counter">
            <h1>{store.getState().count}</h1>
            <button onClick={this.decrement}> - </button>
            <button onClick={this.increment}> + </button>
            <br />
            <button onClick={this.minusFive}> -5 </button>
            <button onClick={this.plusThree}> +3 </button>
        </div>
        );
    }
}