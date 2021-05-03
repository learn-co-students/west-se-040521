import React from 'react'

export default function HogTile({hog}) {

    const filename = hog.name.toLowerCase().split(' ').join('_')
    console.log(filename)
    const pigImage = require(`../hog-imgs/${filename}.jpg`)
    return (
        <div className="ui eight wide column pigTile">
            <img src={pigImage} />
            <h3>{hog.name}</h3>
        </div>
    )
}
