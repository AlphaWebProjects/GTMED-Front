import styled from "styled-components";
import { IoIosMedical } from "react-icons/io";
import { Fade, Slide, Zoom } from 'react-awesome-reveal';
import background from '../../assets/images/backgroundLeads.png'
import backgroundDesktop from '../../assets/images/backgroundLeadsDesktop.png'
import { FaMapPin } from "react-icons/fa";
import { FaExclamation } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import React, { useEffect, useState } from 'react';
import { toast } from "react-toastify";
import api from "../../services/API";
import { BrowserRouter as Router, Route, Link, useNavigate } from 'react-router-dom';


export default function NaoFiqueDeFora(){

  const navigate = useNavigate();

  const [width, setWidth] = useState(window.innerWidth);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [loadingBool, setLoadingBool] = useState(false);

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

    setLoadingBool(true);

    if(name === ''){
        setLoadingBool(false);
        return toast.error('Insira um nome válido')
    }

    const validateEmail = isValidEmail(email);
    if(!validateEmail){
        setLoadingBool(false);
        return toast.error('Insira um email válido')
    }

    const validatePhone = isValidPhone(phone);
    if(!validatePhone){
        setLoadingBool(false);
        return toast.error('Insira um número de celular válido (DDD seguido do número, sem espaços ou outros caracteres)')
    }

    try {
      
      await api.SendLead(name, email, phone)

      toast('Cadastro realizado');

      setLoadingBool(false);

      setEmail('');
      setName('');
      setPhone('');

      navigate('/obrigado');

      return 

    } catch (error) {
      
      console.log(error)
      setLoadingBool(false);
      return toast.error('Não foi possível realizar o seu cadastro')

    }

  }

    return (
        <Container backgroundImage={ width > 1200 ? backgroundDesktop : background}>
            <Slide triggerOnce={true}><Title>Não fique de fora dessa experiência transformadora!</Title></Slide>
            <SubContainer>
            <Fade delay={0.5} cascade damping={0.3} triggerOnce={true} style={{width:'100%'}}>

                <CenterContent>
                    <p> <FaMapPin /> Participe do evento online no dia 15/06, às 19h (horário de Brasília)</p>
                    <p> <FaExclamation/> Vagas limitadas! Preencha o formulário {width > 1200 ? 'ao lado' : 'abaixo'} para garantir sua inscrição gratuita</p>
                    <p> <FaArrowTrendUp /> Prepare-se para dar o primeiro passo rumo a uma nova forma de se capacitar para os desafios da medicina</p>
                </CenterContent>

                <form>
                    <StyledInput value={name} onChange={(e) => setName(e.target.value)} type='text' placeholder='Seu nome' />

                    <StyledInput value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Seu melhor email'/>

                    <StyledInput value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='Celular com DDD'/>

                    <Zoom delay={600} duration={500} cascade triggerOnce={true} style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                        <StyledButton onClick={send}>
                            Realizar cadastro
                        </StyledButton>
                    </Zoom>

                    {loadingBool ? <p>Realizando seu cadastro...</p> : ''}

                </form>

                

            </Fade>
            </SubContainer>
        </Container>
    )
    }

const Container = styled.div`
    user-select: none;
    width: 100%;
    padding: 10vh 10vw;
    height: auto;
    background-image: ${props => `url(${props.backgroundImage})`};
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    @media (max-width: 1200px) {
        height: auto;
        padding: 5vh 4vw;
        background-position: top;
    }
`;

const SubContainer = styled.div`
    width: 70%;
    display: flex !important;
    flex-direction: row;
    align-items: center !important;
    justify-content: center !important;
    form {
        z-index: 10;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        width: 40vh;
        min-height: 55%;
        margin-left: 5vh;
        label{
            font-family: "Montserrat", sans-serif;
            color: white;
            font-size: 2.8vh;
            font-weight: 700;
        }
        @media (max-width: 1000px) {
        flex-direction: column;
        width: 100%;
        margin-left: 0 !important;
    }
  }
    @media (max-width: 1200px) {
        width: 100%;
        flex-direction: column;
    }
`;

const CenterContent = styled.div`
width: 83vh;
height: auto;
border-radius: 25px;
display: flex;
flex-direction: column;
align-items: center;
padding: 5%  0 0 0;
@media (max-width: 1200px) {
    width: 100% !important;
    }
p{
    padding: 2vh;
    background-color: white;
    border: 3px solid #094A58;
    text-align: center;
    max-width: 80%;
    font-size: 2.5vh;
    color: #094A58;
    margin-bottom: 3vh;
    border-radius: 20px;
    ;
} 
`

const Title = styled.h3`
    text-align: center;
    font-family: "Montserrat", Sans-serif;
    font-size: 1.8rem;
    font-weight: 600;
    margin-bottom: 2rem;
    @media (max-width: 1000px) {
    font-size: 1.3rem;
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
margin: 2vh 0;
@media (max-width: 1000px) {
    margin-bottom: 1.5vh;
  }
&::placeholder {
    color: black;
    font-style: italic;
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
margin-top: 2vh;
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

