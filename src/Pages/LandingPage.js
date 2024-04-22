import styled from 'styled-components';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import InitialPage from '../Components/initialPage/InitialPage';
import SecondPage from '../Components/secondPage/SecondPage';
import SobreOCurso from '../Components/sobreOCurso/SobreOCurso';
import ParaQuem from '../Components/paraQuem/ParaQuem';
import AoFimDoCurso from '../Components/aoFimDoCurso/AoFimDoCurso';
import Depoimentos from '../Components/Depoimentos/Depoimentos';
import Oferta from '../Components/oferta/Oferta';
import PageQuestions from '../Components/pageQuestions/PageQuestions';
import LastPage from '../Components/lastPage/LastPage';



export default function LandingPage() {
    return (
        <Container>
            <InitialPage />
            <SecondPage />
            <SobreOCurso />
            <ParaQuem />
            <AoFimDoCurso />
            <Depoimentos />
            <Oferta />
            <PageQuestions />
            <LastPage />
            <Footer/>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    min-height: 50vh;
    margin-top: -21px;
    box-sizing: border-box;
`