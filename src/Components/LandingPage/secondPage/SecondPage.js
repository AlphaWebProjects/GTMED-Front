import styled from 'styled-components';
import { FaAngleDown } from "react-icons/fa";
import { Fade } from 'react-awesome-reveal';
export default function SecondPage({pontuacoes}) {
    return (
        <SecondPageContainer>
            <Fade delay={0.3} cascade damping={0.3} style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }} triggerOnce={true}>
            <Description style={{fontWeight:'bold'}}>
            {pontuacoes?.descricao1}
            </Description>
            
            <Description>
            <h3>{pontuacoes?.descricao2}</h3>
            </Description>

            <Description style={{backgroundColor: pontuacoes?.cores[0]?.fundoDescricao3,borderRadius:"20px",fontWeight:'bold'}}>
            {pontuacoes?.descricao3}
            </Description>
            <ButtonDown>
            <FaAngleDown color='white' size={40}/>
            </ButtonDown>
            </Fade>
        </SecondPageContainer>
    )
}

const SecondPageContainer = styled.div`
background-color: black;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
box-shadow: rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;
@media (max-width: 768px) {
     height:auto;
}
`

const Description = styled.div`
color: white;
width:40%;
height: 100%;
padding: 20px;
font-size: 20px;
display: flex;
justify-content: center;
align-items: center;
text-align:center;
transition: scale 0.3s ease;
h3{
    font-size: 35px;
    letter-spacing: 1px;
}
@media (max-width: 768px) {
     width:90%;
     h3{
        font-size: 20px;
     }
    }
cursor: pointer;
&:hover {
        scale:1.1
    }
`

const ButtonDown = styled.button`
background-color: transparent;
border: none;
width: 60px;
height: 60px;
border-radius: 20px;
transition: scale 0.3s ease;
cursor: pointer;
&:hover {
        scale:1.1
    }
`