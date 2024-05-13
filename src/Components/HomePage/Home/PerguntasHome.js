import styled from 'styled-components';
import { useState } from 'react';
import React from 'react';
import { Fade,Slide } from 'react-awesome-reveal';
import background from '../../../assets/images/backgroundFAQ.png'

export default function PerguntasHome() {

        const [selectedQuestion, setSelectedQuestion] = useState(null);
      
        const handleQuestionClick = (index) => {
            if (selectedQuestion === index) {
              setSelectedQuestion(null);
            } else {
              setSelectedQuestion(index);
            }
          };
        const perguntas = [
            { pergunta: 'Para quem é destinado esse curso?', resposta: 'Os cursos GTMED são destinados a médicos, estudantes de medicina, fisioterapeutas e profissionais de enfermagem, de forma exclusiva.' },
            { pergunta: 'Quanto tempo de acesso?', resposta: 'O acesso é livre por 1 ano. Pode ver e rever quantas vezes quiser.' },
            { pergunta: 'O curso é todo liberado desde o início?', resposta: 'Os módulos são liberados 75% inicialmente, e 25% restantes, após 15 dias, para proteção do curso. Entretanto, não se preocupe, você poderá assistir quantas vezes for necessário, por 1 ano.' },
            { pergunta: 'Como funciona o acesso?', resposta: 'Após a compra, você receberá um e-mail para definição de login e senha. Caso não tenha recebido, cheque na sua caixa de spam e/ou lixeira. O acesso é inteiramente feito no site:' },
            { pergunta: 'Após a compra, qual o prazo de liberação do curso?', resposta: 'Compras realizadas em boleto demoram até 72 horas para compensação. Compras feitas em cartão possuem acesso imediato.' }
          ];
        
          return (
            <PageQuestionsContainer background={background}>
                <Slide triggerOnce={true}>
                <Title>
                <h1>Perguntas</h1>
                <h2>Frequentes</h2>
              </Title>
                </Slide>
              <QuestionList>
              <Fade delay={0.3} cascade damping={0.3} style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', textAlign:'center',width:'100%'}} triggerOnce={true}>
                {perguntas.map((pergunta, index) => (
                <React.Fragment key={index}>
                    <QuestionItem onClick={() => handleQuestionClick(index)}>
                    <h1>{pergunta.pergunta}</h1>
                    </QuestionItem>
                    <Answer open={selectedQuestion === index}>
                    {pergunta.resposta}
                    </Answer>
                </React.Fragment>
                ))}
                </Fade>
            </QuestionList>
            </PageQuestionsContainer>
          );
}

const PageQuestionsContainer = styled.div`
    background-image: ${props => `url(${props.background})`};
    background-position: center;     
    background-repeat: no-repeat;
    background-color:black;
    height: 90vh;
    display: flex;
    align-items: center;
    flex-direction: column; 
    justify-content: center;
    color: white;
    padding: 10vh 0 !important;
    @media (max-width: 768px) {
        height: auto !important;
    }
`
const QuestionList = styled.ul`
  list-style: none;
  padding: 0;
  width:40%;
  margin-top: 8vh;
  @media (max-width: 768px) {
     width:90%;
     margin-top: 4vh;
    }
`;

const QuestionItem = styled.li`
  margin: 10px 0 ;
  cursor: pointer;
  transition: scale 0.3s ease, color 0.3s ease;
  width:100%;
  h1{
    font-size: 25px !important;
  }
  &:hover {
    scale:1.05;
    color:rgb(0,100,255);
  }
  @media (max-width: 800px) {
     h1{
      font-size: 16px !important;
     }
    }
`;

const Answer = styled.div`
  max-height: ${({ open }) => (open ? '90px' : '0')};
  overflow: hidden;
  transition: max-height 0.4s ease-in-out;
  border-bottom: 1px solid white;
  width:100%;
  margin-bottom: 10px;
`;

const Title = styled.div`
display: flex;
width: 450px;
align-items: center;
justify-content: space-around;
transition: scale 0.3s ease;
    h1{
        color:white;
        font-size: 45px;
    }
    h2{
        color:rgb(0,100,255);
        font-size: 40px;
        font-weight: bold;
    }
    &:hover{
        scale:1.05;
    }
    @media (max-width: 768px) {
     flex-direction: column;
     width: 250px;
     text-align: center;
     h1{
      font-size: 35px !important;
     }
     h2{
      font-size: 30px !important;
     }
    }
`