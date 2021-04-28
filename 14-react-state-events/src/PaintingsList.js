import React from 'react';
import Painting from './Painting';

// const PaintingsList = (props) => {

//   return (
//     <div>
//       <h1>Paintings</h1>
//       {
//       props.paintings.map(painting => (
//         <Painting
//           key={painting.id}
//           painting={painting}
//         />
//       ))
//       }
//     </div>
//   );
// };

// Class Component

class PaintingsList extends React.Component{
  render(){
    return(<div>
       <h1>Paintings</h1>
      {
      this.props.paintings.map(painting => (
        <Painting
          key={painting.id}
          painting={painting}
        />
      ))
      }
    </div>)
  }
}

export default PaintingsList;
