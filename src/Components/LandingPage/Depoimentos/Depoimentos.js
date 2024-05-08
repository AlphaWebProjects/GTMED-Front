import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import card1 from '../../../assets/images/clinicamedica/aula1Clinica.png'
import card2 from '../../../assets/images/clinicamedica/aula1Clinica2.png'

function Depoimentos({depoimentos}) {
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

      <Main>
        

            <StyledSwiperContainer
                grabCursor={true}
                effect={'coverflow'}
                centeredSlides={true}
                slidesPerView={1}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false,
                  }}
                pagination={width > 1200 ? true : false}
                autoplay={{
                    delay: width > 1200 ? 5500 : 4000,
                    disableOnInteraction: true,
                  }}
                modules={[EffectCoverflow, Pagination, Autoplay]}
            >

                  <StyledSwiperSlide>
                
                    <img src={card1} width="150" height="150" alt="Logo" />

                  </StyledSwiperSlide>

                  <StyledSwiperSlide>
                
                    <img src={card2} width="150" height="150" alt="Logo" />

                  </StyledSwiperSlide>

                  <StyledSwiperSlide>
                
                    <img src={card1} width="150" height="150" alt="Logo" />

                  </StyledSwiperSlide>

                  <StyledSwiperSlide>
                
                    <img src={card2} width="150" height="150" alt="Logo" />

                  </StyledSwiperSlide>

                  <StyledSwiperSlide>
                
                    <img src={card1} width="150" height="150" alt="Logo" />

                  </StyledSwiperSlide>


            </StyledSwiperContainer>

      </Main>
      
    </Container>
  );
}

export default Depoimentos;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  @media (max-width: 1200px) {
    margin-top: 0;
    height: auto;
  }
`;

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2%;
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
max-width: 100%;
margin-top: 5vh;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;
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
