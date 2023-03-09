import React from 'react'
import styled from 'styled-components'


import GIF from "../../assets/Home Video.mp4"


const ViedoContainer = styled.div`
width:100%;

video{
    width:100%;
    height:auto;
}
`

export default function CoverViedo() {
  return (
    <>
      <ViedoContainer>
        <video src={GIF} type="video/mp4" autoPlay muted loop />
      </ViedoContainer>
    </>
  )
}
