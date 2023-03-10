import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"



const LogoText = styled.h1`
font-family: Akaya Telivigala;
font-size:${props => props.theme.fontxxxl} ;
color:${props => props.theme.text} ;
transition: all .2s ease;
&:hover{
    transform: scale(1.1);
};
@media (max-width:64em) {
    font-size:${props => props.theme.fontxxl} ;
}
`

export default function Logo() {
    return (
        <LogoText>
            <Link >
                A.
            </Link>
        </LogoText>
    )
}
