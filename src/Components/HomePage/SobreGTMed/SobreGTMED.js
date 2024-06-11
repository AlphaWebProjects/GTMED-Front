import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Fade } from 'react-awesome-reveal';
import logo from '../../../assets/images/logoGTMEDmelhorada.png'
import background from '../../../assets/images/Background1.png'

function SobreGTMED() {

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
    <Fade delay={0.5} cascade  damping={0.3} triggerOnce={true} >

      <Container backgroundImage={background}>

        <Fade delay={300} cascade  damping={0.3} triggerOnce={true}>

          <img src={logo} alt='Logo'/>

        </Fade>

        <span>

        <Fade delay={500} cascade  damping={0.3} triggerOnce={true} direction='right'>

          <h1>Sobre a GTMED: quem somos?</h1>

        </Fade>

        <Fade delay={1000} cascade  damping={0.3} triggerOnce={true} direction='right'>

          <p>Bem-vindo à equipe médica do GTMed! Aqui na nossa plataforma, contamos com uma equipe excepcional de médicos, todos com formação na prestigiada Universidade de São Paulo (USP). Nossa equipe é verdadeiramente diversificada, abrangendo médicos de todas as especialidades imagináveis.
          </p>

        </Fade>

        <Fade delay={1500} cascade damping={0.3} triggerOnce={true} direction='right'>       

          <p>Nossa plataforma é projetada para fornecer cursos abrangentes que cobrem todas as áreas da medicina. Desde Clínica Médica até Cirurgia, passando por Pediatria, Ginecologia, Psiquiatria, Radio, Derma, Infecto, Ortopedia, Neuro, Cardio e muito mais, nossos cursos são desenvolvidos por especialistas em cada campo. Isso garante que nossos médicos recebam treinamento completo e atualizado em suas respectivas áreas de atuação.
          </p>

        </Fade>

        <Fade delay={2000} cascade damping={0.3} triggerOnce={true} direction='right'> 

          <p>Os cursos oferecidos em nossa plataforma são cuidadosamente elaborados para fornecer aos médicos as habilidades e o conhecimento necessários para enfrentar os desafios do mundo médico moderno. Cobrimos desde os fundamentos básicos até as técnicas mais avançadas, garantindo que nossos profissionais estejam preparados para oferecer o melhor cuidado possível aos seus pacientes.
          </p>

        </Fade>


        <Fade delay={2500} cascade damping={0.3} triggerOnce={true} direction='right'> 

          <p>Na equipe do GTMed, estamos comprometidos em promover a excelência na prática médica. Nossos cursos são ministrados por especialistas líderes em suas áreas, garantindo um ensino de alta qualidade e relevância prática. Seja para atualizar habilidades, explorar novas áreas de especialização ou simplesmente aprimorar o conhecimento existente, nossa plataforma oferece os recursos necessários para impulsionar a carreira de qualquer médico.
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
  height: 100vh;
  display: flex;
  flex-direction: reverse;
  align-items: center;
  position: right !important;
  background-image: ${props => `url(${props.backgroundImage})`};
  background-position: center;
  background-size: cover;     
  background-repeat: no-repeat;
  padding: 0 0 0 4vh;
  span{
    display: flex;
    flex-direction: column;
    max-width: 40%;
    @media (max-width: 1200px) {
    margin: 0 !important;
    max-width: 100%;
  }
  }
  h1{
    text-align: center;
    margin-bottom: 2vh;
    font-size: 4vh;
    color: white;
    font-family: "Montserrat", sans-serif;
    letter-spacing: 2.5px;
  }
  p{
    margin-bottom: 1.5vh;
    font-size: 1.9vh;
    font-weight: 550;
    color: white;
    text-align: center;
    font-family: "Montserrat", sans-serif;
    letter-spacing: 2.2px;
  }
  img{
    display: flex;
    height: 74.1vh;
    width: 97.5vh;
    margin-right: 5vh;
    @media (max-width: 1200px) {
    display: flex;
    height: 38vh;
    width: 50vh;
    margin-right: 0vh !important;
  }
  }
  @media (max-width: 1200px) {
    margin-top: 0;
    height: auto;
    flex-direction: column;
    margin: 0 !important;
    padding: 5vh;
  }
`;


