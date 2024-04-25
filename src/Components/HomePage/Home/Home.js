import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Swiper, SwiperSlide } from 'swiper/react';
import backgroundHome from "../../../assets/images/BackgroundHome.png"
import { Fade } from 'react-awesome-reveal';
import logo1nobg from '../../../assets/images/logo1nobg.png'
import logo2 from '../../../assets/images/logo2.jpg'

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
      <Container backgroundImage={backgroundHome}>

          <CenterContent> 

                <span>

                  <Fade delay={300} cascade  damping={0.3} triggerOnce={true} direction='down' style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                    <img src={logo1nobg} alt='Logo'/>
                  </Fade>

                  <Fade delay={800} cascade  damping={0.3} triggerOnce={true} direction='up' style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                  <p>
                  Oferecendo uma experiência única e enriquecedora para médicos em formação e profissionais. 
                  </p> 
                  </Fade>

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
  background-position: center;
  background-size: cover;     
  background-repeat: no-repeat;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(2px);
  }
  @media (max-width: 1200px) {
    margin-top: 0;
    height: 100vh !important;
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
  span{
    z-index: 10;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    max-width: 94%;
    min-height: 100%;
    img{
      width: 100%;
      height: 50% !important;
    }
    p{
      font-size: 3.2vh;
      font-weight: 700;
      text-align: center;
      max-width: 65%;
      color: black;
      font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }
  }
  @media (max-width: 420px) {
    margin-top: 10px;
  }
`;

const StyledSwiperSlide = styled(SwiperSlide)`
display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden !important;
  img {
    display: block;
    width: 100%;
    height: 100% !important;
    min-height: 100vh;
    max-height: 107vh;
    min-width: 130vh !important;
    text-align: center;
  }
`;

const StyledSwiperContainer = styled(Swiper)`
  width: 100%;
  max-height: 100vh !important;
  position: absolute;
  z-index: 1;
  opacity: ${({ isIntersecting }) => (isIntersecting ? 1 : 0)};
  transition: opacity 2s ease-in-out;
  @media (max-width: 1500px) {

  }
`;
