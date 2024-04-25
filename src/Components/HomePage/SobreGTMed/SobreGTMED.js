import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import oftalmo from "../../../assets/images/oftalmo.jpg"
import { Fade } from 'react-awesome-reveal';
import sobregtmed from '../../../assets/images/sobregtmed.png'

function SobreGTMED() {
  const [width, setWidth] = useState(window.innerWidth);

  return (
    <Fade delay={0.5} cascade  damping={0.3} triggerOnce={true}>

      <Container>

        <img src={sobregtmed}/>


        <span>

        <Fade delay={300} cascade  damping={0.3} triggerOnce={true} direction='right'>

          <h1>
            Sobre a GTMED: quem somos? 
          </h1>

        </Fade>

        <Fade delay={800} cascade damping={0.3} triggerOnce={true} direction='right'>       

          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum eros vitae tellus convallis, nec laoreet velit feugiat. Nulla facilisi. Suspendisse potenti. Sed vel sapien vel odio tincidunt posuere. Phasellus euismod magna ac diam commodo, ac convallis arcu volutpat. Sed auctor dui vel dui pharetra, quis scelerisque ligula dictum.
          </p>

        </Fade>

        <Fade delay={1200} cascade  damping={0.3} triggerOnce={true} direction='right'>       

          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum eros vitae tellus convallis, nec laoreet velit feugiat. Nulla facilisi. Suspendisse potenti. Sed vel sapien vel odio tincidunt posuere. Phasellus euismod magna ac diam commodo, ac convallis arcu volutpat. Sed auctor dui vel dui pharetra, quis scelerisque ligula dictum.
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
  height: 100%;
  display: flex;
  align-items: center;
  padding: 15vh 0;
  justify-content: center;
  flex-direction: row;
  background: linear-gradient(to bottom, #FBFFFF, #b1c8cd);
  
  img{
    width: 25%;
    height: 15%;
    transition: 1s ease, box-shadow 0.3s ease;
    &:hover{
      scale: 1.05;
      cursor: pointer;
      box-shadow: 0 8px 12px rgba(125, 169, 236, 0.5), 0 3px 6px rgba(125, 169, 236, 0.3);
      border-radius: 20px;
    }
  }
  span{
    display: flex;
    flex-direction: column;
    max-width: 30%;
    margin-left: 7vh;
    backdrop-filter: blur(10px);
  }
  h1{
    font-size: 4vh;
    margin-bottom: 4vh;
  }
  p{
    margin-bottom: 1.5vh;
    font-size: 2vh;
    font-weight: 550;
  }
  @media (max-width: 1200px) {
    margin-top: 0;
    height: auto;
  }
`;


