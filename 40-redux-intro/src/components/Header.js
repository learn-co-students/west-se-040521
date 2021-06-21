import React, { Component } from 'react';
import logo from "../logo.svg";


export default class Header extends Component {
    renderDescription = () => {
      const remainder = this.props.count % 5;
      const upToNext = 5 - remainder;
      return `The current count is less than ${this.props.count + upToNext}`;
    };
  
    render() {
      return (
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <h3>{this.renderDescription()}</h3>
        </header>
      );
    }
  }