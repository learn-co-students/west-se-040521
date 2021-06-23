import React, { Component } from 'react'
import Form from './Form'
import {connect} from 'react-redux'
import {addMoriarty} from '../actions/moriarty'

class Watson extends Component {

    // handleAddVillain = ([name, dangerLevel, mo]) => {
    //     this.props.addNewVillain({name, dangerLevel, mo})
    // }

    handleAddMoriarty = ([location, time]) => {
        this.props.addNewMoriartyLocation({location, time})
    }

    render() {
        return (
            <div>
                <h1>Watson</h1>
                {/* <h3>Villains</h3>
                <Form 
                    inputs={['Name', 'Danger Level', 'M.O.']}
                    submitCallback={this.handleAddVillain}
                    submitValue={'Add Villain'}
                /> */}
                <h3>Moriarty Spottings</h3>
                <Form 
                    inputs={['Location', 'Time']}
                    submitCallback={this.handleAddMoriarty}
                    submitValue={'Add Spotting'}
                />

            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    // addNewVillain: info => dispatch(addVillain(info)),
    addNewMoriartyLocation: info => dispatch(addMoriarty(info))
})

export default connect(null, mapDispatchToProps)(Watson)
