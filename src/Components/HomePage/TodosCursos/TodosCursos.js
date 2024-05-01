import React from 'react';
import styled from 'styled-components';
import { Fade, Slide } from 'react-awesome-reveal';
import allScripts from '../../../allScripts.json'
import background from '../../../assets/images/backgroundTelaCursos.png'
import cardClinica from '../../../assets/images/clinicamedica/cardClinica.png'
import cardOftalmo from '../../../assets/images/oftalmo/cardOftalmo.png'
import cardOrtopedia from '../../../assets/images/ortopedia/cardOrtopedia.png'
import cardPediatria from "../../../assets/images/pediatria/cardPediatria.png"
import cardRadiologia from '../../../assets/images/radiologia/cardRadiologia.png'


export default function TodosCursos({setScript}) {
    const cursos = [
        { nome: '', area: allScripts.Curso.Clinica, background: cardClinica },
        { nome: '', area: allScripts.Curso.Clinica, background: cardOftalmo },
        { nome: '', area: allScripts.Curso.Clinica, background: cardOrtopedia },
        { nome: '', area: allScripts.Curso.Clinica, background: cardPediatria },
        { nome: '', area: allScripts.Curso.Clinica, background: cardRadiologia },
        { nome: '', area: allScripts.Curso.Clinica, background: cardClinica },
        { nome: '', area: allScripts.Curso.Clinica, background: cardClinica },
        { nome: '', area: allScripts.Curso.Clinica, background: cardClinica },
        { nome: '', area: allScripts.Curso.Clinica, background: cardClinica },
        { nome: '', area: allScripts.Curso.Clinica, background: cardClinica },
        { nome: '', area: allScripts.Curso.Clinica, background: cardClinica},
        { nome: '', area: allScripts.Curso.Clinica, background: cardClinica },
        { nome: '', area: allScripts.Curso.Clinica, background: cardClinica },
        { nome: '', area: allScripts.Curso.Clinica, background: cardClinica },
        { nome: '', area: allScripts.Curso.Clinica, background: cardClinica },
    ];

    return (
        <Container backgroundImage={background}>  
            
            <Cursos>

                <Fade delay={0.3} cascade damping={0.3} triggerOnce={true} style={{width:'100%'}}>
                {cursos.map((curso, index) => (
                    <Div onClick={() => setScript(curso.area)} key={index} background={curso.background}>{curso.nome}</Div>
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
grid-template-columns: repeat(auto-fit, minmax(148px, 1fr));
grid-gap: 10px;
justify-content: center;
padding: 10vh 0;
`;

const Div = styled.div`
    background-image: ${props => `url(${props.background})`};
    background-position: center;
    background-size: cover;     
    background-repeat: no-repeat;
    height: 32vh;
    width: 19vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    border-radius: 12px;
    transition: scale 0.5s ease;
    cursor: pointer;
    @media (max-width: 1200px) {
        height: 150px;
        width: 120px;
    }
    &:hover {
        scale: 1.05;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    }
`;
