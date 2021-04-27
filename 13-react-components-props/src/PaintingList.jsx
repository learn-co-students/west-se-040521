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