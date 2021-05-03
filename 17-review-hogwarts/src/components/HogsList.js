import React from 'react'
import HogTile from './HogTile'

export default function HogsList({ hogs }) {
    console.log(hogs)
    return (
        <div className="ui grid container">
            {hogs.map(hog => <HogTile key={hog.name + hog.weight} hog={hog}/>)}
        </div>
    )
}
