import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import evento from '../../../assets/images/evento.png'
import background from '../../../assets/images/backgroundEventos.png'

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

            <Fade delay={600} cascade damping={0.3} triggerOnce={true} direction='up' style={{ display: 'flex', alignItems: align, flexDirection: 'column', textAlign:'center',width:'100%'}}> 
              <p>Veja como foram os ultimos eventos da GTMED e fique por dentro dos próximos que irão ocorrer.</p>
            </Fade>
            </TextContainer>
          
            <Fade delay={1000} cascade damping={0.3} triggerOnce={true} direction='up'> 
              <StyledSwiperContainer
              slidesPerView={1}
              navigation={false}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                  delay: 4500,
                  disableOnInteraction: true,
                }}
                spaceBetween={width > 1200 ? '20' : '8'}
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
  font-size: 6vh;
  letter-spacing: 1px;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 1200px) {
      align-items: center;
      text-align: center;
      h1{
        margin-bottom: 4vh;
      }
      p{
        max-width: 90%;
      }
      margin-bottom: 7vh;
  }
`

const StyledSwiperSlide = styled(SwiperSlide)`
  background-color: none !important;
  background-color: white;
  width: 35vh !important;
  height: 50vh !important;
  border-radius: 2%;
  display: flex;
  flex-direction: column;
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
    width: 35vh;
    height: 20vh;
  }
  span {
    height: 12% !important;
    display: flex;
    align-items: center;
    justify-content: space-around;
    backdrop-filter: blur(5px); 
    background-color: rgba(50, 50, 50, 0.5);
    opacity: 0;
    transition: opacity 0.3s ease;
    p{
      font-size: 3vh;
      color:  RGB(180, 180, 180);
    }
  }
  @media (max-width: 1200px) {
      width: 100% !important;
      height: 65vh !important;
      span{
        opacity: 1;
      }
      img{
        width: 100%;
        height: 35vh;
        border-radius: 2%;
      }
      align-items: center;
      p{
        font-size: 2.5vh;
      }
      h1{
        font-size: 4vh;
      }
  }
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
`;

const StyledSwiperContainer = styled(Swiper)`
  max-width: 35vh !important; 
  background-color: none !important;
  height: auto;
  margin-top: 1.5vh;
  padding-bottom: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
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
  
