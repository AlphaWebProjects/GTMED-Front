import styled from "styled-components";
import Footer from "../Components/Footer";
import InitialPage from "../Components/LandingPage/initialPage/InitialPage";
import SecondPage from "../Components/LandingPage/secondPage/SecondPage";
import SobreOCurso from "../Components/LandingPage/sobreOCurso/SobreOCurso";
import ParaQuem from "../Components/LandingPage/paraQuem/ParaQuem";
import AoFimDoCurso from "../Components/LandingPage/aoFimDoCurso/AoFimDoCurso";
import Depoimentos from "../Components/LandingPage/Depoimentos/Depoimentos";
import Oferta from "../Components/LandingPage/oferta/Oferta";
import PageQuestions from "../Components/LandingPage/pageQuestions/PageQuestions";
import LastPage from "../Components/LandingPage/lastPage/LastPage";
import { FaWhatsapp } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Beneficios from "../Components/LandingPage/Beneficios/Beneficios";
import { toast } from "react-toastify";

export default function LandingPage({ courseData }) {
  const { courseName } = useParams();
  const decodedCourseName = decodeURIComponent(courseName);
  const [courseDetails, setCourseDetails] = useState(undefined);
  const navigate = useNavigate();

  useEffect(() => {
    const course = courseData[decodedCourseName];

    if (course) {
      console.log("curso: ", course);
      setCourseDetails(course);
      return;
    }

    navigate(`/not-found`);
    
  }, [decodedCourseName]);

  return (
    courseDetails && (
      <Container>
        <InitialPage intro={courseDetails?.intro} />
        <Beneficios aoFimDoCurso={courseDetails?.aoFimDoCurso}/>
        {/* <SecondPage pontuacoes={courseDetails?.pontuacoes} />*/}
        <SobreOCurso sobreOCurso={courseDetails?.sobreOCurso} /> 
        <ParaQuem paraQuem={courseDetails?.paraQuem} />
        <AoFimDoCurso aoFimDoCurso={courseDetails?.aoFimDoCurso} />
        {/* <Depoimentos depoimentos={courseDetails?.depoimentos}/> */}
        <PageQuestions />
        <LastPage />
        {/* <Footer/> por enquanto mantém sem footer*/}
        

        <Oferta oferta={courseDetails?.oferta} />

        <WhatsAppButton
          // href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
          target="_blank"
          // onClick={(e) => e.stopPropagation()}
        >
          <FaWhatsapp size={30} color="white" />
        </WhatsAppButton>

      </Container>
    )
  );
}

const Container = styled.div`
  width: 100%;
  min-height: 50vh;
  margin-top: -21px;
  box-sizing: border-box;
`;

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
