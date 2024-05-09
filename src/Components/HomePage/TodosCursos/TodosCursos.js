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
import { BrowserRouter as Router, Route, Link, useNavigate } from 'react-router-dom';
import background from '../../../assets/images/backgroundTelaCursos.png'
import cardClinica from '../../../assets/images/clinicamedica/cardClinica.png'
import cardOftalmo from '../../../assets/images/oftalmo/cardOftalmo.png'
import cardOrtopedia from '../../../assets/images/ortopedia/cardOrtopedia.png'
import cardPediatria from "../../../assets/images/pediatria/cardPediatria.png"
import cardRadiologia from '../../../assets/images/radiologia/cardRadiologia.png'
import cardAnestesia from "../../../assets/images/anestesia/cardAnestesia.png"
import cardEmergencia1 from '../../../assets/images/emergencia/cardEmergencia1.png'
import cardEmergencia2 from '../../../assets/images/emergencia/cardEmergencia2.png'
import cardDermato from '../../../assets/images/dermato/cardDermato.png'


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
        { nome: '', area: scripts.Curso.Clinica, background: cardClinica },
        { nome: '', area: scripts.Curso.Clinica, background: cardOftalmo },
        { nome: '', area: scripts.Curso.Clinica, background: cardOrtopedia },
        { nome: '', area: scripts.Curso.Clinica, background: cardPediatria },
        { nome: '', area: scripts.Curso.Clinica, background: cardRadiologia },
        { nome: '', area: scripts.Curso.Clinica, background: cardAnestesia },
        { nome: '', area: scripts.Curso.Clinica, background: cardEmergencia1 },
        { nome: '', area: scripts.Curso.Clinica, background: cardEmergencia2 },
        { nome: '', area: scripts.Curso.Clinica, background: cardDermato },
        { nome: '', area: scripts.Curso.Clinica, background: cardClinica },
        { nome: '', area: scripts.Curso.Clinica, background: cardClinica},
        { nome: '', area: scripts.Curso.Clinica, background: cardClinica },
        { nome: '', area: scripts.Curso.Clinica, background: cardClinica },
        { nome: '', area: scripts.Curso.Clinica, background: cardClinica },
    ];

    function setPage(curso){
        document.documentElement.scrollTop = 0;
        setScript(curso);
        navigate('/landing')
    }

    return (
        <Container backgroundImage={background}>  

            <h1>PLANTÃO GTMED</h1>
            
            <StyledSwiperContainer
            freeMode={true}
            slidesPerView={width > 1200 ? 5.5 : 2.2}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
                delay: 2000,
                disableOnInteraction: true,
              }}
            modules={[Pagination, Navigation, Autoplay, FreeMode]}
          >

            {cursos.map((curso) => (
                <StyledSwiperSlide onClick={() => setPage(curso.area)}>
                <div>
                  <img src={curso.background} width="150" height="150" alt="Logo" />
                </div>
              </StyledSwiperSlide>
            )
                
            )}
        
          </StyledSwiperContainer>

        </Container>
    );
}

const Container = styled.div`
width: 100%;
height: auto;
display: flex;
flex-direction: column;
justify-content: center;
background-image: ${props => `url(${props.backgroundImage})`};
background-position: center;
background-size: cover;     
background-repeat: no-repeat;
padding: 9vh 0 4vh 0;
h1{
  color: lightgrey;
  margin-left: 3.5%;
}
`;

const StyledSwiperSlide = styled(SwiperSlide)`
background-color: none !important;
  padding-top: 2vh !important;
  img {
    width: 30vh !important;
    height: 50vh !important;
    border-radius: 2%;
    transition: transform 0.8s;
    @media (max-width: 1200px) {
      width: 22vh !important;
      height: 36.57vh !important;
  }
    &:hover{
      transform: scale(1.03);
      cursor: pointer;
      @media (max-width: 1200px) {
        transform: scale(1.0);
  }

  }
  &:active{
    cursor: pointer;
  }
  }
  div {
    height: 90% !important;
    text-align: center !important;
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