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
import { FaWhatsapp } from 'react-icons/fa';

export default function LandingPage({script}) {

    return (
        <Container>
            <InitialPage intro={script.intro} />
            <SecondPage pontuacoes={script.pontuacoes} />
            <SobreOCurso sobreOCurso={script.sobreOCurso}/>
            <ParaQuem paraQuem={script.paraQuem}/>
            <AoFimDoCurso aoFimDoCurso={script.aoFimDoCurso}/>
            {/* <Depoimentos depoimentos={script.depoimentos}/> */}
            <Oferta oferta={script.oferta}/>
            <PageQuestions />
            <LastPage />
            {/* <Footer/> por enquanto mantém sem footer*/}
            <WhatsAppButton
            // href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank"
            // onClick={(e) => e.stopPropagation()}
            >
                <FaWhatsapp size={30} color="white" />
            </WhatsAppButton>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    min-height: 50vh;
    margin-top: -21px;
    box-sizing: border-box;
`

const WhatsAppButton = styled.a`
  position: fixed;
  bottom: 20px;
  right: 7vw;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: green;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out; 
  z-index: 100000000;

  &:hover {
    box-shadow: 0 3px 6px rgba(0, 128, 0, 0.3);
    transform: scale(1.1);
  }


  &:active {
    box-shadow: 0 1px 3px rgba(0, 128, 0, 0.3);
    transform: scale(0.9);
  }

  svg {
    transition: all 0.2s ease-in-out; 
  }


  &:hover svg {
    transform: scale(1.1);
  }


  &:active svg {
    transform: scale(0.9);
  }
`;