import styled from "styled-components";
import backgroundImage from "../../../assets/images/Screenshot_28.png";
import { IoIosMedical } from "react-icons/io";
import { Fade, Slide } from "react-awesome-reveal";
export default function AoFimDoCurso({ aoFimDoCurso }) {
  console.log(aoFimDoCurso);

  const body = {
    backgroundimage: backgroundImage,
    backgroundimagemobile: backgroundImage,
    title: "AO FINAL DO CURSO VOCÊ SERÁ CAPAZ DE:",
    topics: [
      {
        details: "Diagnosticar de distúrbios de simples até duplos e triplos!",
      },
      {
        details: "Reconhecer facilmente os distúrbios mistos;",
      },
      {
        details:  "Identificar o que cada linha da gasometria representa. Cada linha mesmo!",
      },
      {
        details:
          "Correlacionar achados na GSA com um raciocínio p2222222ara um diagnóstico precoce;",
      },
      {
        details:
          "Ter o raciocínio treinado para casos reais através de discussões em GSA de pacientes reais",
      },
      {
        details: "Reconhecer facilmente os distúrbios mistos;",
      },
      {
        details:
          "Identificar o que cada linha da gasometria representa. Cada linha mesmo!",
      },
      {
        details:
          "Correlacionar achados na GSA com um raciocínio p2222222ara um diagnóstico precoce;",
      },
    ],
  };

  return (
    <Container backgroundImage={aoFimDoCurso.backgroundImage}>
      <SubContainer>
        <Slide triggerOnce={true}>
          <Title>COM O CURSO VOCÊ SERÁ CAPAZ DE:</Title>
        </Slide>
        <Fade
          delay={0.5}
          cascade
          damping={0.3}
          triggerOnce={true}
          style={{ width: "100%" }}
        >
          {aoFimDoCurso.topicos.map((topic, index) => (
            <Option color={aoFimDoCurso.cores.corTopicos} key={index}>
              <div>
                <IoIosMedical />
              </div>
              <p>{topic}</p>
            </Option>
          ))}
        </Fade>
      </SubContainer>
    </Container>
  );
}

const Container = styled.div`
  user-select: none;
  width: 100%;
  padding: 10vh 10vw;
  height: 50.1875rem;
  background-image: ${(props) => `url(${props.backgroundImage})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1200px) {
    height: auto;
    padding: 5vh 4vw;
    background-position: top;
  }
`;

const SubContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 1200px) {
    width: 100%;
  }
`;

const Title = styled.h3`
  text-align: center;
  font-family: "Montserrat", Sans-serif;
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 2rem;
`;

const Option = styled.div`
  transition: all ease 0.2s;
  font-family: "Montserrat", Sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 1.25rem;
  > div {
    width: 3.125rem;
    height: 3.125rem;
    border-radius: 0.625rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.5rem;
    color: ${(props) => props.color};
    @media (max-width: 1200px) {
      width: calc(3.75rem * 0.75);
      height: calc(3.75rem * 0.75);
    }
  }
  > p {
    font-size: 1rem;
    font-weight: 400;
    padding-left: 1rem;
    width: 70%;
    @media (max-width: 1200px) {
      font-weight: 600;
      width: calc(100% - (3.75rem * 0.75));
      font-size: calc(1.125rem * 0.75);
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
