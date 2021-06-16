import {useState, useEffect} from 'react'
import PageHeader from './components/PageHeader'
import AnimalsTable from './components/AnimalsTable'
import AnimalsForm from './components/AnimalsForm'

function App() {

  const URL = 'http://localhost:3000/api/v1/animals'

  const [animals, setAnimals] = useState([])

  useEffect(() => {
    fetch(URL)
    .then(r => r.json())
    .then(animals => setAnimals(animals))
  },
  [])

  const addAnimal = animal => {
    console.log(animal)
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(animal)
    }
    fetch(URL, config)
    .then(r => r.json())
    .then(newAnimal => setAnimals([...animals, newAnimal]))
  }

  return (
    <>
      <PageHeader />
      <AnimalsForm addAnimal={addAnimal}/>
      <AnimalsTable animals={animals}/>
    </>
  );
}

export default App;
