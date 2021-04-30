import React, { Component } from 'react';

class Bob extends Component {

    constructor() {
        super();
        this.bob = React.createRef();
        this.width = document.body.offsetWidth;
        this.height = document.body.offsetHeight;
    }

    // TODO: MAKE BOB MOVE EVERY SECOND
    componentDidMount() {
        console.log("BOB: ComponentDidMount")
        this.timer = setInterval(() => {
            this.move()
        }, 1000)
    }

    componentWillUnmount() { // this method is commonly used to clean up an component side-effects, like timers or network calls
        clearInterval(this.timer)
    }
    
  
    // CALL THIS EVERY SECOND TO MOVE THE BOB
    move = () => {
        this.bob.current.style.left = `${Math.floor(Math.random() * this.width)}px`;
        this.bob.current.style.top = `${Math.floor(Math.random() * this.height)}px`;
    };

    render() {
        return (
            <div className="bob" ref={this.bob}></div>
        );
    }
}

export default Bob;
