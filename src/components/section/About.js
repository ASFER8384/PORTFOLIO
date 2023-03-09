import React from 'react'
import styled from 'styled-components'
import Image from './Image'

// -->styling //
const Section = styled.div`
min-height:100vh;
width:100%;
background-color:${props=>props.theme.text};
color:${props=>props.theme.body};
display:flex;
justify-content:center;
align-items:center;
position:relative;
`


const Container = styled.div`
width: 75%;
margin:0 auto;

display:flex;
justify-content:center;
align-items:center;

@media (max-width:64em){
  width:85%;
}

@media (max-width:64em){
  width:100%;
  flex-direction:column;

  &>*:last-child{
    width:80%;
  }

}
`
const Box = styled.div`
width: 50%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

@media (max-width:40em){
  min-height:50vh;
}
`

const Title = styled.h2`
font-size:${props => props.theme.fontxxl};
text-transform: capitalize;
width:80%;
color:${props => props.theme.body};
align-items:center;
margin:0 auto;

@media (max-width:64em){
  width;100%;
  text-align:center;
}
@media (max-width:40em){
  font-size:${props => props.theme.fontxl};

}
@media (max-width:30em){
  font-size:${props => props.theme.fontlg};

}
`
const SubText = styled.p`
font-size:${props => props.theme.fontlg};
width:80%;
color:${props => props.theme.body};
align-items:center;
margin:1rem auto;
font-weight:400;

@media (max-width:64em){
  width;100%;
  text-align:center;
  font-size:${props => props.theme.fontmd};

}
@media (max-width:40em){
  font-size:${props => props.theme.fontmd};

}
@media (max-width:30em){
  font-size:${props => props.theme.fontsm};

}
`
const SubTextLight = styled.p`
font-size:${props => props.theme.fontlg};
width:80%;
color:${props =>`rgba(${props.theme.bodyRgba},0.6)`};
align-items:center;
margin:1rem auto;
font-weight:400;

@media (max-width:64em){
  width;100%;
  text-align:center;
  font-size:${props => props.theme.fontsm};

}
@media (max-width:40em){
  font-size:${props => props.theme.fontsm};

}
@media (max-width:30em){
  font-size:${props => props.theme.fontxs};

}
`
//styling --> //

export default function About() {
  return (
    <Section id='about'>
        <Container>
          <Box>
            <Image/>
          </Box>
          <Box>
            <Title>
              Hello This is Asfer Here!
             </Title>
             <SubText>
             Zen Class is one of the industry’s leading Project Based Career Programs offered by GUVI that promises 100% Job Placement Support on completing the course.
             </SubText>
             <SubTextLight>
             Zen Class is one of the industry’s leading Project Based Career Programs offered by GUVI that promises 100% Job Placement Support on completing the course.
             </SubTextLight>
          </Box>
        </Container>
    </Section>
  )
}
