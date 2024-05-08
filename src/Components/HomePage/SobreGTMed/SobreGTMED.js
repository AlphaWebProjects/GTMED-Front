import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Fade } from 'react-awesome-reveal';
import sobregtmed from '../../../assets/images/sobregtmed.png'
import logo from '../../../assets/images/logoGTMEDmelhorada.png'
import background from '../../../assets/images/backgroundSobreGTMED.png'
import backgroundMobile from '../../../assets/images/backgroundSobreGTMEDmobile.png'

function SobreGTMED() {

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
    <Fade delay={0.5} cascade  damping={0.3} triggerOnce={true} >

      <Container backgroundImage={width > 1200 ? background : backgroundMobile}>

        <Fade delay={300} cascade  damping={0.3} triggerOnce={true}>

          <img src={logo} alt='Logo'/>

        </Fade>

        <span>

        <Fade delay={500} cascade  damping={0.3} triggerOnce={true} direction='right'>

          <h1>Sobre a GTMED: quem somos?</h1>

        </Fade>

        <Fade delay={1000} cascade  damping={0.3} triggerOnce={true} direction='right'>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum dui vel justo vulputate, a pretium nisi fermentum. Nulla facilisi. Integer vehicula quam a nulla vestibulum, nec ullamcorper lorem viverra.</p>

        </Fade>

        <Fade delay={1500} cascade damping={0.3} triggerOnce={true} direction='right'>       

          <p>Fusce ultrices metus vel eros molestie, id blandit quam volutpat. Proin eu ligula eget magna venenatis tempus. Curabitur fermentum mauris eget ante ultricies, ut sollicitudin ligula eleifend. Quisque et tellus auctor, blandit quam sit amet, venenatis elit. Ut vel congue eros, at tincidunt arcu.</p>

        </Fade>

        <Fade delay={1200} cascade  damping={0.3} triggerOnce={true} direction='right'>       

          

        </Fade>

        </span>

      </Container>

    </Fade>
  );
}

export default SobreGTMED;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: reverse;
  align-items: center;
  position: right !important;
  background-image: ${props => `url(${props.backgroundImage})`};
  background-position: center;
  background-size: cover;     
  background-repeat: no-repeat;
  padding: 0 0 0 4vh;
  span{
    display: flex;
    flex-direction: column;
    max-width: 40%;
    @media (max-width: 1200px) {
    margin: 0 !important;
    max-width: 100%;
  }
  }
  h1{
    text-align: center;
    margin-bottom: 3vh;
    font-size: 5vh;
  }
  p{
    margin-bottom: 1.5vh;
    font-size: 2.5vh;
    font-weight: 550;
    color: white;
    text-align: center;
  }
  img{
    display: flex;
    height: 74.1vh;
    width: 97.5vh;
    margin-right: 5vh;
    @media (max-width: 1200px) {
    display: flex;
    height: 38vh;
    width: 50vh;
    margin-right: 0vh !important;
  }
  }
  @media (max-width: 1200px) {
    margin-top: 0;
    height: auto;
    flex-direction: column;
    margin: 0 !important;
    padding: 5vh;
  }
`;


