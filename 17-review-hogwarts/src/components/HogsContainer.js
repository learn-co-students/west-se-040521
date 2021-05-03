import React, { Component } from 'react'
import HogsList from './HogsList'
import HogDetail from './HogDetail'
import FilterSort from './FilterSort'

export default class HogsContainer extends Component {
    render() {
        return (
            <div>
                <h1>HogsContainer</h1>
                <HogsList />
                <HogDetail />
            </div>
        )
    }
}
