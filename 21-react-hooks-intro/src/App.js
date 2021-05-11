import { useState, useEffect } from 'react'
import 'semantic-ui-css/semantic.min.css';
import NavBar from './NavBar';
import PaintingsList from './PaintingsList';
// import paintings from './painting_data'



function App() {

  const [color, setColor] = useState('red')
  const [paintings, setPaintings] = useState([])

  useEffect(() => {
    console.log("mounted")
    fetch('http://localhost:3000/paintings')
    .then(res => res.json())
    .then(paintings => setPaintings(paintings))
  }, [])

  const changeColor = () => {
    setColor('teal')
  }

  return (
    <div>
      <NavBar
        color={color}
        title="Paintr"
        icon="paint brush"
        description="an app we made"
        changeColor={changeColor}
      />
      <PaintingsList paintings={paintings} />
    </div>
  );
}

export default App;
