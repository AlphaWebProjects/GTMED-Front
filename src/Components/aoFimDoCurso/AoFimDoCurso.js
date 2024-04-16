import styled from "styled-components";
import backgroundImage from "../../../src/images/Screenshot_28.png"
import { IoIosMedical } from "react-icons/io";

export default function AoFimDoCurso(){

    const body = {
        backgroundimage: backgroundImage,
        title: "AO FINAL DO CURSO VOCÊ SERÁ CAPAZ DE:",
        topics: [
            {
                details: "Diagnosticar de distúrbios de simples até duplos e triplos!"
            },
            {
                details: "Reconhecer facilmente os distúrbios mistos;"
            },
            {
                details: "Identificar o que cada linha da gasometria representa. Cada linha mesmo!"
            },
            {
                details: "Correlacionar achados na GSA com um raciocínio p2222222ara um diagnóstico precoce;"
            },
            {
                details: "Ter o raciocínio treinado para casos reais através de discussões em GSA de pacientes reais"
            },
            {
                details: "Reconhecer facilmente os distúrbios mistos;"
            },
            {
                details: "Identificar o que cada linha da gasometria representa. Cada linha mesmo!"
            },
            {
                details: "Correlacionar achados na GSA com um raciocínio p2222222ara um diagnóstico precoce;"
            },
        ]
    }

    return (
        <Container backgroundImage={body?.backgroundimage}>
            <SubContainer>
            <Title>{body?.title}</Title>
            {body?.topics?.map((topic, index) => (
                <Option key={index}>
                    <div><IoIosMedical /></div>
                    <p>{topic?.details}</p>
                </Option>
            ))}
            </SubContainer>
        </Container>
    )
    }

const Container = styled.div`
    user-select: none;
    width: 100%;
    padding: 10vh 10vw;
    height: 50.1875rem;
    background-image: ${props => `url(${props.backgroundImage})`};
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const SubContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.h3`
    text-align: center;
    font-family: "Montserrat", Sans-serif;
    font-size: 1.8rem;
    font-weight: 600;
    margin-bottom: 2rem;
`;

const Option = styled.div`
    transition: all ease .2s;
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
        color: red;
    }
    > p {
        font-size: 1rem;
        font-weight: 400;
        padding-left: 1rem;
        width: 70%;
    }
    &:hover {
        background: linear-gradient(274deg, rgba(0,0,0,0) 0%, rgba(0,0,0,.3) 40%, rgba(0,0,0,.3) 60%, rgba(0,0,0,0) 100%);
        transform: translateX(10px) scale(1.025);
    }
`;