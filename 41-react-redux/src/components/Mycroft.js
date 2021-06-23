import React from 'react'
import Villain from './Villain'
import { connect } from 'react-redux'
import { arrestVillain } from '../actions/villains'

function Mycroft(props) {

    const renderVillains = () => {
        return props.villains.map(v => (
            <Villain v={v} key={v.name} villainCallback={handleArrestVillain}/>
        ))
    }

    const renderMoriartyLocations = () => {
        return props.locations.map(l => (
            <li>
                {l.location}; {l.time}
            </li>
        ))
    }

    const handleArrestVillain = villain => {
        props.arrestVillain(villain)
    }

    return (
        <>
            <h1>Mycroft</h1>
            <div>
                <h3>Villains List</h3>
                <ul>
                    {renderVillains()}
                </ul>
            </div>
            <div>
            <h3>Moriarty Locations</h3>
            <ul>
                {renderMoriartyLocations()}
            </ul>
        </div>
        </>
    )
}

// mapStateToProps returns an object that will get merged into the props {} on this component, so the keys of the mapStateToProps object become keys in props, and the values can be assigned from the state object in the store

// const mapStateToProps = (state) => ({
//     villains: state.villains
//     locations: state.locations
// })

const mapStateToProps = ({villains, locations}) => ({
    villains,
    locations
})

export default connect(mapStateToProps, {arrestVillain})(Mycroft)