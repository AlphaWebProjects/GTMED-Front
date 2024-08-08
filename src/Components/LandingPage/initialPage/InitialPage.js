import styled from 'styled-components';
import { Fade } from 'react-awesome-reveal';
import imagem from "../../../assets/images/clinicamedica/inicio.png"
import React, { useEffect, useState } from 'react';


export default function InitialPage({intro, themeColor}) {

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
        <InitialContainer backgroundImage={intro?.backgroundImage}>
            <MainContent cores={themeColor}>
                <Fade delay={500} cascade damping={0.4} style={{ display: width > 1200 ? '' : 'flex'}} triggerOnce={true}>
                    
                    <p>{intro?.descricao}</p>
                    {/* <button onClick={handleScrollToPayment} >{intro?.botao}</button> */}
                </Fade>
            </MainContent>
        </InitialContainer>
    )
}

const InitialContainer = styled.div`
    width: auto;
    height: 110vh;
    background-image: url(${props => `${props.backgroundImage}`}) ;
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    text-align: center;
    padding: 0;
    @media (max-width: 810px) {
        padding: 0;
    }
`;

const MainContent = styled.div`
    background-color: none;
    display: flex;
    
    padding-top: 30vh;
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
        transition: scale 0.3s ease;
        font-size: 20vh;
        font-family: 'Anton', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif   !important;
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

    @media (max-width: 1100px) {
    height: auto;
    display: flex !important;
    flex-direction: column !important;
    margin-top: 25% !important;
    p{
        width: 100% !important;
        font-size: 10vh;
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
