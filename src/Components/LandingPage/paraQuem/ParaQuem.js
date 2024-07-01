import styled, { keyframes } from "styled-components";
import { Fade, Slide } from 'react-awesome-reveal';
export default function ParaQuem({paraQuem, themeColor}){

    return (
        <Container backgroundImage={paraQuem.backgroundImage} backgroundImageMobile={paraQuem.backgroundImageMobile}>
            <LeftSide></LeftSide>
            <RightSide>
                <Title>PARA QUEM É O</Title>
                <SubTitle>{paraQuem.titulo}</SubTitle>
                <Fade delay={0.5} cascade damping={0.3} triggerOnce={true}>
                    {paraQuem.topicos.map((topic, index) => (
                    <Option backgroundColor={themeColor} key={index}>
                        <div>{index + 1}</div>
                        <p>{topic}</p>
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

    background-repeat: no-repeat;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 1200px) {
        height: auto;
        padding: 5vh 4vw;
        background-position: center;
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
        background-color: ${props => props.backgroundColor};
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