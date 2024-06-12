import styled from 'styled-components';
import tutor1 from '../../../assets/images/clinicamedica/tutor1Clinica.png';

export default function LastPage() {
    return (
        <LastPageContainer>
            <Foto style={{ backgroundImage: `url(${tutor1})` }}></Foto>
            <Texto>
                <Nome>Pedro Santos</Nome>
                <Cargo>Professor</Cargo>
                <Descricao>
                    Bacharel em Biomedicina pela Universidade Federal de São Paulo - UNIFESP, e Especialista em Neurociência Clínica pela Universidade de Brasília - UnB.
                </Descricao>
                <Descricao>
                    Fundador e Coordenador do Programa NeuroCura. Co-autor do livro "Neurociência Aplicada: Avanços e Perspectivas" e instrutor de mais de 800 estudantes e profissionais da saúde.
                </Descricao>
            </Texto>
        </LastPageContainer>
    );
}

const LastPageContainer = styled.div`
    background-color: #000;
    height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 20px;
    padding: 20px 10vw;
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        height: auto;
        padding: 20px 5%;
    }
`;

const Foto = styled.div`
    background-position: center;
    background-size: cover;
    width: 25%;
    height: 35vh;
    border-radius: 10px;
    transition: transform 0.3s ease;
    &:hover {
        transform: scale(1.05);
    }
    @media (max-width: 768px) {
        height: 20vh;
        margin-bottom: 20px;
    }
`;

const Texto = styled.div`
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    border-radius: 10px;
    transition: transform 0.3s ease;
    max-width: 40%;
    &:hover {
        transform: scale(1.05);
    }
`;

const Nome = styled.h1`
    font-size: 1.5rem;
    margin-bottom: .3rem;
    @media (max-width: 768px) {
        font-size: 1.25rem;
    }
`;

const Cargo = styled.span`
    font-size: 1.1rem;
    margin-bottom: 1.1rem;
    border-left: 5px solid #00C3FF54;
    padding-left: 8px;
    color: #B2B2B2;
    background-color: #13131351;
    @media (max-width: 768px) {
        font-size: 1.25rem;
    }
`;

const Descricao = styled.h3`
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
    @media (max-width: 768px) {
        font-size: 0.75rem;
    }
`;
