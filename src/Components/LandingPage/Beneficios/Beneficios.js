import styled from "styled-components";
import { IoIosMedical } from "react-icons/io";
import { Fade, Slide } from "react-awesome-reveal";
import usp from '../../../assets/images/iconesBeneficios/usp.png'
import { FaCertificate, FaUniversity } from "react-icons/fa";
import { FaClinicMedical } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { PiCertificateBold } from "react-icons/pi";
import { FaArrowUpWideShort } from "react-icons/fa6";

export default function Beneficios({ aoFimDoCurso }) {
  return (
    <Container backgroundImage={aoFimDoCurso.backgroundImage}>
      <SubContainer>
        <Slide triggerOnce={true}>
          <Title color={aoFimDoCurso.cores.corTopicos}><b>PORQUE</b> devo adquirir este curso?</Title>
        </Slide>
        <Fade
          delay={0.5}
          cascade
          damping={0.3}
          triggerOnce={true}
          style={{ width: "100%" }}
        >
          <RowContainer>
            <Row>
              <Option color={aoFimDoCurso.cores.corTopicos}>
                <div>
                  <FaUniversity size="80px"/>
                  <h1>Da USP para você</h1>
                  <p>Uma plataforma elaborada por <b>especialistas da USP</b> visando o seu aprendizado</p>
                </div>
              </Option>

              <Option color={aoFimDoCurso.cores.corTopicos}>
                <div>
                  <FaClinicMedical size="80px"/>
                  <h1>Casos clínicos <b>reais</b></h1>
                  <p>Aulas voltadas para a <b>imersão</b> em situações médicas</p>
                </div>
              </Option>

              <Option color={aoFimDoCurso.cores.corTopicos}>
                <div>
                  <FaHandshake size="80px"/>
                  <h1>Garantia de <b>7 dias</b></h1>
                  <p>Você poderá realizar o <b>reembolso integral</b> em até <b>7 dias após a compra</b></p>
                </div>
              </Option>
            </Row>

            <Row>
              <Option color={aoFimDoCurso.cores.corTopicos}>
                <div>
                  <FaCheckCircle size="80px"/>
                  <h1><b>1 ano</b> de acesso</h1>
                  <p>Acesso ao <b>curso</b> e <b>demais conteúdos especiais</b> por <b>12 meses</b></p>
                </div>
              </Option>

              <Option color={aoFimDoCurso.cores.corTopicos}>
                <div>
                  <PiCertificateBold size="80px"/>
                  <h1><b>Certificado</b></h1>
                  <p>Emissão do <b>certificado exclusivo</b> após a finalização do curso</p>
                </div>
              </Option>

              <Option color={aoFimDoCurso.cores.corTopicos}>
                <div>
                  <FaArrowUpWideShort size="80px"/>
                  <h1><b>Aulas direcionadas</b></h1>
                  <p>Conteúdo focado para o que você <b>realmente</b> precisa saber</p>
                </div>
              </Option>
            </Row>
          </RowContainer>
        </Fade>
      </SubContainer>
    </Container>
  );
}

const Container = styled.div`
  user-select: none;
  width: 100%;
  padding: 30vh 0;
  height: 50.1875rem;
  //background-image: url(${props => props.backgroundImage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1500px) {
    height: auto;
    padding: 5vh 4vw;
  }
`;

const SubContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 5vw;
  @media (max-width: 1200px) {
    width: 100%;
  }
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 4vh;
  @media (max-width: 1500px) {
    justify-content: center;
    margin-bottom: 0;
    width: 90%;
  }
`;

const Title = styled.h3`
  text-align: center;
  font-family: "Montserrat", Sans-serif;
  font-size: 3rem;
  font-weight: 600;
  margin-bottom: 2rem;
  background: linear-gradient(45deg, ${(props) => props.color}, #ffffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: ${(props) => props.color};
  margin-bottom: 5vh;
  @media (max-width: 1200px) {
    font-size: 2.2em;
  }
`;

const Option = styled.div`
  transition: all ease 0.2s;
  font-family: "Montserrat", Sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(33% - 20px);
  margin: 10px;
  @media (max-width: 1200px) {
    width: calc(50% - 20px);
  }
  @media (max-width: 768px) {
    width: calc(100% - 20px);
  }
  > div {
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    font-size: 2.5rem;
    flex-direction: column;
    color: ${(props) => props.color};
    border: 5px solid ${(props) => props.color};
    padding: 2vh 0;
    h1 {
      font-size: 25px !important;
      margin: 2vh 0;
      background: linear-gradient(45deg, ${(props) => props.color}, #ffffff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      @media (max-width: 1200px) {
        font-size: 25px !important;
      }
    }
    p {
      font-size: 2vh;
      font-weight: 500;
      width: 90%;
      text-align: center;
      background: linear-gradient(45deg, ${(props) => props.color}, #ffffff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      @media (max-width: 1200px) {
        font-weight: 600;
        width: calc(100% - (3.75rem * 0.75));
        font-size: 18px !important;
        width: 93%;
      }
    }
    img {
      color: ${(props) => props.color};
      width: 5rem !important;
      height: 5rem !important;
    }
    @media (max-width: 1500px) {
      margin-bottom: 4vh;
    }
    @media (max-width: 1200px) {
      width: 500px;
      height: 300px;
      padding: 5vh 0;
    }
  }
  &:hover {
    background: linear-gradient(
      274deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.3) 40%,
      rgba(0, 0, 0, 0.3) 60%,
      rgba(0, 0, 0, 0) 100%
    );
    transform: translateX(10px) scale(1.025);
  }
`;
