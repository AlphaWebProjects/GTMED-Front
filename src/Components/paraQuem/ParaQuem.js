import styled from "styled-components";
import backgroundImage from "../../../src/images/Screenshot_27.png"

export default function ParaQuem(){
  return (
    <Container backgroundImage={backgroundImage}>
        <LeftSide></LeftSide>
        <RightSide>
            <Title>{"PARA QUEM É O"}</Title>
            <SubTitle>{"Gasometria Descomplicada?"}</SubTitle>
            <Option>
                <div>{"1"}</div>
                <p>{"Para quem fica totalmente perdido ao olhar para uma gasometria e não sabe, muitas vezes, nem por onde iniciar o diagnóstico;"}</p>
            </Option>
            <Option>
                <div>{"1"}</div>
                <p>{"Para quem fica totalmente perdido ao olhar para uma gasometria e não sabe, muitas vezes, nem por onde iniciar o diagnóstico;"}</p>
            </Option>
            <Option>
                <div>{"1"}</div>
                <p>{"Para quem fica totalmente perdido ao olhar para uma gasometria e não sabe, muitas vezes, nem por onde iniciar o diagnóstico;"}</p>
            </Option>
            <Option>
                <div>{"1"}</div>
                <p>{"Para quem fica totalmente perdido ao olhar para uma gasometria e não sabe, muitas vezes, nem por onde iniciar o diagnóstico;"}</p>
            </Option>
        </RightSide>
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    padding: 10vh 10vw;
    height: 722px;
    background-image: ${props => `url(${props.backgroundImage})`};
    //background-color: #000000;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
`
const LeftSide = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
const RightSide = styled.div`
    width: 50%;
    height: 100%;
`
const Title = styled.h3`
    color: #FFFFFF;
    font-family: "Montserrat", Sans-serif;
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 7.8px;
    margin: 20px 0;
`
const SubTitle = styled.h3`
    color: #FFFFFF;
    font-family: "Rajdhani", Sans-serif;
    font-size: 40px;
    font-weight: 700;
    margin: 30px 0;
`
const Option = styled.div`
    font-family: "Montserrat", Sans-serif;
    display: flex;
    align-items: center;
    justify-content: left;
    width: 100%;
    column-gap: 30px;
    margin-bottom: 30px;
    > div {
        width: 60px;
        height: 60px;
        background-color: red;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 32px;
        font-weight: 700;
    }
    > p {
        font-size: 18px;
        font-weight: 400;
        width: calc(85% - 60px);
    }
`