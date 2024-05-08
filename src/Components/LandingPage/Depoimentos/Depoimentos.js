import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import oftalmo from "../../../assets/images/oftalmo.jpg"

function Depoimentos({depoimentos}) {
  const [width, setWidth] = useState(window.innerWidth);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
        }
      });
    });

    observer.observe(containerRef.current);

    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Container>
      <MainContentHome>
        <CenterContent color={depoimentos.cores.corTitulo}>

        <h1 className={isIntersecting ? 'visible' : ''}>
            Como é a experiência dos nossos alunos ?
        </h1>

            <StyledSwiperContainer
                ref={containerRef}
                isIntersecting={isIntersecting}
                grabCursor={true}
                effect={'coverflow'}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false,
                  }}
                pagination={true}
                autoplay={{
                    delay: width > 1200 ? 5500 : 4000,
                    disableOnInteraction: true,
                  }}
                modules={[EffectCoverflow, Pagination, Autoplay]}
            >

                  {depoimentos.prints.map(print => (

                    <StyledSwiperSlide>
                
                      <img src={print} width="150" height="150" alt="Logo" />

                    </StyledSwiperSlide>

                  ))}
            </StyledSwiperContainer>

        </CenterContent>
      </MainContentHome>
    </Container>
  );
}

export default Depoimentos;

const Container = styled.div`
  width: 100%;
  height: 90%;
  background-size: cover;
  background-position: center;
  @media (max-width: 1200px) {
    margin-top: 0;
    height: auto;
  }
`;

const MainContentHome = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2%;
`;

const CenterContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5vh;
  p {
    text-align: center;
    width: 50%;
    font-size: 22px;
    padding: 3vh;
    border: 2px solid black;
    border-radius: 30px;
    opacity: 0;
    transition: opacity 1.2s, transform 0.5s cubic-bezier(0.165, 0.84, 0.44, 1), scale 0.3s;
    transform: translateX(400px);
    margin-bottom: 4vh;
    margin-top: 0;
    @media (max-width: 1200px) {
      width: 99%;
      font-size: 17px;
      padding: 2vh;
  }
    &:hover{
      scale: 1.05;
      cursor: pointer;
    }
  }
  .visible {
    opacity: 1;
    transform: translateX(0);
  }
  h1{
    color: ${props => props.color};
    text-align: center;
    width: 50%;
    font-size: 30px;
    padding: 1vh;
    border-radius: 30px;
    opacity: 0;
    transition: opacity 1.2s, transform 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) 0.5s , scale 0.3s;
    transform: translateX(-2000px);
    margin-bottom: 0;
    margin-top: 0;
    @media (max-width: 1200px) {
      width: 99%;
      font-size: 17px;
      padding: 2vh;
  }
    &:hover{
      scale: 1.05;
      cursor: pointer;
    }
  }
  .visible {
    opacity: 1;
    transform: translateX(0);
  }
  @media (max-width: 420px) {
    margin-top: 10px;
    width: 150% !important;
  }
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  background-position: center;
  background-size: cover;
  width: 50% !important;
  img {
    border-radius: 2%;
    transition: transform 0.8s;
    width: 100%;
    }
    @media (max-width: 1200px) {
        padding: 3vh 1.5vh;
        img{
          width: 100%;
          height: 100%;
        }
    }
`;

const StyledSwiperContainer = styled(Swiper)`
max-width: 60%;
margin-top: 5vh;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${({ isIntersecting }) => (isIntersecting ? 1 : 0)};
  transition: opacity 3s ease-in-out;
  padding-bottom: 5vh; 
  .swiper-pagination-bullet-active {
 background-color: black; 
}
  @media (max-width: 1500px) {
    max-width: 100% !important;
    margin-top: 0vh;
    padding-bottom: 1.5vh; 
  }
`;
