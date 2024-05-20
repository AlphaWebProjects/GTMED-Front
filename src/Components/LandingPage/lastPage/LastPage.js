import styled from 'styled-components';
import tutor1 from '../../../assets/images/clinicamedica/tutor1Clinica.png'
import tutor2 from '../../../assets/images/clinicamedica/tutor2Clinica.png';


export default function LastPage() {

    const isMobile = window.innerWidth <= 768;

    return (
        <LastPageContainer>
            <Foto style={{ backgroundImage: `url(${tutor1})` }}></Foto>
            <Texto>
                <h1>Pedro Santos</h1>
                <h3>Bacharel em Biomedicina pela Universidade Federal de São Paulo - UNIFESP, e Especialista em Neurociência Clínica pela Universidade de Brasília - UnB.</h3>
                <h3>Fundador e Coordenador do Programa NeuroCura. Co-autor do livro "Neurociência Aplicada: Avanços e Perspectivas" e instrutor de mais de 800 estudantes e profissionais da saúde.</h3>
            </Texto>
            <Foto2 style={{ backgroundImage: `url(${tutor2})` }}></Foto2>
            <Texto>
            <h1>José de Alcântra</h1>
            <h3>Graduado em Medicina pela Universidade de São Paulo - USP, e Especialista em Clínica Médica pelo Hospital das Clínicas da Faculdade de Medicina de São Paulo - HCFMUSP.</h3>
            <h3>Co-fundador e Diretor Médico da Clínica Médica Integrada Saúde Total. Autor do livro "Práticas Atuais em Clínica Médica" e instrutor de mais de 700 profissionais de saúde.</h3>
            </Texto>
        </LastPageContainer>
    )
}

const LastPageContainer = styled.div`
    background-color: black;
    height: 100vh;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    column-gap: 0;
    row-gap: 10px;
    justify-content: space-evenly;
    padding: 20px 27%;
    align-items: center;
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        padding:20px 0;
        height: 200vh;
    }
`;

const Foto = styled.div`
    background-position: center;
    background-size: cover;
    width: 90%;
    height: 80%;
    justify-self: center;
    align-self: center;
    background-size: cover;
    background-position: center;
    transition: scale 0.3s ease;
    &:hover {
        scale:1.05
    }
`;
const Foto2 = styled.div`
    width: 90%;
    height: 80%;
    justify-self: center;
    align-self: center;
    background-size: cover;
    background-position: center;
    transition: scale 0.3s ease;
    &:hover {
        scale:1.05
    }
`;

const Texto = styled.div`
    color: white;
    width: 90%;
    height: 80%;
    justify-self: center;
    align-self: center;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    transition: scale 0.3s ease;
    &:hover {
        scale:1.05
    }
`;
