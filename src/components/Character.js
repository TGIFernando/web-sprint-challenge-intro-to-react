// Write your Character component here
import React from 'react'
import styled from 'styled-components'


function Character(props){
    const {img} = props
    const {name} = props
    const {gen} = props
    const MainDiv = styled.div`
    border: 2px solid blue;
    background-color: rgba(50, 115, 220, 0.3);
    width: 45%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    `

    return(
        <MainDiv>
            <div>
            <h2>{name}</h2>
            <div>
                <img src = {img}></img>
            </div>
            <h3>{gen}</h3>
            </div>
        </MainDiv>
    )
}

export default Character