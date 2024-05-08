import React from 'react';
import styled from 'styled-components';
import { Fade, Slide } from 'react-awesome-reveal';
import scripts from '../../../scripts';
import { BrowserRouter as Router, Route, Link, useNavigate } from 'react-router-dom';
import background from '../../../assets/images/backgroundTelaCursos.png'
import cardClinica from '../../../assets/images/clinicamedica/cardClinica.png'
import cardOftalmo from '../../../assets/images/oftalmo/cardOftalmo.png'
import cardOrtopedia from '../../../assets/images/ortopedia/cardOrtopedia.png'
import cardPediatria from "../../../assets/images/pediatria/cardPediatria.png"
import cardRadiologia from '../../../assets/images/radiologia/cardRadiologia.png'
import cardAnestesia from "../../../assets/images/anestesia/cardAnestesia.png"
import cardEmergencia1 from '../../../assets/images/emergencia/cardEmergencia1.png'
import cardEmergencia2 from '../../../assets/images/emergencia/cardEmergencia2.png'
import cardDermato from '../../../assets/images/dermato/cardDermato.png'


export default function TodosCursos({setScript}) {

    const navigate = useNavigate();

    const cursos = [
        { nome: '', area: scripts.Curso.Clinica, background: cardClinica },
        { nome: '', area: scripts.Curso.Clinica, background: cardOftalmo },
        { nome: '', area: scripts.Curso.Clinica, background: cardOrtopedia },
        { nome: '', area: scripts.Curso.Clinica, background: cardPediatria },
        { nome: '', area: scripts.Curso.Clinica, background: cardRadiologia },
        { nome: '', area: scripts.Curso.Clinica, background: cardAnestesia },
        { nome: '', area: scripts.Curso.Clinica, background: cardEmergencia1 },
        { nome: '', area: scripts.Curso.Clinica, background: cardEmergencia2 },
        { nome: '', area: scripts.Curso.Clinica, background: cardDermato },
        { nome: '', area: scripts.Curso.Clinica, background: cardClinica },
        { nome: '', area: scripts.Curso.Clinica, background: cardClinica},
        { nome: '', area: scripts.Curso.Clinica, background: cardClinica },
        { nome: '', area: scripts.Curso.Clinica, background: cardClinica },
        { nome: '', area: scripts.Curso.Clinica, background: cardClinica },
    ];

    function setPage(curso){
        document.documentElement.scrollTop = 0;
        setScript(curso);
        navigate('/landing')
    }

    return (
        <Container backgroundImage={background}>  
            
            <Cursos>

                <Fade delay={0.3} cascade damping={0.3} triggerOnce={true} style={{width:'100%'}}>
                {cursos.map((curso, index) => (
                    <Div onClick={() => setPage(curso.area)} key={index} background={curso.background}>{curso.nome}</Div>
                ))}
                </Fade>

            </Cursos>

        </Container>
    );
}

const Container = styled.div`
width: 100%;
height: auto;
display: flex;
align-items: center;
justify-content: center;
background-image: ${props => `url(${props.backgroundImage})`};
background-position: center;
background-size: cover;     
background-repeat: no-repeat;
`;

const Cursos = styled.div`
width: 50%;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
grid-gap: 10px;
justify-content: space-between;
padding: 10vh 0;
@media (max-width: 1200px) {
    padding: 2.5vh 0;
    width: 90%;
    align-items: center !important;
    justify-content: center !important;
    text-align: center !important;
    grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
    }
    @media (max-width: 700px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    }
`;

const Div = styled.div`
    background-image: ${props => `url(${props.background})`};
    background-position: center;
    background-size: cover;     
    background-repeat: no-repeat;
    height: 32vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    border-radius: 12px;
    transition: scale 0.5s ease;
    cursor: pointer;
    @media (max-width: 1200px) {
        height: 38vh;
        min-width: 18vh !important;
    }
    &:hover {
        scale: 1.05;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    }
`;
