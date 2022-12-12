import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive';

const Container = styled.div`
height: 30px;
background-color: orange;
color: #000;
font-size: 16px;
font-weight: 600;
display: flex;
justify-content: center;
align-items: center;
position: relative;
top: 0;
width: 100%;
z-index: 2;
${mobile({ padding: "10px 0", hegiht: "20px", fontSize: "13px" })}
`

const Announcement = () => {
  return (
    <Container>
        WARNING!!! This site is just a practice! You can't ACTUALLY buy anything.
    </Container>
  )
}

export default Announcement