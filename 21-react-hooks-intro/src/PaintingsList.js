import Painting from './Painting';

const PaintingsList = (props) => {

  return (
    <div>
      <h1>Paintings</h1>
      {
      props.paintings.map(painting => (
        <Painting
          key={painting.id}
          painting={painting}
        />
      ))
      }
    </div>
  );
};


export default PaintingsList;
