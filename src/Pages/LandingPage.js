import styled from 'styled-components';
import Footer from '../Components/Footer';
import InitialPage from '../Components/LandingPage/initialPage/InitialPage';
import SecondPage from '../Components/LandingPage/secondPage/SecondPage';
import SobreOCurso from '../Components/LandingPage/sobreOCurso/SobreOCurso';
import ParaQuem from '../Components/LandingPage/paraQuem/ParaQuem';
import AoFimDoCurso from '../Components/LandingPage/aoFimDoCurso/AoFimDoCurso';
import Depoimentos from '../Components/LandingPage/Depoimentos/Depoimentos';
import Oferta from '../Components/LandingPage/oferta/Oferta';
import PageQuestions from '../Components/LandingPage/pageQuestions/PageQuestions';
import LastPage from '../Components/LandingPage/lastPage/LastPage';

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