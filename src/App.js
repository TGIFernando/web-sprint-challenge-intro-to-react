import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'
import Character from './components/Character'
import styled from 'styled-components'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [rmData, setRMData] = useState([])
  const BASE_URL = 'https://rickandmortyapi.com/api/character/?page='
  const Flexydiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  `

  useEffect(() => {
    axios.get(`
    ${BASE_URL}
    `).then(res => {
      setRMData(res.data.results)
    }).catch(err => {
      console.log('ERROR: ',err)
    })
  }, [])

  return (
    <div className="App">
      <Flexydiv>
      {rmData.map(data => <Character img = {data.image} name = {data.name} gen = {data.gender} age = {data.age}></Character>)}
      </Flexydiv>
    </div>
  );
}

export default App;
