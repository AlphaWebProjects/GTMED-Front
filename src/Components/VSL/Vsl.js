import styled from "styled-components";
import backgroundImage from "../../../src/images/vsl.png"
import StyledButton from "../../common/form/Button";

export default function Vsl(){
    return (
        <Container backgroundImage={backgroundImage}>
            <Title>{"APRENDA SOBRE "}<span>{"A PROFISSÃO"}</span>{" DE UMA FORMA UNICA"}</Title>
            <StyledIframe 
                width={1920*.5} 
                height={1080*.5} 
                src="https://www.youtube-nocookie.com/embed/fO5dW2R2_a0?controls=0&rel=0&" 
                title="PABLO MARÇAL VAI COLOCAR O SHAPE ? AVALIAMOS O FÍSICO PARA O NOVO PROJETO - CÓDIGO DO SHAPE 60 DIAS" 
                frameborder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen
            ></StyledIframe>
            <StyledButton width={"40%"} height={"80px"} margintop={"40px !important"} fontsize={"28px !important"}>{"QUERO DOMINAR GASOMETRIA"}</StyledButton>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    padding: 10vh 10vw;
    height: 100vh;
    //background-color: #000000;
    color: #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: ${props => `url(${props.backgroundImage})`};
`
const StyledIframe = styled.iframe`
    border: 3px solid #FF0000;
    border-radius: 10px;
`
const Title = styled.h3`
    text-align: center;
    font-family: "Montserrat", Sans-serif;
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 30px;
    width: 50%;
    line-height: 50px;
    span {
        background-color: #FF0000;
        padding: 0 .5vw;
    }
`