import React, { } from 'react'
import styled from 'styled-components'

import html from '../../assets/Skill-Icon/one.svg'
import css from '../../assets/Skill-Icon/css.svg'
import js from '../../assets/Skill-Icon/js.svg'
import mui from '../../assets/Skill-Icon/mui.svg'
import bst from '../../assets/Skill-Icon/bt.svg'
import njs from '../../assets/Skill-Icon/node.svg'




const Section = styled.section`
width:100vw;
height:auto;
background-color:${props => props.theme.body};
position:relative;
`


const Title = styled.h2`
font-size:${(props) => props.theme.fontxxl};
text-transform: capitalize;
width:100%;
color:${props => props.theme.text};
display: flex;
justify-content: center;
margin:1rem auto;
border-bottom:2px solid ${props => props.theme.text};
width:fit-content; 
`

const Container = styled.div`
width:75%;
margin:2rem auto;

display: flex;
justify-content: space-around;
align-items: center;
flex-wrap: wrap;
`


const Item = styled.div`
width: calc(20rem - 4vw);
padding: 1rem 0 ;

color:${props => props.theme.body} ;
margin: 2rem 1rem;
position: relative;

border:2px solid ${props => props.theme.text};
border-radius:20px;

&:hover{
    img{
        transform:translateY(-2rem) scale(1.2);
    }
}
`


const ImageContainer = styled.div`
width: 15rem;
margin: 0 auto;
background-color:${(props) => props.theme.carouse1Color} ;
border-radius: 20px;
cursor: pointer;
border:2px solid ${props => props.theme.text};

img{
  width:100%;
  height:auto;
  transition: all 0.1s ease;

}
`


const Tittle = styled.h2`
display: flex;
justify-content: center;
align-items: center;
text-transform: uppercase;
margin-top: 1rem;
font-size:${(props) => props.theme.fontlg} ;
color:${(props) => props.theme.text} ;
font-weight: 600;

@media (max-width:19em){
    font-size:${props => props.theme.fontxs};
    text-align:center;
  }
`


const Quote = styled.h2`
display: flex;
justify-content: center;
align-items: center;
text-transform: uppercase;
margin-top: 1rem;
font-size:${(props) => props.theme.fontmd} ;
color:${(props) => `rgba(${props.theme.textRgba},0.9)`} ;
`


const Blogs = ({ img, name = "", subTitle = "" }) => {
    return (
        <Item>
            <ImageContainer>
                <img src={img} alt={name} />
            </ImageContainer>
                <Tittle>{name}</Tittle>
                <Quote>{subTitle}</Quote>
        </Item>
    )
}


export default function Work() {

    return (
        <Section id='work' >
            <Title>
                Latest Work
            </Title>
            <Container>
                <a href="https://www.wix.com/blog/2021/01/blog-niche-ideas/#viewer-3gll7"><Blogs name="Ecom" subTitle="#reactjs" img={html} /></a>
                <a href="https://www.wix.com/blog/2021/01/blog-niche-ideas/#viewer-3gll7"><Blogs  name="Ecom" subTitle="#reactjs" img={css} /></a>
                <a href="https://www.wix.com/blog/2021/01/blog-niche-ideas/#viewer-3gll7"><Blogs  name="Ecom" subTitle="#reactjs" img={js} /></a>
                <a href="https://www.wix.com/blog/2021/01/blog-niche-ideas/#viewer-3gll7"><Blogs  name="Ecom" subTitle="#reactjs" img={njs} /></a>
                <a href="https://www.wix.com/blog/2021/01/blog-niche-ideas/#viewer-3gll7"><Blogs  name="Ecom" subTitle="#reactjs" img={bst} /></a>
                <a href="https://www.wix.com/blog/2021/01/blog-niche-ideas/#viewer-3gll7"><Blogs  name="Ecom" subTitle="#reactjs" img={mui} /></a>
            </Container>
        </Section>
    )
}
