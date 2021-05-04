import React from 'react'
// import { render } from 'react-dom'

export default class HogTile extends React.Component {

    state = {
        show: true
    }

    render(){
        // destructuring assignment
        const { hog, chooseHog } = this.props

        // formats hog.name into the necessary filename to import hog images
        const filename = hog.name.toLowerCase().split(' ').join('_')
        console.log(filename)
        const pigImage = require(`../hog-imgs/${filename}.jpg`)

        return (
           // Implements Semantic Card from Semantic UI library
            
            // <div className="ui eight wide column pigTile" style={this.state.show ? {} : {display: 'none'}} >
            <div className="ui pink card" style={this.state.show ? {} : {display: 'none'}} >
                <div className='image'>
                    <img onClick={() => chooseHog(hog)} src={pigImage} alt="a cute pig" />
                </div>
                <div className="content">
                    <div className="header">{hog.name}</div>
                </div>
                <div onClick={()=> this.setState({show: false})} className="ui bottom attached button">
                    Hide Hog
                </div>
                {/* <button onClick={()=> this.setState({show: false})}>X</button> */}
            </div>
        )

    }
}
