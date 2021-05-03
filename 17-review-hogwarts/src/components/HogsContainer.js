import React, { Component } from 'react'
import HogsList from './HogsList'
import HogDetail from './HogDetail'
import FilterSort from './FilterSort'
import hogs from "../porkers_data";


export default class HogsContainer extends Component {

    state = {
        greaseFilter: 'all',
        sortType: 'none',
        chosenHog: null
    }
    render() {
        return (
            <div>
                <h1>HogsContainer</h1>
                <FilterSort />
                {this.state.chosenHog ? <HogDetail /> : <HogsList hogs={hogs}/>}
            </div>
        )
    }
}
