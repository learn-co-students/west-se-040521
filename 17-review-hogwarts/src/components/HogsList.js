import React from 'react'
import HogTile from './HogTile'

// in the parameter of the HogsList function, we're using destructuring assignment to extract values from the props object received from HogsContainer
export default function HogsList({ hogs, chooseHog, greaseFilter, sortType }) {
    // convert the value of greaseFilter into a boolean
    const greasedState = greaseFilter === 'greased'
    // use the greasedState boolean in .filter to compare with the hog.greased boolean
    // also uses ternary operator to return an unfiltered array when greaseFilter === 'all'
    const filteredHogs = greaseFilter === 'all' ? hogs : hogs.filter(hog => hog.greased == greasedState)

    // uses a switch statement to apply .sort() on different hog properties according to the value of sortType
    // applies appropriate sort to filteredHogs array
    const sortHogs = () => {
        switch (sortType) {
            case 'weight':
                return [...filteredHogs].sort((a, b) => a.weight - b.weight)
            case 'name':
                return [...filteredHogs].sort((a, b) => a.name < b.name ? -1 : 1)
            default:
                return filteredHogs
        }
    }
    
    return (
        // implements Semantic UI library for a group of cards
        // <div className="ui grid container cards">
        <div className="ui cards">
            {sortHogs().map(hog => <HogTile 
                key={hog.name + hog.weight} 
                hog={hog}
                chooseHog={chooseHog}
             />)
            }
        </div>
    )
}
