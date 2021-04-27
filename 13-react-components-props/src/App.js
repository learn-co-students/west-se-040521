import PaintingList from './PaintingList'
import paintings from './painting_data'
import NavBar from './NavBar'

function App() {
  // console.log(paintings)
  return (
    <>
      <NavBar 
        color="green"
        icon="paint brush"
        title="Paintr"
        description="An app we made"
      />
      <PaintingList paintings={paintings}/>
    </>
  );
}

export default App;
