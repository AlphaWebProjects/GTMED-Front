import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import doctor from "../../../assets/images/doctor.jpg"
import doctors from "../../../assets/images/doctors.avif"
import { Fade } from 'react-awesome-reveal';

function Home() {
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

        <CenterContent> 

            <p>oi oi oi oi oi </p>    

          <StyledSwiperContainer
            ref={containerRef}
            isIntersecting={isIntersecting}
            spaceBetween={0}
            autoplay={{
                delay: 6000,
                disableOnInteraction: false
              }}
              speed={500}
            modules={[EffectFade, Navigation, Autoplay]}
          >
            <StyledSwiperSlide>
              
                <img src={doctor} alt="doctor" />
              
            </StyledSwiperSlide>

            <StyledSwiperSlide>
              
                <img src={doctors} alt="doctors" />
              
            </StyledSwiperSlide>

          </StyledSwiperContainer>

        </CenterContent>

    </Container>
  );
}

export default Home;

const Container = styled.div`
  width: 100%;
  height: 80vh;
  max-height: 100vh !important;
  margin-top: 120px;
  background-size: cover;
  background-position: center;
  max-height: 100% !important;
  min-height: 100% !important;
  overflow: hidden !important;
  background-color: red;
  p{
    z-index: 100;
  }
  @media (max-width: 1200px) {
    margin-top: 0;
    height: 100vh !important;
  }
`;

const CenterContent = styled.div`
  width: 100%;
  max-width: 100% !important;
  height: 100% !important;
  display: flex;
  align-items: center;
  justify-content: center;
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
