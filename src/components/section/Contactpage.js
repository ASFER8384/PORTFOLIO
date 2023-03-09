import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import ScrollTrigger from 'gsap/ScrollTrigger'
import gsap from 'gsap'



const Section = styled.section`
height:100vh;
width:100vw;
background-color:${props => props.theme.text};
display:flex;
justify-content:center;
align-items:center;
color:${props => props.theme.body};
font-size:2rem;
background: linear-gradient(180deg, #202020 0%, rgba(32, 32, 32, 0.2) 50%, #202020 100%), url(https://images.unsplash.com/photo-1567359781514-3b964e2b04d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1468&q=80);
text-align:center;
`

export default function ContactPage() {

  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let element = ref.current;

    ScrollTrigger.create({
      trigger: element,
      start: "top top",
      end: "bottom top",
      pin: true,
      pinSpacing: false,
      scrub: true,
    })
  }, [])

  return (
    <Section id='contact' ref={ref}>
      Do you have a project?I would love to help.
    </Section>
  )
}



