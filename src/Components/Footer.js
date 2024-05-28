import styled from "styled-components";
import { Slide, Fade } from "react-awesome-reveal";
import logo from '../assets/images/logoGTMEDmelhorada.png'
import background from '../assets/images/Background2.png'


export default function Footer(){
  const instagram = "https://www.instagram.com"
  const whatsappNumber = "";
  const whatsappMessage = ``;

  const handleItemClick = (item) => {
    window.scrollTo({ top: item.position, behavior: 'smooth' })
  };

  return (
    <Container backgroundImage={background}>

      <TitleContainer>
      <Slide  triggerOnce={true}><h3>{"Conecte-se Conosco"}</h3></Slide>
        <SocialContainer>
          <a href={instagram} target="_blank" rel="noopener noreferrer"></a>
          <a
            target="_blank"
            onClick={(e) => e.stopPropagation()} rel="noopener noreferrer"></a>
        </SocialContainer>
      </TitleContainer>
      <Fade delay={1} cascade damping={2}  triggerOnce={true} >
      <SubContainer>
        <ImageContainer>
          <img src={logo} alt="Logo" />
        </ImageContainer>

        <TextColumn>
          <h4>{"Nosso Site"}</h4>
          <h5 onClick={() => handleItemClick({position: 0})}>{"none"}</h5>
          <h5 onClick={() => handleItemClick({position: 0})}>{"none"}</h5>
          <h5 onClick={() => handleItemClick({position: 0})}>{"none"}</h5>
          <h5 onClick={() => handleItemClick({position: 0})}>{"none"}</h5>
          <h5 onClick={() => handleItemClick({position: 0})}>{"none"}</h5>
          <h5 onClick={() => handleItemClick({position: 0})}>{"none"}</h5>
        </TextColumn>

        <TextColumn>
          <h4>{"Contato"}</h4>
          <h5>{"Email: email@email.com"}</h5>
          <h5>{"Endereço: Av. Prof. Lúcio Martins Rodrigues, 445 - Cidade Universitária Butantã, São Paulo - SP, 05508-020, sala 12 do prédio Prédio da Faculdade de Medicina da USP (FMUSP)"}</h5>
          <h5>{"Celular: (11) 99999-9999"}</h5>
        </TextColumn>

      </SubContainer>
      </Fade>
      <AboutContainer>
        <span>{"Todos Direitos Reservados ©"}</span>
      </AboutContainer>
    </Container>
  )
}

const Container = styled.footer`
  border-top: 1px solid white;
  background-image: ${props => `url(${props.backgroundImage})`};
  background-position: center;
  background-size: cover;     
  background-repeat: no-repeat;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 2vh 0;
  color: white;
  row-gap: 4vh;
  @media (max-width: 850px) {
    padding: 2vh 0vw;
  }
  h3{
    margin: 0 !important;
  }
  h4{
    margin: 0 !important;
  }
  h5{
    margin: 0 !important;
  }
  span{
    margin: 0 !important;
  }
  a{
    margin: 0 !important;
  }
`
const TitleContainer = styled.div`
  width: 80%;
  padding: 1.7vh 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid black;
  > h3 {
    font-size: 24px;
  }
  svg {
    font-size: 27px;
    cursor: pointer;
  }
  @media (max-width: 850px) {
    > h3 {
      font-size: 20px;
    }
    svg {
      font-size: 24px;
    }
  }
`
const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 1.6vw;
  @media (max-width: 850px) {
    column-gap: 4vw;
  }
`
const SubContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 5vw;
  @media (max-width: 850px) {
    justify-content: space-between;
    flex-wrap: wrap;
  }
`
const ImageContainer = styled.div`
border-radius: 15px;
margin: 0 !important;
  img {
    height: 34.2342vh;
    width: 47.445vh;
    cursor: pointer;
  }
  @media (max-width: 850px) {
    display: none;
  }
`
const TextColumn = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  row-gap: 2vh;
  h4 {
    font-size: 22px;
    font-weight: 600;
  }
  h5 {
    font-size: 16px;
    max-width: 300px;
    cursor: pointer;
  }
  @media (max-width: 850px) {
    width: auto;
    max-width: 58%;
    padding-left: 5vh;
    h5 {
      width: 90%;
      font-size: 12px;
    }
    h4 {
      font-size: 20px;
    }
  }
`
const AboutContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 1vw;
  padding: 1.2vh 0;
  > :last-child {
    text-decoration: underline;
    cursor: pointer;
  }
  @media (max-width: 1200px) {
    font-size: 15px;
    column-gap: 0;
    padding: 0;
    margin: 0 !important;
  }
`