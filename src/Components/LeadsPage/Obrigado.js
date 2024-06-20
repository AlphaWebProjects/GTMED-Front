import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import background from '../../assets/images/lead/backgroundLead.png'
import { Fade, Zoom } from 'react-awesome-reveal';

function Obrigado() {
  const [width, setWidth] = useState(window.innerWidth);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [bool, setBool] = useState(false);

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
    
      <Container backgroundimage={background}>

          <CenterContent> 
                <span>

                <Fade delay={800} cascade  damping={0.3} triggerOnce={true} direction='up' style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                  <h1>
                    Obrigado pelo cadastro! 
                  </h1> 
                  </Fade>

                  <Fade delay={1000} cascade  damping={0.3} triggerOnce={true} direction='up' style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                  <h2>
                    aguardamos <b>ANSIOSAMENTE</b> pela sua presença no nosso evento. 
                  </h2> 
                  </Fade>

                  <Fade delay={1200} cascade  damping={0.3} triggerOnce={true} direction='up' style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                  <h1>
                    FALTA POUCO... 
                  </h1> 
                  </Fade>

                  <Fade delay={1400} cascade  damping={0.3} triggerOnce={true} direction='up' style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                  <p>
                    Entre no grupo do whatsapp! Você não perderá nenhum detalhe sobre o evento e ainda pode garantir alguns presentes como bônus.  
                  </p> 
                  </Fade>

                  <Fade delay={1600} cascade  damping={0.3} triggerOnce={true} direction='up' style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                  <StyledButton 
                    href={`https://chat.whatsapp.com/KIz9kuzS3Cu4CM1HvH4R49`}
                    target="_blank"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Entrar no grupo
                  </StyledButton> 
                  </Fade>

                </span>

          </CenterContent>

      </Container>

  );
}

export default Obrigado;

const Container = styled.div`
  width: 100%;
  height: 102.2vh;
  background-image: ${props => `url(${props.backgroundimage})`};
  background-position: center;
  background-size: cover;     
  background-repeat: no-repeat;
  display:flex;
  align-items:center; 
  justify-content: center;
  flex-direction: row-reverse;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    
  }
  @media (max-width: 1000px) {
    margin-top: 0;
    height: 105.2vh !important;
    padding-top: 0vh;
  }
`;

const CenterContent = styled.div`
  width: 90%;
  max-width: 50% !important;
  max-height: 90vh !important;
  height: 100% !important;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 3vh !important;
  span{
    z-index: 10;
    border-radius: 22px;
    display: flex;
    align-items: center;
    flex-direction: column;
    max-width: 90%;
    min-height: 55%;
    padding: 4vh 5vh;
    h1{
      font-size: 6vh;
      font-weight: 700;
      text-align: center;
      max-width: 100%;
      letter-spacing: 1.5px;
      color: white;
      font-family: "Montserrat", sans-serif;
      margin-bottom:4vh;
      display: flex;
      flex-direction: row;
      @media (max-width: 1000px) {
        font-size: 4vh !important;
        max-width: 100%;
      }
    }
    h2{
      font-size: 3.5vh;
      font-weight: 700;
      text-align: center;
      max-width: 100%;
      letter-spacing: 1.5px;
      color: white;
      font-family: "Montserrat", sans-serif;
      margin-bottom:4vh;
      @media (max-width: 1000px) {
        font-size: 2.8vh !important;
        max-width: 100%;
      }
    }
    p{
      font-size: 2vh;
      font-weight: 700;
      text-align: center;
      max-width: 100%;
      letter-spacing: 1.5px;
      color: white;
      font-family: "Montserrat", sans-serif;
      margin-bottom:8vh;
      display: flex;
      flex-direction: row;
      @media (max-width: 1000px) {
        font-size: 1.9vh !important;
        max-width: 100% !important;
      }
    }
    b{
        font-size: 3.2vh;
        font-weight: 700;
        text-align: center;
        max-width: 70%;
        letter-spacing: 1.5px;
        color: #4B94A3;
        font-family: "Montserrat", sans-serif;
        margin-bottom:8vh;
        @media (max-width: 1000px) {
            font-size: 2.8vh !important;
            max-width: 100%;
        }
    }
  @media (max-width: 1000px) {
    max-width: 100%;
  }
  }
  @media (max-width: 1000px) {
    margin-top: 10px;
    max-width: 100% !important;
  }
`;



const StyledButton = styled.a`
margin-bottom: 2vh;
background-color: #094A58;
text-decoration: none;
padding: 2.1vh 3.4vh;
color: white;
font-family: "Montserrat", sans-serif;
font-size: 2.8vh;
border-radius: 20px;
background-image: linear-gradient(45deg, #01A301, #028002, #016401, #015301);
background-size: 400% 200%;
animation: textura 3.4s cubic-bezier(0.2, 0.5, 0.9, 0.6) 2s infinite;
transition: background 1.6s cubic-bezier(0.55, 0.1, 0.47, 0.94);
box-shadow: 0px 0px 21px 0px rgba(5, 197, 5, 0.8);
transition: scale 0.3s ease;
fill: #FFFFFF;
&:hover{
    scale:1.05;
    background-image: linear-gradient(45deg, #01A301, #049904, #028602, #016101);
    cursor: pointer;
}
`