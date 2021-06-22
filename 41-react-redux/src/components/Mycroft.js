import React from 'react'
import Villain from './Villain'
import { connect } from 'react-redux'

function Mycroft(props) {

    const renderVillains = () => {
        return props.villains.map(v => (
            <Villain v={v} key={v.name}/>
        ))
    }

    const renderMoriartyLocations = () => {
        return props.locations.map(l => (
            <li>
                {l.location}; {l.time}
            </li>
        ))
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

const mapStateToProps = ({villains, locations}) => ({
    villains,
    locations
})

export default connect(mapStateToProps)(Mycroft)