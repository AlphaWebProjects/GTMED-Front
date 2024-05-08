import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import aula1Clinica2 from '../../../assets/images/clinicamedica/aula1Clinica2.png'
import aula1Clinica from '../../../assets/images/clinicamedica/aula1Clinica.png'
import { Fade } from 'react-awesome-reveal';

function SobreOCurso(sobreOCurso) {

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

        <CenterContent borderColor={sobreOCurso.sobreOCurso.cores.bordaDescricao1}>
          <Fade delay={0.5} cascade  damping={0.3} style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }} triggerOnce={true} direction='left'>
            <p>
              {sobreOCurso.sobreOCurso.descricao1}
            </p>
          </Fade>

          <Fade delay={2} cascade  damping={0.3} style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }} triggerOnce={true} direction='right'>
          <h1>
            {sobreOCurso.sobreOCurso.descricao2}
          </h1>
          </Fade>
          
          

          <StyledSwiperContainer
            color={sobreOCurso.sobreOCurso.cores.bordaDescricao1}
            ref={containerRef}
            isIntersecting={isIntersecting}
            pagination={{
              type: 'progressbar',
            }}
            navigation={true}
            modules={[Pagination, Navigation, Autoplay, EffectFade]}
            slidesPerView={width > 1500 ? 3 : 1}
            spaceBetween={0}
            autoplay={{
              delay: 4000,
              disableOnInteraction: true,
            }}
          >
            <StyledSwiperSlide>
              <div>
                <img src={aula1Clinica} width="150" height="150" alt="Logo" />
              </div>
            </StyledSwiperSlide>

            <StyledSwiperSlide>
              <div>
                <img src={aula1Clinica2} width="150" height="150" alt="Logo" />
              </div>
            </StyledSwiperSlide>

            <StyledSwiperSlide>
              <div>
                <img src={aula1Clinica} width="150" height="150" alt="Logo" />
              </div>
            </StyledSwiperSlide>

            <StyledSwiperSlide>
              <div>
                <img src={aula1Clinica2} width="150" height="150" alt="Logo" />
              </div>
            </StyledSwiperSlide>
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
  padding: 2%;
`;

const CenterContent = styled.div`
  width: 100%;
  max-width: 100% !important;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5vh;
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
      padding: 2vh;
  }
    &:hover{
      transform: scale(1.05);
      cursor: pointer;
    }
  }
  h1{
    text-align: center;
    width: 50%;
    font-size: 22px;
    padding: 1vh;
    border-radius: 30px;
    margin-bottom: 0;
    margin-top: 0;
    transition: transform 0.8s ease;
    @media (max-width: 1200px) {
      width: 100%;
      font-size: 17px;
      padding: 2vh;
  }
    &:hover{
      transform: scale(1.05);
      cursor: pointer;
    }
  }
  @media (max-width: 420px) {
    margin-top: 10px;
  }
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  padding-top: 5vh !important;
  img {
    width: 30vh;
    height: 50vh;
    border-radius: 2%;
    transition: transform 0.8s;
    &:hover{
      transform: scale(1.03);
      cursor: grab;
  }
  &:active{
    cursor: grabbing;
  }
  }
  div {
    height: 90% !important;
    text-align: center !important;
  }
  @media (max-width: 1200px) {
    padding: 3vh 1.5vh;
  }
`;

const StyledSwiperContainer = styled(Swiper)`
  max-width: 52% !important; 
  margin-top: 4vh;
  opacity: ${({ isIntersecting }) => (isIntersecting ? 1 : 0)};
  transition: opacity 2s ease-in-out;
  @media (max-width: 1500px) {
    max-width: 100% !important;
  }
  .swiper-pagination-progressbar {
    background: ${props => `${props.color}`};
  }
  .swiper-pagination-progressbar-fill {
    background: lightgray !important;
  }
  .swiper-button-next,
  .swiper-button-prev {
    color: ${props => `${props.color}`};
    @media (max-width: 1500px) {
    width: 2vh;
    height: 1vh;
  }
    &:hover{
      cursor: pointer;
    }
  }
`;
