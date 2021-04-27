import React from 'react';
import PaintingCard from './PaintingCard';

// const PaintingList = (props) => {
//     console.log(props.paintings)
//     return (
//         <div>
//             <h1>PaintingList</h1>
//             {props.paintings.map((paintingObj) => <PaintingCard key={paintingObj.id} painting={paintingObj} />)}
//         </div>
//         )
// }

// We can convert PaintingList from a functional component to a class component. The class inherits functionality from React.Component, and our JSX must be returned from within a render() function
// Also note that props is now a property of an instance of PaintingList, so it must be accessed using the `this` keyword

class PaintingList extends React.Component {
    render(){
        return (
            <div>
                <h1>PaintingList</h1>
                {this.props.paintings.map((paintingObj) => <PaintingCard key={paintingObj.id} painting={paintingObj} />)}
            </div>
            )
    }
}

export default PaintingList