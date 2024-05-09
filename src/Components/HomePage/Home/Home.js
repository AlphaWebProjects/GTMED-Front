import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import backgroundHome from "../../../assets/images/BackgroundHome.png"
import backgroundHomeMobile from '../../../assets/images/backgroundHomeMobile.png'
import { Fade, Zoom } from 'react-awesome-reveal';
import logo from '../../../assets/images/logoGTMEDmelhorada.png'
import { BiSolidDownArrow } from "react-icons/bi";

function Home() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {

      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Fade delay={0.5} cascade  damping={0.3} triggerOnce={true}>
      <Container backgroundImage={backgroundHome} backgroundPosition={width > 1200 ? 'center' : 'left'}>

          <CenterContent> 

                <span>

                  <Fade delay={300} cascade  damping={0.3} triggerOnce={true} direction='down' style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                    <img src={logo} alt='Logo'/>
                  </Fade>

                  <Fade delay={800} cascade  damping={0.3} triggerOnce={true} direction='up' style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                  <p>
                  Oferecendo uma experiência única e enriquecedora para médicos em formação e profissionais. 
                  </p> 
                  </Fade>
                  
                  <Zoom delay={1450} duration={500} cascade triggerOnce={true} style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>

                    <StyledButton>
                      Conheça nossos cursos
                    </StyledButton>

                    <Arrow />

                  </Zoom>

                </span>

          </CenterContent>

      </Container>
    </Fade>
  );
}

export default Home;

const Container = styled.div`
  width: 100%;
  height: 102.2vh;
  background-image: ${props => `url(${props.backgroundImage})`};
  background-position: ${props => `${props.backgroundPosition}`};
  background-size: cover;     
  background-repeat: no-repeat;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.0);
    backdrop-filter: blur(2.5px);
  }
  @media (max-width: 1200px) {
    margin-top: 0;
    height: 102.2vh !important;
  }
`;

const CenterContent = styled.div`
  width: 100%;
  max-width: 100% !important;
  max-height: 90vh !important;
  height: 100% !important;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 10vh !important;
  span{
    z-index: 10;
    border-radius: 8px;
    display: flex;
    align-items: center;
    padding-top: 20vh;
    flex-direction: column;
    max-width: 94%;
    min-height: 100%;
    img{
      height: 57.057vh;
      width: 79.075vh;
      @media (max-width: 1200px) {
        height: 35.1512vh;
        width: 48.729vh;
      }
    }
    p{
      font-size: 3.2vh;
      font-weight: 700;
      text-align: center;
      max-width: 53%;
      letter-spacing: 1.5px;
      color: white;
      font-family: "Montserrat", sans-serif;
      margin-bottom:8vh;
      @media (max-width: 1200px) {
        font-size: 2.8vh !important;
        max-width: 88%;
      }
    }
  }
  @media (max-width: 420px) {
    margin-top: 10px;
  }
`;

const StyledButton = styled.div`
background-color: #094A58;
padding: 2.1vh 3.4vh;
color: white;
font-family: "Montserrat", sans-serif;
font-size: 2vh;
border-radius: 10px;
background-image: linear-gradient(45deg, #255C68, #20545F, #164249, #0B2A30);
background-size: 400% 200%;
animation: textura 3.4s cubic-bezier(0.2, 0.5, 0.9, 0.6) 2s infinite;
transition: background 1.6s cubic-bezier(0.55, 0.1, 0.47, 0.94);
box-shadow: 0px 0px 21px 0px rgba(104, 197, 218, 0.8);
transition: scale 0.3s ease;
fill: #FFFFFF;
&:hover{
    scale:1.05;
    background-image: linear-gradient(45deg, #255C68, #4B94A3, #164249, #0B2A30);
    cursor: pointer;
}
`

const Arrow = styled(BiSolidDownArrow)`
color: #164249;
transition: scale 0.3s ease;
height: 2vh;
width: 2vh;
margin-top: 10px;
&:hover{
    scale:1.3;
    color: #4B94A3;
    cursor: pointer;
}
`