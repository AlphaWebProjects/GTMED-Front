import styled from 'styled-components';
import Tutor2 from '../../images/Tutor2.png';
import tutor1 from '../../images/tutor1.png';
export default function LastPage() {
    const isMobile = window.innerWidth <= 768;
    return (
        <LastPageContainer>
            <Foto style={{ backgroundImage: `url(${tutor1})` }}></Foto>
            <Texto>
                <h1>Danielle Bastos</h1>
                <h3>Médica pela Universidade Federal do Estado do Rio de Janeiro – UNIRIO, e Anestesiologista pelo Hospital Federal dos Servidores do Estado do Rio de Janeiro – TEA/SBA.</h3>
                <h3>Idealizadora e Co-fundadora do Projeto Intub(ação). Co-autora do livro “Manual Avançado de Via Aérea” e professora de mais de 1000 alunos.</h3>
            </Texto>
            <Foto2 style={{ backgroundImage: `url(${Tutor2})` }}></Foto2>
            <Texto>
            <h1>Samantha Ceccon</h1>
            <h3>Médica pela Escola de Medicina Souza Marques- FTESM e Anestesiologista pelo Hospital Federal dos Servidores do Estado do Rio de Janeiro- TEA/SBA.</h3>
            <h3>Idealizadora e Co-fundadora do Projeto Intub(ação). Co-autora do livro “Manual Avançado de Via Aérea” e professora de mais de 1000 alunos.</h3>
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
    box-shadow: rgba(255, 0, 0, 0.35) 0px -50px 36px -28px inset;
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        padding:20px 0;
        height: 200vh;
    }
`;

const Foto = styled.div`
    background-color: red;
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
    background-color: red;
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
