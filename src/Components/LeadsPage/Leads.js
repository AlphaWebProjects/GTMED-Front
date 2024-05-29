import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import background from '../../assets/images/lead/backgroundLead.png'
import { Fade, Zoom } from 'react-awesome-reveal';
import { BiSolidDownArrow } from "react-icons/bi";
import { toast } from 'react-toastify';
import api from '../../services/API';
import { Spinner } from '../../common/spinner/Spinner';
import { BrowserRouter as Router, Route, Link, useNavigate, useLocation } from 'react-router-dom';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

function LeadsHome() {
  const query = useQuery();
  const [utmParams, setUtmParams] = useState({
    utm_source: query.get('utm_source') || '',
    utm_medium: query.get('utm_medium') || '',
    utm_campaign: query.get('utm_campaign') || '',
    utm_content: query.get('utm_content') || '',
    utm_term: query.get('utm_term') || ''
  });

  // useEffect(() => {
  //   setUtmParams({
  //     utm_source: query.get('utm_source') || '',
  //     utm_medium: query.get('utm_medium') || '',
  //     utm_campaign: query.get('utm_campaign') || '',
  //     utm_content: query.get('utm_content') || '',
  //     utm_term: query.get('utm_term') || ''
  //   });
  // }, [query]);
  
  const [width, setWidth] = useState(window.innerWidth);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [bool, setBool] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {

      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function isValidEmail(email) {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
  const str = phone.toString();
  const phoneRegex = /^\d{2}(?:9)?\d{8}$/;
  return phoneRegex.test(str);
}

  async function send(){

    setBool(true);

    if(name === ''){
      return toast.error('Insira um nome válido')
    }

    const validateEmail = isValidEmail(email);
    if(!validateEmail){
      return toast.error('Insira um email válido')
    }

    const validatePhone = isValidPhone(phone);
    if(!validatePhone){
      return toast.error('Insira um número de celular válido (DDD seguido do número, sem espaços ou outros caracteres)')
    }

    try {

      await api.SendLead({name, email, phone, ...utmParams})

      // Enviar evento para o Google Tag Manager
      if (window.dataLayer) {
        window.dataLayer.push({
          event: 'form_submit',
          category: 'Formulário',
          action: 'Envio',
          label: 'Leads',
        });
      }

      toast('Cadastro realizado');

      setBool(false);

      setEmail('');
      setName('');
      setPhone('');

      navigate('/obrigado');

      return 

    } catch (error) {
      
      console.log(error)
      return toast.error('Não foi possível realizar o seu cadastro')

    }

  }

  return (
    
      <Container backgroundimage={background}>

          <CenterContent> 
                <span>

                <Fade delay={800} cascade  damping={0.3} triggerOnce={true} direction='up' style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                  <h1>
                    Médico, 
                  </h1> 
                  </Fade>

                  <Fade delay={1000} cascade  damping={0.3} triggerOnce={true} direction='up' style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                  <h2>
                    você está pronto para <b>REVOLUCIONAR</b> a forma como se prepara para os <b>PLANTÕES</b>? 
                  </h2> 
                  </Fade>

                  <Fade delay={1200} cascade  damping={0.3} triggerOnce={true} direction='up' style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                  <p>
                    Participe do evento GTMED e aprenda como perder o medo em situações de emergência em plantões, seja você estudante do 6º ano de medicina ou médico recém formado. 
                  </p> 
                  </Fade>

                  <Fade delay={1500} cascade  damping={0.3} triggerOnce={true} style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                  <form>

                    <StyledInput value={name} onChange={(e) => setName(e.target.value)} type='text' placeholder='Seu nome' />

                    <StyledInput value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Seu melhor email'/>

                    <StyledInput value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='Celular com DDD'/>
                    
                  </form>
                  </Fade>
                  
                  <Zoom delay={1450} duration={500} cascade triggerOnce={true} style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                   
                    <StyledButton onClick={send} id={"btn-send-leads"}>
                      REALIZAR CADASTRO
                    </StyledButton>

                  </Zoom>

                  {bool ? <p>Realizando seu cadastro...</p> : ''}

                </span>

          </CenterContent>

      </Container>

  );
}

export default LeadsHome;

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
    padding-top: 10vh;
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
  padding-bottom: 10vh !important;
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
      margin-bottom:2vh;
      @media (max-width: 1000px) {
        font-size: 4vh !important;
        max-width: 99%;
      }
    }
    h2{
      font-size: 4vh;
      font-weight: 700;
      text-align: center;
      max-width: 100%;
      letter-spacing: 1.5px;
      color: white;
      font-family: "Montserrat", sans-serif;
      margin-bottom:4vh;
      @media (max-width: 1000px) {
        font-size: 2.8vh !important;
        max-width: 99%;
      }
    }
    p{
      font-size: 2vh;
      font-weight: 700;
      text-align: center;
      max-width: 90%;
      letter-spacing: 1.5px;
      color: white;
      font-family: "Montserrat", sans-serif;
      margin-bottom:8vh;
      @media (max-width: 1000px) {
        font-size: 1.9vh !important;
        max-width: 99% !important;
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
            max-width: 99%;
        }
    }
    form{
    z-index: 10;
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 135vh;
    min-height: 55%;
    margin-bottom: 9vh;
    label{
        font-family: "Montserrat", sans-serif;
        color: white;
        font-size: 2.8vh;
        font-weight: 700;
    }
    @media (max-width: 1000px) {
    flex-direction: column;
    width: 100%;
  }
  }
  @media (max-width: 1000px) {
    max-width: 100%;
  }
  }
  @media (max-width: 1000px) {
    margin-top: 10px;
    max-width: 95% !important;
  }
`;

const StyledInput = styled.input`
width: 40vh;
height: 6vh;
border: none;
border-radius: 25px;
font-family: "Montserrat", sans-serif;
font-size: 2vh;
text-align: center;
@media (max-width: 1000px) {
    margin-bottom: 1.5vh;
  }
&::placeholder {
    color: black; /* Cor do placeholder */
    font-style: italic; /* Itálico para o placeholder */
    text-align: center;
    font-size: 2vh;
  }
  &:focus {
    outline: none;
    border: none;
    &::placeholder {
    color: white;
  }
  }
`

const StyledButton = styled.div`
margin-bottom: 2vh;
padding: 2.1vh 3.4vh;
color: white;
font-family: "Montserrat", sans-serif;
font-size: 2.8vh;
border-radius: 10px;
font-weight: 600;
//background-image: linear-gradient(45deg, #255C68, #20545F, #164249, #0B2A30);
background-color: #209DB9;
background-size: 400% 200%;
animation: textura 3.4s cubic-bezier(0.2, 0.5, 0.9, 0.6) 2s infinite;
transition: background 1.6s cubic-bezier(0.55, 0.1, 0.47, 0.94);
box-shadow: 0px 0px 21px 0px rgba(104, 197, 218, 0.8);
transition: scale 0.3s ease;
fill: #FFFFFF;
&:hover{
    scale:1.05;
    //background-image: linear-gradient(45deg, #255C68, #4B94A3, #164249, #0B2A30);
    background-color: #1BBADD;
    cursor: pointer;
}
`