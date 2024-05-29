import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import evento from '../../../assets/images/evento.png'
import background from '../../../assets/images/Background2.png'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/free-mode';
import { Autoplay, Navigation, Pagination, FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import scripts from '../../../scripts';
import { CgMoreO } from "react-icons/cg";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoIosPin } from "react-icons/io";
import { MdOutlineAttachMoney } from "react-icons/md";
import { BsExclamationCircle } from "react-icons/bs";
import { BrowserRouter as Router, Route, Link, useNavigate } from 'react-router-dom';
import { Fade,Slide } from 'react-awesome-reveal';


export default function Eventos({setScript}) {

    const [width, setWidth] = useState(window.innerWidth);
    const [align, setAlign] = useState(width > 1200 ? '' : 'center');
  

  useEffect(() => {

    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if(width < 1200){
        setAlign('center')
      }
    };
  }, []);

    const navigate = useNavigate();

    const cursos = [
        { nome: '' },
        { nome: '' },
        { nome: '' },
        { nome: '' },
    ];

    return (
        <Container backgroundImage={background}>  

            <TextContainer>

            <Fade delay={300} cascade damping={0.3} triggerOnce={true} direction='up'> 
              <h1>Eventos presenciais</h1>
            </Fade>

            <Fade delay={600} cascade damping={0.3} triggerOnce={true} direction='up' style={{ flexDirection: 'column',width:'100%'}}> 
              <p>Veja como foram os ultimos eventos da GTMED e fique por dentro dos próximos que irão ocorrer.</p>
            </Fade>
            </TextContainer>
          
            <Fade delay={1000} cascade damping={0.3} triggerOnce={true} direction='up'> 
              <StyledSwiperContainer
              slidesPerView={width > 1200 ? 2 : 1}
              navigation={false}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                  delay: 4500,
                  disableOnInteraction: true,
                }}
                spaceBetween={width > 1200 ? '25' : '8'}
              modules={[Pagination, Navigation, Autoplay, FreeMode]}
            >

              {cursos.map((curso) => (
                  <StyledSwiperSlide>
                  <img src={evento} alt='imagem'/>
                  <h1>Imersão GTMED</h1>
                  <p>{<FaRegCalendarAlt />} Quinta, 7/12 às 17h</p>
                  <p>{<IoIosPin />} São Paulo</p>
                  <p>{<MdOutlineAttachMoney />} 90</p>
                  <p>{<BsExclamationCircle />} Vagas limitadas</p>

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
box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
height: auto;
display: flex;
flex-direction: row;
justify-content: center;
background-image: ${props => `url(${props.backgroundImage})`};
background-position: center;
background-size: cover;     
background-repeat: no-repeat;
padding: 15vh 45vh 8vh 40vh;
h1{
  color: rgb(0,100,255);
  font-size: 5vh;
  letter-spacing: 1px;
  margin-bottom: 3vh;
  font-weight: 500;
  font-family: "Montserrat"
}
p{
  color: white;
  font-size: 2.3vh;
  max-width: 80%;
}
@media (max-width: 1200px) {
    flex-direction: column;
    padding: 8vh 0 8vh 0;
  }
`;

const TextContainer = styled.div`
  padding: 8% 0 0 8%;
  
  @media (max-width: 1200px) {
      align-items: center;
      max-width: 95% !important;
      h1{
        margin-bottom: 2vh;
        font-size: 4.3vh;
      }
      p{
        max-width: 100%;
        @media (max-width: 1200px) {
      }
      }
      margin-bottom: 7vh;
  }
`

const StyledSwiperSlide = styled(SwiperSlide)`
  background-color: none !important;
  background-color: white;
  width: 30vh !important;
  height: 50vh !important;
  border-radius: 2%;
  display: flex;
  flex-direction: column;
  transition: all 0.2s ease-in-out; 
  &:hover{
      transform: scale(1.03);
      cursor: pointer;
      span{
        opacity: 1;
      }
      @media (max-width: 1200px) {
        transform: scale(1.0);
  }
  &:active{
    cursor: pointer;
  }
  }
  h1{
    font-size: 3vh;
    letter-spacing: 0px;
    font-weight: 450;
    margin: 2vh 0 4vh 2vh;
    font-family: 'Montserrat';
  }
  p{
    color: grey !important;
    font-size: 2vh;
    margin: 0 0 1vh 2vh;
  }
  img{
    width: 30.2vh;
    height: 20vh;
  }
  @media (max-width: 1200px) {
      width: 35vh !important;
      height: 55vh !important;
      span{
        opacity: 1;
      }
      img{
        width: 35.1vh;
        height: 20vh;
        border-radius: 2%;
      }
      align-items: center;
      p{
        font-size: 2.5vh;
        margin: 0 0 1vh 0vh;
      }
      h1{
        font-size: 3.5vh;
        margin: 2vh 0 4vh 0vh;
      }
  }
`;

const StyledSwiperContainer = styled(Swiper)`
  max-width: 64vh !important; 
  background-color: none !important;
  height: auto;
  margin-top: 1.5vh;
  padding-bottom: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 1vh;
  @media (max-width: 1500px) {
    max-width: 35.1vh !important;
    height: auto;
    padding-bottom: 8vh;
    padding-left: 0 !important;
  }
  .swiper-pagination-bullet {
    background: white;
  }
  .swiper-button-next,
  .swiper-button-prev {
    color: lightblue;
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

  
