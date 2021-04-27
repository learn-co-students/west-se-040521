import PaintingList from './PaintingList'
import paintings from './painting_data'

function App() {
  // console.log(paintings)
  return (
    <PaintingList paintings={paintings}/>
  );
}

export default App;
