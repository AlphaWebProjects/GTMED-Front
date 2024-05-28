import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import backgroundHome from "../../../assets/images/BackgroundHome.png"
import { Fade, Zoom } from 'react-awesome-reveal';
import logo from '../../../assets/images/logoGTMEDmelhorada.png'
import { BiSolidDownArrow } from "react-icons/bi";
import card from '../../../assets/images/cardSobreGTMED.png'
import bannerMobile from '../../../assets/images/bannerMobile.jpg'
import banner from '../../../assets/images/banner.jpg'

function Home() {
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
    <Fade delay={0.5} cascade  damping={0.3} triggerOnce={true}>
      <Container backgroundImage={backgroundHome} backgroundPosition={width > 1200 ? 'center' : 'left'}>

          <Fade delay={300} cascade  damping={0.3} triggerOnce={true} direction='down' style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
              <Logo src={logo} alt='Logo'/>
          </Fade>

        <Banner src={width > 1200 ? banner : bannerMobile} />

          <CenterContent> 

                  <span>

                    <Fade delay={1200} cascade  damping={0.3} triggerOnce={true} direction='up' style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                    <Card src={card}/>
                    </Fade>

                    <Fade delay={1200} cascade  damping={0.3} triggerOnce={true} direction='up' style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                    <b>Por que escolher a GTMED?</b>
                    </Fade>

                    <StyledButton>
                      CONHEÇA NOSSOS CURSOS
                    </StyledButton>

                    <Arrow />

                  </span>

                  

          </CenterContent>


      </Container>
    </Fade>
  );
}

export default Home;

const Banner = styled.img`
  border-radius: 20px;
  margin-bottom: 0vh;
      @media (max-width: 1200px) {
        height: 25.1512vh;
        width: 50.729vh;
        margin-bottom: 3 vh;
        margin-top: 3vh;
      }
`

const Logo = styled.img`
  height: 16.4874612vh;
  width: 34.554016vh;
  margin-top: 5vh;
      @media (max-width: 1200px) {
        height: 17.60584vh;
        width: 35.5103vh;
        margin-top: 0;
        margin: 0 !important;
      }
`

const Card = styled.img`
  width: 47.879vh;
  height: 27vh;
  border-radius: 25px;
      @media (max-width: 1200px) {
        margin-top: 0;
        height: 20.8vh;
        width: 38.2785vh;
        margin: 0 !important;
      }
`

const Container = styled.div`
  width: 100%;
  height: 102.2vh;
  background-image: ${props => `url(${props.backgroundImage})`};
  background-position: ${props => `${props.backgroundPosition}`};
  background-size: cover;     
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 7vh;
  padding-top: 2vh;
  @media (max-width: 1200px) {
    margin-top: 0;
    height: 102.2vh !important;
    padding-left: 0;
    padding-top: 6vh;
  }
`;

const CenterContent = styled.div`
  width: 100%;
  max-width: 90% !important;
  max-height: 90vh !important;
  height: 100% !important;
  display: flex;
  justify-content: center;
  @media (max-width: 1200px) {
    flex-direction: row;
  }
  span{
    z-index: 10;
    border-radius: 8px;
    display: flex;
    align-items: center;
    padding-top: 1vh;
    flex-direction: column;
    width: 45%;
    @media (max-width: 1200px) {
    padding-top: 0;
    margin: 0 !important;
    width: 100%;
    
  }
    p{
      font-size: 2.5vh;
      font-weight: 700;
      text-align: center;
      max-width: 70%;
      letter-spacing: 1.5px;
      color: white;
      font-family: "Montserrat", sans-serif;
      margin-bottom:4vh;
      @media (max-width: 1200px) {
        font-size: 2vh !important;
        max-width: 99%;
      }
    }
    b{
      font-weight: 800;
      text-align: center;
      max-width: 100%;
      letter-spacing: 1.5px;
      color: #051461;
      font-family: "Montserrat", sans-serif;
      padding: 1.2vh;
      border-radius: 22px;
      font-size: 2vh;
      border-radius: 10px;
      background-image: linear-gradient(45deg, #DFDDDD, #FFFFFF, #BDBBBB, #979494);
      background-size: 400% 200%;
      animation: textura 3.4s cubic-bezier(0.2, 0.5, 0.9, 0.6) 2s infinite;
      transition: background 1.6s cubic-bezier(0.55, 0.1, 0.47, 0.94);
      box-shadow: 0px 0px 21px 0px rgba(6, 25, 122, 0.8);
      transition: scale 0.3s ease;
      fill: #FFFFFF;
&:hover{
    scale:1.05;
    cursor: pointer;
}
      margin-bottom:8vh;
      cursor: pointer;
      @media (max-width: 1200px) {
        font-size: 1.5vh !important;
        max-width: 100%;
        margin-bottom: 7vh;
      }
    }
  }
`;

const StyledButton = styled.div`
background-color: #f74242;
padding: 2.1vh 3.4vh;
color: white;
font-weight: 700;
font-family: "Montserrat", sans-serif;
font-size: 2.2vh;
border-radius: 10px;
transition: scale 0.3s ease;
@media (max-width: 1200px) {
      font-size: 2vh !important;
      }
&:hover{
    scale:1.05;
    cursor: pointer;
}
`

const Arrow = styled(BiSolidDownArrow)`
color: #B92727;
transition: scale 0.3s ease;
height: 2vh;
width: 2vh;
margin-top: 10px;
&:hover{
    scale:1.3;
    color: #FA4646;
    cursor: pointer;
}
`