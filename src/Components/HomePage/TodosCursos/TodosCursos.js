import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/free-mode';
import { Autoplay, Navigation, Pagination, FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Fade } from 'react-awesome-reveal';
import scripts from '../../../scripts';
import { CgMoreO } from "react-icons/cg";
import { BrowserRouter as Router, Route, Link, useNavigate } from 'react-router-dom';
import background from '../../../assets/images/Background2.png'
import cardClinica from '../../../assets/images/clinicamedica/cardClinica.jpg'
import cardOftalmo from '../../../assets/images/oftalmo/cardOftalmo.jpg'
import cardOrtopedia from '../../../assets/images/ortopedia/cardOrtopedia.jpg'
import cardPediatria from "../../../assets/images/pediatria/cardPediatria.jpg"
import cardRadiologia from '../../../assets/images/radiologia/cardRadio.jpg'
import cardAnestesio from "../../../assets/images/anestesio/cardAnestesio.jpg"
import cardCardio from '../../../assets/images/cardio/cardCardio.jpg'
import cardInfecto from '../../../assets/images/infectologia/cardInfectologia.jpg'
import cardNeuro from '../../../assets/images/neuro/cardNeuro.jpg'
import cardObstetro from '../../../assets/images/obstetro/cardObstetricia.jpg'
import cardOrtorrino from '../../../assets/images/ortorrino/cardOrtorrino.jpg'
import cardPsiquiatria from '../../../assets/images/psiquiatria/cardPsiquiatria.jpg'


export default function TodosCursos({setScript}) {

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

    const navigate = useNavigate();

    const cursos = [
        { nome: '', area: scripts.Curso.Clinica, background: cardCardio },
        { nome: '', area: scripts.Curso.Clinica, background: cardOrtopedia },
        { nome: '', area: scripts.Curso.Clinica, background: cardObstetro },
        { nome: '', area: scripts.Curso.Clinica, background: cardInfecto },
        { nome: '', area: scripts.Curso.Clinica, background: cardRadiologia },
        { nome: '', area: scripts.Curso.Clinica, background: cardNeuro },
        { nome: '', area: scripts.Curso.Clinica, background: cardOftalmo },
        { nome: '', area: scripts.Curso.Clinica, background: cardClinica },
        { nome: '', area: scripts.Curso.Clinica, background: cardPsiquiatria },
        { nome: '', area: scripts.Curso.Clinica, background: cardAnestesio},
        { nome: '', area: scripts.Curso.Clinica, background: cardOrtorrino },
        { nome: '', area: scripts.Curso.Clinica, background: cardPediatria },
    ];

    function setPage(curso){
        document.documentElement.scrollTop = 0;
        setScript(curso);
        navigate('/landing')
    }

    return (
        <Container backgroundImage={background}>  


        <Fade delay={500} cascade  damping={0.3} triggerOnce={true} >
            <h1>PLANTÃO GTMED</h1>
        </Fade>
            
        <Fade delay={1000} cascade  damping={0.3} triggerOnce={true} >
            <StyledSwiperContainer
            freeMode={true}
            slidesPerView={width > 1200 ? 5.5 : 2.4}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
                delay: 2500,
                disableOnInteraction: true,
              }}
              spaceBetween={width > 1200 ? '10' : '8'}
            modules={[Pagination, Navigation, Autoplay, FreeMode]}
          >

            {cursos.map((curso) => (
                <StyledSwiperSlide onClick={() => setPage(curso.area)} background={curso.background}>
              </StyledSwiperSlide>
            )
                
            )}
        
          </StyledSwiperContainer>
        </Fade>

        </Container>
    );
}

const Container = styled.div`
width: 100%;
height: auto;
display: flex;
flex-direction: column;
box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
justify-content: center;
background-image: ${props => `url(${props.backgroundImage})`};
background-position: center;
background-size: cover;     
background-repeat: no-repeat;
padding: 15vh 0 8vh 0;
h1{
  color: lightgrey;
  margin-left: 3.5%;
}
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  background-color: none !important;
  padding-top: 2vh !important;
  background-image: ${props => `url(${props.background})`};
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
    p{
      font-size: 3vh;
      color:  RGB(180, 180, 180);
    }
    img{
      width: 3vh;
      height: 3vh;
    }
  }
  @media (max-width: 1200px) {
      width: 22vh !important;
      height: 36.57vh !important;
      span{
        opacity: 1;
        background-color: rgba(50, 50, 50, 0.15);
        right: 0 !important;
        p{
          display: none;
        }
      }
  }
  &:hover{
      transform: scale(1.05);
      cursor: pointer;
      span{
        opacity: 1;
        border-radius: 4% !important;

      }
      @media (max-width: 1200px) {
        transform: scale(1.0);
  }
  &:active{
    cursor: pointer;
  }
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
    color: lightblue;
    margin-right: 50px;
    width: 9vh;
    height: 6vh;
    @media (max-width: 1500px) {
    width: 3vh;
    height: 1vh;
    margin: 0 !important;
  }
    &:hover{
      cursor: pointer;
    }
  }
`;

const More = styled(CgMoreO)`
width: 3vh;
height: 3vh;
color:  RGB(180, 180, 180)
`
  
