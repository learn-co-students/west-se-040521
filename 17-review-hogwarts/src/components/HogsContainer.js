import React, { Component } from 'react'
import HogsList from './HogsList'
import HogDetail from './HogDetail'
import FilterSort from './FilterSort'
import hogs from "../porkers_data";

export default class HogsContainer extends Component {

    // using Class field (ES6) to initialize state and bind it to an instance (instead of constructor)
    state = {
        greaseFilter: 'all',
        sortType: 'none',
        chosenHog: null
    }

    // CALLBACK FUNCTIONS: these fns are all passed down in props to child components; events on the children can change state here
    chooseHog = chosenHog => {
        this.setState({ chosenHog }) // {chosenHog: chosenHog}
    }
    closeHog = () => {
        this.setState({ chosenHog: null })
    }
    selectFilter = greaseFilter => {
        this.setState({ greaseFilter })
    }
    selectSort = sortType => {
        this.setState({ sortType })
    }

    render() {
        return (
            <div>
                <FilterSort selectFilter={this.selectFilter} selectSort={this.selectSort}/>
                {this.state.chosenHog ? <HogDetail hog={this.state.chosenHog} closeHog={this.closeHog}/> : 
                <HogsList 
                    hogs={hogs}
                    chooseHog={this.chooseHog}
                    greaseFilter={this.state.greaseFilter}
                    sortType={this.state.sortType}
                    />}
            </div>
        )
    }
}
