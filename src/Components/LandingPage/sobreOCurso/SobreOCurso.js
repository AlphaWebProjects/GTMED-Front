import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/free-mode';
import { Autoplay, Navigation, Pagination, FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import aula1Clinica2 from '../../../assets/images/clinicamedica/aula1Clinica2.png'
import aula1Clinica from '../../../assets/images/clinicamedica/aula1Clinica.png'
import { Fade } from 'react-awesome-reveal';

function SobreOCurso({themeColor}) {

  console.log(themeColor, 'cor tema AQUI')

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
    <Container>
      
      <MainContentHome>

        <CenterContent borderColor={themeColor}>

          <Fade delay={2} cascade  damping={0.3} style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }} triggerOnce={true} direction='right'>
          <h1>
            {"NESSE TREINAMENTO, VOCÊ VAI APRENDER:"}
          </h1>
          </Fade>
          
          

          <StyledSwiperContainer
            color={themeColor}
            freeMode={true}
            slidesPerView={'auto'}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: true,
            }}
            spaceBetween={'5'}
            modules={[Pagination, Navigation, Autoplay, FreeMode]}
          >
            <StyledSwiperSlide background={aula1Clinica2} />

            <StyledSwiperSlide background={aula1Clinica2} />

            <StyledSwiperSlide background={aula1Clinica2} />

            <StyledSwiperSlide background={aula1Clinica2} />

            <StyledSwiperSlide background={aula1Clinica2} />

            <StyledSwiperSlide background={aula1Clinica2} />

          </StyledSwiperContainer>

        </CenterContent>

      </MainContentHome>

    </Container>
  );
}

export default SobreOCurso;

const Container = styled.div`
  background-color: black;
  color: white;
  width: 100%;
  max-width: 100% !important;
  height: 100%;
  background-size: cover;
  background-position: center;
  max-height: 100% !important;
  min-height: 100% !important;
  @media (max-width: 1200px) {
    margin-top: 0;
    height: auto;
  }
`;

const MainContentHome = styled.div`
  background-color: black;
  width: 100%;
  max-width: 100% !important;
  height: 100%;
  max-height: 100% !important;
  min-height: 100% !important;
  display: flex;
`;

const CenterContent = styled.div`
  width: 100%;
  max-width: 100% !important;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2vh 5vh;
  max-height: 100% !important;
  min-height: 100% !important;
  p {
    transition: transform 0.8s ease;
    text-align: center;
    width: 50%;
    font-size: 22px;
    padding: 3vh;
    border: 4px solid ${props => `${props.borderColor}`};
    border-radius: 30px;
    margin-bottom: 4vh;
    margin-top: 0;
    @media (max-width: 1200px) {
      width: 99%;
      font-size: 17px;
      padding: 2.5vh;
  }
    &:hover{
      transform: scale(1.05);
      cursor: pointer;
    }
  }
  h1{
    background: linear-gradient(0deg, ${(props) => props.borderColor}, #FFFFFF);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: ${(props) => props.borderColor};
    text-align: center;
    width: 100%;
    font-size: 2.8rem;
    padding: 1vh;
    border-radius: 30px;
    margin-bottom: 0;
    margin-top: 0;
    transition: transform 0.8s ease;
    @media (max-width: 1200px) {
      width: 95%;
      font-size: 3.5vh;
      padding: 2vh;
  }
    &:hover{
      transform: scale(1.05);
      cursor: pointer;
    }
  }
  @media (max-width: 420px) {
    margin-top: 10px;
    padding: 2.5vh !important;
  }
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  background-color: none !important;
  padding-top: 2vh !important;
  background-image: ${(props) => `url(${props.background})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 30vh !important;
  height: 50vh !important;
  border-radius: 2%;
  transition: transform 0.8s;
  display: flex;
  flex-direction: column-reverse;
  span {
    height: 12% !important;
    display: flex;
    align-items: center;
    justify-content: space-around;
    backdrop-filter: blur(5px);
    background-color: rgba(50, 50, 50, 0.3);
    opacity: 0;
    transition: opacity 0.3s ease;
    transition: transform 0.8s;
    p {
      font-size: 3vh;
      color: RGB(180, 180, 180);
    }
    img {
      width: 3vh;
      height: 3vh;
    }
  }
  @media (max-width: 1200px) {
    width: 22vh !important;
    height: 36.57vh !important;
  }
`;

const StyledSwiperContainer = styled(Swiper)`
  max-width: 95% !important;
  background-color: none !important;
  height: auto;
  margin-top: 1.5vh;
  padding-bottom: 4vh;
  @media (max-width: 1500px) {
    max-width: 100% !important;
    height: auto;
    padding-bottom: 8vh;
  }
  .swiper-pagination-bullet {
    background: white;
  }
  .swiper-button-next,
  .swiper-button-prev {
    display: flex;
    color: white;
    align-items: center;
    justify-content: center;
    margin-right: 50px;
    width: 6vh;
    height: 6vh;
    border-radius: 25%;
    transition: all 0.2s ease-in-out;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    @media (max-width: 1500px) {
      width: 3vh;
      height: 1vh;
      margin: 0 -4vh;
    }
    &:hover {
      cursor: pointer;
      scale: 1.05;
      border-radius: 40%;
    }
  }
`;
