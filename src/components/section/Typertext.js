import React from 'react'
import styled from 'styled-components'

import Typewriter from 'typewriter-effect';


const Title = styled.h2`
font-size:${props => props.theme.fontxxl};
text-transform: capitalize;
width:80%;
color:${props => props.theme.text};
display: flex;
justify-content: start;
flex-direction: column;
align-items:start;

span{
    text-transform: uppercase;
    font-family:Akaya Telivigala ;
    
}
.text-1{
    color:blue ;
}
.text-2{
    color:orange;
}
.text-3{
    color:green ;
}
.text-4{
    color:red;
}
@media (max-width:70em) {
    font-size:${props => props.theme.fontxl} ;
}
@media (max-width:48em) {
    align-self:center;
    text-align:center;
    align-items:center;
}
`
const SubTitle = styled.h3`
font-size:${props => props.theme.fontlg};
text-transform: capitalize;
color:${props => `rgba(${props.theme.textRgba},0.6)`};

font-weight: 600;
margin-bottom: 1rem;
margin-top: 1rem;
width: 80%;
align-items: flex-start;

@media (max-width:40em) {
    font-size:${props => props.theme.fontmd};

}
@media (max-width:48em) {
    align-self:center;
    text-align:center;
}
`


export default function Typertext() {
    return (
        <>
            <Title>
                DISCOVER A New era of cool
                <Typewriter
                    options={
                        {
                            autoStart: true,
                            loop: true,
                        }
                    }
                    onInit={(typewriter) => {
                        typewriter.typeString('<span class="text-1">developer</span>')
                            .pause(2000)
                            .deleteAll()
                            .typeString('<span class="text-2">thinker</span>')
                            .pause(2000)
                            .deleteAll()
                            .typeString('<span class="text-3">fashion</span>')
                            .pause(2000)
                            .deleteAll()
                            .typeString('<span class="text-4">disciplin</span>')
                            .pause(2000)
                            .deleteAll()
                            .start()
                    }}
                />
            </Title>
            <SubTitle>BORDED BORED BOREDDDD</SubTitle>
        </>
    )
}
