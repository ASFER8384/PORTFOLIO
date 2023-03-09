import React from 'react'


import styled from 'styled-components'


import img1 from "../../assets/Skill-Icon/bt.svg"

const Container = styled.div`
width: 25vw;
height:70vh ;

img{
    width:100%;
    height:100%
}

@media (max-width:70em){
  height:60vh ;

}

@media (max-width:64em){
  height:50vh ;
  width: 30vw;

}
@media (max-width:48em){
  height:50vh ;
  width: 40vw;

}
@media (max-width:30em){
  height:45vh ;
  width: 60vw;

}
`

export default function Image() {
  return (
    <Container>
        <img src={img1} alt="my-self"  />
    </Container>
  )
}
