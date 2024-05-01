import styled from 'styled-components';
import { Fade } from 'react-awesome-reveal';
import imagem from "../../../assets/images/clinicamedica/inicio.png"


export default function InitialPage({intro}) {
    
    return (
        <InitialContainer backgroundImage={intro.backgroundImage}>
            <MainContent cores={intro.cores[0]}>
            <Fade delay={0.5} cascade damping={0.3} style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }} triggerOnce={true}>
                <h1>{intro.titulo}</h1>
                <h2>{intro.subtitulo}</h2>
                <h3>{intro.descricao}</h3>
                <button>{intro.botao}</button>
                </Fade>
            </MainContent>
        </InitialContainer>
    )
}

const InitialContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(${props => `${props.backgroundImage}`}) ;
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: left;
    @media (max-width: 768px) {
        align-items: flex-end;
        background-position: calc(100% + 490px) center; /* Ajuste o valor 20px conforme necessário */
    }
`;

const MainContent = styled.div`
    height: 38vh;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 40px; 
    border-radius: 35px;
    margin-left: 8%;
    margin-top: 12%;
    h1{
        color:${props => `${props.cores.corTitulo}`};
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        letter-spacing: 5px;
        font-size: 12vh;
        transition: scale 0.3s ease;
    }
    h2{
        color:#FFFFFF;
        font-weight:200 ;
        transition: scale 0.3s ease;
        
    }
    h3{
        color:#FFFFFF;
        font-weight:500 ;
        margin:20px 0;
        width: 70%;
        transition: scale 0.3s ease;
        font-size: 3vh;
        text-align: center;
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
    box-shadow: 0px 0px 21px 0px rgba(255, 29.999999999999893, 0, 0.6);
    padding: 24px;
    width: 350px;
    cursor: pointer;
    transition: scale 0.3s ease;
}
    button:hover {
        scale:1.05;
        background-image: ${props => `${props.cores.backgroundImageBotaoHover}`};
    }
    h1:hover,h2:hover,h3:hover{
        scale:1.05;
    }

    @media (max-width: 768px) {
    background-color: rgba(0, 0, 0, 0.4); /* Adiciona um fundo escuro */
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    margin-left: 0%;
    margin-top: 0%;
    height: auto;
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
