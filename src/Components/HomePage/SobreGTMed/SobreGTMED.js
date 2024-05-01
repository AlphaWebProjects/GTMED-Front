import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Fade } from 'react-awesome-reveal';
import sobregtmed from '../../../assets/images/sobregtmed.png'
import logo2 from '../../../assets/images/logo2.jpg'
import logo1 from '../../../assets/images/logo1.jpg'

function SobreGTMED() {
  const [width, setWidth] = useState(window.innerWidth);



  return (
    <Fade delay={0.5} cascade  damping={0.3} triggerOnce={true}>

      <Container>

        <img src={logo1}/>


        <span>

        <Fade delay={300} cascade  damping={0.3} triggerOnce={true} direction='right'>

          <h1>
            Sobre a GTMED: quem somos? 
          </h1>

        </Fade>

        <Fade delay={800} cascade damping={0.3} triggerOnce={true} direction='right'>       

          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum eros vitae tellus convallis, nec laoreet velit feugiat. Nulla facilisi. 
          </p>

        </Fade>

        <Fade delay={1200} cascade  damping={0.3} triggerOnce={true} direction='right'>       

          <p>
          Suspendisse potenti. Sed vel sapien vel odio tincidunt posuere. Phasellus euismod magna ac diam commodo, ac convallis arcu volutpat. Sed auctor dui vel dui pharetra, quis scelerisque ligula dictum.
          </p>

        </Fade>

        </span>

      </Container>

    </Fade>
  );
}

export default SobreGTMED;

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  padding: 15vh 0;
  justify-content: center;
  flex-direction: row;
  background-color: black;
  img{
    width: 35%;
    height: 25%;
    transition: 1s ease, box-shadow 0.3s ease;
    border-radius: 15px;
    margin-right: 10vh;
    &:hover{
      scale: 1.05;
      cursor: pointer;
      border-radius: 20px;
    }
    @media (max-width: 1200px) {
    margin: 0 !important;
    width: 100%;
    height: 50%;
    border-radius: 0;
  }
  }
  span{
    display: flex;
    flex-direction: column;
    max-width: 30%;
    backdrop-filter: blur(10px);
    margin-left: 10vh;
    color: white;
    @media (max-width: 1200px) {
    margin: 0 !important;
    max-width: 80%;
  }
  }
  h1{
    font-size: 4vh;
    margin-bottom: 4vh;
    border-bottom: 5px solid black;
    border-radius: 15px;
    padding-bottom: 1vh;
  }
  p{
    margin-bottom: 1.5vh;
    font-size: 2vh;
    font-weight: 550;
  }
  @media (max-width: 1200px) {
    margin-top: 0;
    height: auto;
    flex-direction: column;
    margin: 0 !important;
    padding: 5vh 0;
  }
`;


