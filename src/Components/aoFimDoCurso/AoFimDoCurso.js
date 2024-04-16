import styled from "styled-components";
import backgroundImage from "../../../src/images/Screenshot_28.png"
import { IoIosMedical } from "react-icons/io";

export default function AoFimDoCurso(){
  return (
    <Container backgroundImage={backgroundImage}>
        <SubContainer>
            <Title>{"AO FINAL DO CURSO VOCÊ SERÁ CAPAZ DE:"}</Title>
            <Option>
                <div><IoIosMedical /></div>
                <p>{"Diagnosticar de distúrbios de simples até duplos e triplos!"}</p>
            </Option>
            <Option>
                <div><IoIosMedical /></div>
                <p>{"Reconhecer facilmente os distúrbios mistos"}</p>
            </Option>
            <Option>
                <div><IoIosMedical /></div>
                <p>{"Identificar o que cada linha da gasometria representa. Cada linha mesmo!"}</p>
            </Option>
            <Option>
                <div><IoIosMedical /></div>
                <p>{"Correlacionar achados na GSA com um raciocínio p2222222ara um diagnóstico precoce"}</p>
            </Option>
            <Option>
                <div><IoIosMedical /></div>
                <p>{"Ter o raciocínio treinado para casos reais através de discussões em GSA de pacientes reais"}</p>
            </Option>
            <Option>
                <div><IoIosMedical /></div>
                <p>{"Ter o raciocínio treinado para casos reais através de discussões em GSA de pacientes reais"}</p>
            </Option>
            <Option>
                <div><IoIosMedical /></div>
                <p>{"Ter o raciocínio treinado para casos reais através de discussões em GSA de pacientes reais"}</p>
            </Option>
            <Option>
                <div><IoIosMedical /></div>
                <p>{"Ter o raciocínio treinado para casos reais através de discussões em GSA de pacientes reais"}</p>
            </Option>
        </SubContainer>
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    padding: 10vh 10vw;
    height: 803px;
    background-image: ${props => `url(${props.backgroundImage})`};
    //background-color: #000000;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
`
const SubContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
`
const Title = styled.h3`
    text-align: center;
    font-family: "Montserrat", Sans-serif;
    font-size: 29px;
    font-weight: 600;
    margin-bottom: 30px;
`
const Option = styled.div`
    font-family: "Montserrat", Sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-bottom: 20px;
    > div {
        width: 50px;
        height: 50px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 40px;
        color: red;
        font-weight: 700;
    }
    > p {
        font-size: 16px;
        font-weight: 400;
        width: calc(35% - 50px);
    }
`