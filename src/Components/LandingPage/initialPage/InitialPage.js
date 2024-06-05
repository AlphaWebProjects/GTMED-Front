import styled from 'styled-components';
import { Fade } from 'react-awesome-reveal';
import imagem from "../../../assets/images/clinicamedica/inicio.png"
import React, { useEffect, useState } from 'react';


export default function InitialPage({intro}) {

    const [width, setWidth] = useState(window.innerWidth);
  
    const handleScrollToPayment = () => {
        const offset = width > 1200 ? 4400 : 4100; 
        window.scrollTo({
          top: offset,
          behavior: 'smooth',
        });
      };
  useEffect(() => {

    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

    //style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}
    
    return (
        <InitialContainer backgroundImage={width > 810 ? intro.backgroundImage : intro.backgroundImageMobile}>
            <MainContent cores={intro.cores[0]}>
                <Fade delay={500} cascade damping={0.4} style={{ display: width > 1200 ? '' : 'flex', alignItems: width > 1200 ? '' : 'center', flexDirection: width > 1200 ? '' : 'center' }} triggerOnce={true}>
                    <img src={intro.logo} alt='logo'/>
                    <p>{intro.descricao}.</p>
                    <button onClick={handleScrollToPayment} >{intro.botao}</button>
                </Fade>
            </MainContent>
        </InitialContainer>
    )
}

const InitialContainer = styled.div`
    width: auto;
    height: 103vh;
    background-image: url(${props => `${props.backgroundImage}`}) ;
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: left;
    text-align: left;
    padding: 20vh 0 0 20%;
    @media (max-width: 810px) {
        align-items: flex-end;
        background-position: calc(100% + 20px) right; /* Ajuste o valor 20px conforme necessário */
        padding: 0;
    }
`;

const MainContent = styled.div`
    img{
        width: 42vh;
        height: 24vh;
    }
    h2{
        color:#FFFFFF;
        font-weight:200 ;
        transition: scale 0.3s ease;
        margin: 0;
    }
    p{
        color:#FFFFFF;
        font-weight:500 ;
        margin:20px 0;
        width: 40%;
        transition: scale 0.3s ease;
        font-size: 3vh;
        font-family: "Montserrat", sans-serif !important;
        cursor: pointer;
    }
    button {
    margin: 20px 0;
    color: #FFFFFF;
    background-image: ${props => `${props.cores.backgroundImageBotao}`};
    background-size: 400% 200%;
    animation: textura 3.4s cubic-bezier(0.2, 0.5, 0.9, 0.6) 2s infinite;
    transition: background 1.6s cubic-bezier(0.55, 0.1, 0.47, 0.94);
    font-family: "Montserrat", sans-serif;
    font-size: 19px;
    font-weight: 600;
    fill: #FFFFFF;
    background-color: ${props => `${props.cores.backgroundColorBotao}`};
    border-radius: 8px;
    box-shadow: 0px 0px 21px 0px rgba(0, 0, 0, 0.6);
    padding: 24px;
    width: 350px;
    border: none;
    cursor: pointer;
    transition: scale 0.3s ease;
}
    button:hover {
        scale:1.05;
        background-image: ${props => `${props.cores.backgroundImageBotaoHover}`};
    }
    h1:hover,h2:hover,p:hover{
        scale:1.05;
    }

    @media (max-width: 810px) {
    background-color: rgba(0, 0, 0, 0.4); /* Adiciona um fundo escuro */
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    margin-left: 0%;
    margin-top: 0%;
    height: auto;
    display: flex !important;
    justify-content: center !important;
    flex-direction: column !important;
    align-items: center !important;
    text-align: center !important;
    p{
        width: 80% !important;
        margin-left: 12%;
    }
    }

@keyframes textura {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}
`;
