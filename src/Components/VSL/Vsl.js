import styled from "styled-components";
import backgroundImage from "../../../src/images/vsl.png"
import StyledButton from "../../common/form/Button";

export default function Vsl(){
    const body = {
        backgroundimage: backgroundImage,
        backgroundimagemobile: backgroundImage,
        title1: "APRENDA SOBRE ",
        titlehighlight: "A PROFISSÃO",
        title2: " DE UMA FORMA UNICA",
        videourl: "https://www.youtube-nocookie.com/embed/fO5dW2R2_a0?controls=0&rel=0&",
        buttontext: "QUERO DOMINAR GASOMETRIA",
        buttoncolor: "#E42323",
        buttonhovercolor: "#C73B3B",
        color: "#FF0000"
    }
    return (
        <Container backgroundImage={body?.backgroundimage} backgroundImageMobile={body?.backgroundimagemobile}>
            <Title>{body?.title1}<span>{body?.titlehighlight}</span>{body?.title2}</Title>
            <StyledIframe 
                color={body?.color}
                width="960"
                height="540"
                src={body?.videourl}
                frameborder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowFullScreen
            />
            <StyledButton 
                width={"40%"} 
                widthmobile={"80%"} 
                height={"80px"} 
                heightmobile={"80px"} 
                margintop={"40px !important"} 
                fontsize={"28px !important"}
                fontsizemobile={"20px !important"}
                background={`${body?.buttoncolor} !important`}
                backgroundhover={`${body?.buttonhovercolor} !important`}
            >
                {body?.buttontext}
            </StyledButton>
        </Container>
    )
}

const Container = styled.div`
    user-select: none;
    width: 100%;
    padding: 10vh 10vw;
    height: 100vh;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url(${props => props.backgroundImage});
    @media (max-width: 1200px) {
        height: auto;
        padding: 5vh 4vw;
        background-image: ${props => `url(${props.backgroundImageMobile})`};
    }
`;

const StyledIframe = styled.iframe`
    border: 3px solid;
    border-color: ${props => props.color};
    border-radius: 10px;
    @media (max-width: 1200px) {
        width: 90vw !important;
        height: 50.6vw !important;
    }
`;

const Title = styled.h3`
    text-align: center;
    font-family: "Montserrat", Sans-serif;
    font-size: 2.25rem; // Conversão para rem
    font-weight: 700;
    margin-bottom: 2rem; // Espaçamento consistente usando rem
    width: 50%;
    line-height: 3.125rem; // Uso de rem para line-height
    span {
        background-color: #FF0000;
        padding: 0 0.5vw;
    }
    @media (max-width: 1200px) {
        width: 100%;
        font-size: 1.8rem;
    }
`;