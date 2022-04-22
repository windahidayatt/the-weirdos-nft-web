import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import React, { useLayoutEffect, useRef } from 'react'
import styled from 'styled-components'
import Accordion from '../Accordion'

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${props => props.theme.text};
  color: ${props => props.theme.body};

  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const Title = styled.h1`
  font-size: ${props => props.theme.fontxxl};
  text-tranform: uppercase;
  color: ${props => props.theme.body};
  margin: 1rem auto;
  border-bottom: 2px solid ${props => props.theme.body};
  width: fit-content;
`

const Container = styled.div`
  width: 75%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Box = styled.div`
  width: 45%;
`

const Faq = () => {
    const ref = useRef(null);
    gsap.registerPlugin(ScrollTrigger);

    useLayoutEffect(() => {
        
        let element = ref.current;

        ScrollTrigger.create({
            trigger: element,
            start: 'top top',
            end: 'bottom top',
            pin: true,
            pinSpacing: false,
            scrub: true
        })
        
        return () => {
            ScrollTrigger.kill();
        };
    }, [])
    return (
        <Section ref={ref} id="faq">
            <Title>Faq</Title>
            <Container>
                <Box> 
                    <Accordion title="WHERE CAN I VIEW MY NFTS?" children="Once minted or bought simply connect to your OpenSea account to view your NFTs." />
                    <Accordion title="WHAT IS THE METAVERSE?" children="A metaverse is a network of 3D virtual worlds focused on social connection. In futurism and science fiction, it is often described as a hypothetical iteration of the Internet as a single, universal virtual world that is facilitated by the use of virtual and augmented reality headsets." />
                    <Accordion title="WHY DO WE NEED ROYALTIES?" children="The amount of royalties was fixed at 5% to finance the Weirdos Club's projects. We have the ambition to organize multiple events around the world in order to strengthen the community and build a network of entrepreneurs and investors with the same mindset and common interests." />
                </Box>
                <Box> 
                    <Accordion title="HOW CAN I USE MY NFT?" children="You will be able to use your NFT as an avatar in the Metaverse and our future video game. Holding also means that you are part of an exclusive network of investors and entrepreneurs." />
                    <Accordion title="WHAT ARE THE WEIRDOS?" children="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore deserunt consequatur quisquam maxime molestias dolores ipsum, exercitationem vel sint quidem aliquam modi quis impedit corporis unde inventore fugiat provident in." />
                    <Accordion title="WHAT IS THE FUSION PROCESS?" children="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel enim veritatis iusto officia. Exercitationem, ducimus reiciendis. Rem, maxime, similique neque minus aliquam dolore doloremque laboriosam, facilis quibusdam unde sint officia." />
                </Box>
            </Container>
        </Section>
    )
}

export default Faq