import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import evento from "../../../assets/images/evento.png";
import background from "../../../assets/images/Background2.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/free-mode";
import { Autoplay, Navigation, Pagination, FreeMode, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { FaRegCalendarAlt } from "react-icons/fa";
import { IoIosPin } from "react-icons/io";
import { MdOutlineAttachMoney } from "react-icons/md";
import { BsExclamationCircle } from "react-icons/bs";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import { Fade, Slide } from "react-awesome-reveal";
import plantaoGTMED from '../../../assets/images/cursoGTMED.png'

export default function Compra({ setScript }) {
  const [width, setWidth] = useState(window.innerWidth);
  const [align, setAlign] = useState(width > 1200 ? "" : "center");

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (width < 1200) {
        setAlign("center");
      }
    };
  }, []);

  const navigate = useNavigate();

  return (
    <Container backgroundImage={background}>
      <TextContainer>
        <Fade
          delay={300}
          cascade
          damping={0.3}
          triggerOnce={true}
          direction="up"
        >
          <h1>Cursos GTMED</h1>
        </Fade>

        <Fade
          delay={600}
          cascade
          damping={0.3}
          triggerOnce={true}
          direction="up"
          style={{ width: "100%" }}
        >
          <p>
            Evoluímos juntos na sua jornada preparatória.
          </p>
        </Fade>
      </TextContainer>

      <Fade
        delay={1000}
        cascade
        damping={0.3}
        triggerOnce={true}
        direction="up"
      >
        <StyledSwiperContainer
          effect={'coverflow'}
          grabCursor={false}
          centeredSlides={true}
          slidesPerView={'auto'}
          spaceBetween={50}
          autoplay={{
            delay: 4200,
            disableOnInteraction: true,
          }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Autoplay]}
        >
          
            <StyledSwiperSlide>
              <img src={plantaoGTMED} alt="imagem" />
              <h1>Plantão GTMED</h1>
              <h2>Pensado para quem precisa de uma preparação ágil para os plantões, com foco na prática de situações reais e no estudo direcionado para o dia a dia de um plantonista</h2>
              <p>12x sem juros de</p>
              <b> R$ 269,90</b>
              <p>R$ 3199,90 à vista</p>
              <h3> Saiba mais</h3>
            </StyledSwiperSlide>

        </StyledSwiperContainer>
      </Fade>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: ${(props) => `url(${props.backgroundImage})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 15vh 5vh;
  h1 {
    color: rgb(0, 100, 255);
    font-size: 8vh;
    letter-spacing: 1px;
    margin-bottom: 1vh;
    font-weight: 600;
    font-family: "Montserrat";
  }
  p {
    color: white;
    font-size: 2vh;
    max-width: 100%;
  }
  @media (max-width: 1200px) {
    flex-direction: column;
    padding: 5vh 0 0 0;
    margin: 0 !important;
  }
`;

const TextContainer = styled.div`
  margin-bottom: 5vh;
  padding: 0 8vh 0 8vh;
  @media (max-width: 1200px) {
    align-items: center;
    max-width: 95% !important;
    padding: 0 !important;
    h1 {
      margin-bottom: 1vh;
      font-size: 4vh;
      font-weight: 700 !important;
    }
    p {
      max-width: 100%;
      font-size: 2vh;
      font-weight: 500 !important;
    }
    margin-bottom: 2vh;
  }
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  background-color: none !important;
  background-color: white;
  width: 60vh !important;
  height: 72vh !important;
  border-radius: 4%;
  display: flex;
  flex-direction: column;
  transition: all 0.2s ease-in-out;
  h1 {
    font-size: 4vh;
    letter-spacing: 0px;
    font-weight: 600;
    margin: 2vh 0 3vh 4vh;
    font-family: "Montserrat";
  }
  h2 {
    color: grey !important;
    font-size: 1.8vh;
    margin: 0 0 3vh 4vh;
    letter-spacing: 1px;
    max-width: 85% !important;
    font-weight: 500;
  }
  h3{
    color: #02398B;
    font-size: 2.4vh;
    margin: 0.5vh 0 0vh 2vh;
    letter-spacing: 1px;
    display: flex;
    padding: 2vh;
    font-weight: 750 !important;
    cursor: pointer;
  }
  b{
    color: grey !important;
    font-size: 4vh;
    margin: 0 0 0vh 4vh;
    letter-spacing: 1px;
    max-width: 85% !important;
  }
  p {
    color: grey !important;
    font-size: 1.8vh;
    margin: 0 0 0vh 4vh;
    letter-spacing: 1px;
    max-width: 85% !important;
    display: flex;
  }
  img {
    width: 100%;
    height: 32vh;
    border-radius: 8% 8% 0 0;
  }
  @media (max-width: 1200px) {
    width: 45vh !important;
    height: 74vh !important;
    h1, p{
      margin: 0 !important;
      padding: 0 0 0 4vh;
    }
    h2{
      margin: 2vh 0 3vh 4vh;
      padding: 0;
    }
    b{
      padding: 0 0 0 4vh;
      margin: 0 !important;
    }
    h3{
      margin: 2vh 0 0 4vh;
      padding: 0;
    }
    img {
      width: 100%;
      height: 27vh;
      border-radius: 2%;
      margin-bottom: 3vh;
    }
    p {
      font-size: 2.5vh;
    }
    h1 {
      font-size: 4vh;
    }
  }
`;

const StyledSwiperContainer = styled(Swiper)`
  max-width: 100vh !important;
  background-color: none !important;
  height: auto;
  margin-top: 1.5vh;
  padding-bottom: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1500px) {
    height: auto;
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
  }
`;
