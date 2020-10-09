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
  const [pageNum, setPageNum] = useState(1)
  const BASE_URL = 'https://rickandmortyapi.com/api/character/?page='

  const Flexydiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  `
  const Buttn = styled.button`
  border: none;
  width: 10rem;
  height: 3rem;
  background-color: rgb(23, 158, 176);
  opacity: .5;
  margin: 1rem 19.5rem;
  &:hover{
    opacity: 100;
    transition: .4s;
  }
  `
  const Flexydiv2 = styled.div`
  display:flex;
  justify-content:center;
  `
  useEffect(() => {
    axios.get(`
    ${BASE_URL}${pageNum}
    `).then(res => {
      setRMData(res.data.results)
    }).catch(err => {
      console.log('ERROR: ',err)
    })
  }, [pageNum])

  const increase = () =>{setPageNum(pageNum+1)}
  const decrease = () => {setPageNum(pageNum-1)}
  console.log(pageNum)

  if (pageNum <= 0){
    setPageNum(1)
  }

  return (
    <div className="App">
      <Flexydiv2>
      <Buttn id = 'button' onClick = {decrease} >Previous Page</Buttn>
      <Buttn id = 'button' onClick = {increase} >Next Page</Buttn>
      </Flexydiv2>
      <Flexydiv>
      {rmData.map(data => <Character img = {data.image} name = {data.name} gen = {data.gender} planet = {data.origin.name}></Character>)}
      </Flexydiv>
    </div>
  );
}

export default App;
