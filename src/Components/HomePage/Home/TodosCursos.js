import React from 'react';
import styled from 'styled-components';
import { Fade, Slide } from 'react-awesome-reveal';
export default function TodosCursos() {
    const cursos = [
        { nome: 'Gasometria', background: 'blue' },
        { nome: 'Eletrocardiograma', background: 'blue' },
        { nome: 'Radiologia', background: 'blue' },
        { nome: 'Anatomia', background: 'blue' },
        { nome: 'Farmacologia', background: 'blue' },
        { nome: 'Patologia', background: 'red' },
        { nome: 'Imunologia', background: 'red' },
        { nome: 'Neurologia', background: 'red' },
        { nome: 'Ginecologia', background: 'red' },
        { nome: 'Cardiologia', background: 'red' },
        { nome: 'Oftalmologia', background: 'green' },
        { nome: 'Pediatria', background: 'green' },
        { nome: 'Endocrinologia', background: 'green' },
        { nome: 'Dermatologia', background: 'green' },
        { nome: 'Ortopedia', background: 'green' },
    ];

    return (
        <ContainerCursos>         
            <Fade delay={0.3} cascade damping={0.3} triggerOnce={true} style={{width:'100%'}}>
            {cursos.map((curso, index) => (
                <Div key={index} background={curso.background}>{curso.nome}</Div>
            ))}
            </Fade>
        </ContainerCursos>
    );
}

const ContainerCursos = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 10px;
    height: 120vh;
    padding: 150px;
    padding-left: 250px;
    @media (max-width: 1200px) {
        grid-template-columns: repeat(3, 1fr); /* Altera para 2 colunas em dispositivos menores */
        padding-left: 15px;
        height: 100vh;
        padding-top: 40px;
    }
`;

const Div = styled.div`
    background-color: ${props => props.background};
    height: 250px;
    width: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    border-radius: 20px;
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
