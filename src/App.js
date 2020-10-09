import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'
import Character from './components/Character'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [rmData, setRMData] = useState([{}])
  const BASE_URL = 'https://rickandmortyapi.com/api/character/?page='

  useEffect(() => {
    axios.get(`
    ${BASE_URL}
    `).then(res => {
      setRMData(res.data.results)
    }).catch(err => {
      console.log('ERROR: ',err)
    })
  }, [])

  const eh = rmData.map(x => x)
  console.log('console 3: ', eh[0].image)
  for(let i = 0; i < eh.length; i++){
    console.log(eh[i].name)
  }

  

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Character img = {eh[0].image} name = {eh[0].name} gen = {eh[0].gender}></Character>
    </div>
  );
}

export default App;
