import styled, { keyframes } from "styled-components";
import backgroundImage from "../../../src/images/Screenshot_27.png"
import backgroundImageMobile from "../../../src/images/Screenshot_28.png"
import { Fade, Slide } from 'react-awesome-reveal';
export default function ParaQuem(){

    const body = {
        backgroundimage: backgroundImage,
        backgroundimagemobile: backgroundImageMobile,
        title: "PARA QUEM É O",
        subtitle: "Gasometria Descomplicada?",
        topics: [
            {
                details: "Para quem fica totalmente perdido ao olhar para uma gasometria e não sabe, muitas vezes, nem por onde iniciar o diagnóstico;"
            },
            {
                details: "Para quem fica totalmente perdido ao olhar para uma gasometria e não sabe, muitas vezes, nem por onde iniciar o diagnóstico;"
            },
            {
                details: "Para quem fica totalmente perdido ao olhar para uma gasometria e não sabe, muitas vezes, nem por onde iniciar o diagnóstico;"
            },
            {
                details: "Para quem fica totalmente perdido ao olhar para uma gasometria e não sabe, muitas vezes, nem por onde iniciar o diagnóstico;"
            },
        ]
    }

    return (
        <Container backgroundImage={body?.backgroundimage} backgroundImageMobile={body?.backgroundimagemobile}>
            <LeftSide></LeftSide>
            <RightSide>
                <Title>{body?.title}</Title>
                <SubTitle>{body?.subtitle}</SubTitle>
                <Fade delay={0.5} cascade damping={0.3} triggerOnce={true}>
                    {body?.topics?.map((topic, index) => (
                    <Option key={index}>
                        <div>{index + 1}</div>
                        <p>{topic?.details}</p>
                    </Option>
                ))}
                </Fade>
            </RightSide>
        </Container>
    )
}

const slideInFromRight = keyframes`
  0% {
    transform: translateX(100px);
    opacity: 0;
  }
  25% {
    opacity: 0.1;
  }
  75% {
    opacity: 0.5;
  }
  100% {
    transform: translateX(0);
    opacity: 2;
  }
`;

const Container = styled.div`
    user-select: none;
    width: 100%;
    padding: 10vh 10vw;
    height: 45rem;
    background-image: ${props => `url(${props.backgroundImage})`};
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
        background-image: ${props => `url(${props.backgroundImageMobile})`};
    }
`
const LeftSide = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 1200px) {
        display: none;
    }
`
const RightSide = styled.div`
    flex: 1;
    overflow-x: hidden;
`

const Title = styled.h3`
    color: white;
    font-family: "Montserrat", Sans-serif;
    font-size: 1.125rem;
    font-weight: 400;
    letter-spacing: 0.49rem;
    margin: 1.25rem 0;
    animation: ${slideInFromRight} .5s ease-out forwards;
    @media (max-width: 1200px) {
        text-align: center;
    }
`

const SubTitle = styled.h3`
    color: white;
    font-family: "Rajdhani", Sans-serif;
    font-size: 2.5rem;
    font-weight: 700;
    margin: 1.875rem 0;
    animation: ${slideInFromRight} .5s ease-out forwards;
    @media (max-width: 1200px) {
        text-align: center;
    }
`

const Option = styled.div`
    transition: all ease .2s;
    font-family: "Montserrat", Sans-serif;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    gap: 1.875rem;
    margin-bottom: 1.875rem;
    @media (max-width: 1200px) {
        gap: calc(1.875rem * .5);
    }
    > div {
        width: 3.75rem;
        height: 3.75rem;
        background-color: red;
        border-radius: 0.625rem;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
        font-weight: 700;
        @media (max-width: 1200px) {
            width: calc(3.75rem * .75);
            height: calc(3.75rem * .75);
        }
    }
    > p {
        font-size: 1.125rem;
        font-weight: 400;
        width: calc(85% - 60px);
        @media (max-width: 1200px) {
            font-weight: 600;
            width: calc(100% - (3.75rem * .75));
            font-size: calc(1.125rem * .80);

        }
    }
    &:hover {
        background: linear-gradient(274deg, rgba(0,0,0,0) 0%, rgba(0,0,0,.3) 40%, rgba(0,0,0,.3) 60%, rgba(0,0,0,0) 100%);
        transform: translateX(10px) scale(1.025);
    }
    
`