import React, { useState } from "react";
import styled from "styled-components";
import background from "../../assets/images/leadsPage2/backgroundLead.png";
import logoGTMED from "../../assets/images/logo1nobg.png";
import { Fade, Zoom } from "react-awesome-reveal";
import { toast } from "react-toastify";
import api from "../../services/API";
import { useNavigate, useLocation } from "react-router-dom";

const useQuery = () => new URLSearchParams(useLocation().search);

function LeadsHome2() {
  const query = useQuery();
  const navigate = useNavigate();
  
  const [utmParams, setUtmParams] = useState({
    utm_source: query.get("utm_source") || "",
    utm_medium: query.get("utm_medium") || "",
    utm_campaign: query.get("utm_campaign") || "",
    utm_content: query.get("utm_content") || "",
    utm_term: query.get("utm_term") || "",
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValidPhone = (phone) => /^\d{2}(?:9)?\d{8}$/.test(phone);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    if (!name) {
      setIsSubmitting(false);
      return toast.error("Insira um nome válido");
    }

    if (!isValidEmail(email)) {
      setIsSubmitting(false);
      return toast.error("Insira um email válido");
    }

    if (!isValidPhone(phone)) {
      setIsSubmitting(false);
      return toast.error("Insira um número de celular válido (DDD seguido do número, sem espaços ou outros caracteres)");
    }

    try {
      await api.SendLead({ name, email, phone, ...utmParams });
      toast("Cadastro realizado");
      setIsSubmitting(false);
      setName("");
      setEmail("");
      setPhone("");
      navigate("/obrigado");
    } catch (error) {
      console.log(error);
      setIsSubmitting(false);
      toast.error("Não foi possível realizar o seu cadastro");
    }
  };

  return (
    <Container backgroundImage={background}>
      <Content>
        <LogoSection>
          <Logo src={logoGTMED} alt="Logo GTMED" />
        </LogoSection>
        <MainSection>
          <Fade delay={800} cascade damping={0.3} triggerOnce direction="up">
            <Heading1>Médico,</Heading1>
          </Fade>
          <Fade delay={1000} cascade damping={0.3} triggerOnce direction="up">
            <Heading2>
              domine a <b>PRÁTICA</b> dos plantões com a expertise de 15 especialistas renomados em nosso <b>EVENTO GRATUITO</b>
            </Heading2>
          </Fade>
          <Fade delay={1200} cascade damping={0.3} triggerOnce direction="up">
            <Paragraph>
              Participe do evento GTMED e aprenda como perder o medo em situações de emergência em plantões, seja você estudante do 6º ano de medicina ou médico recém formado.
            </Paragraph>
            <Paragraph>
              *Dia 15/06, às 9h (Participe Online)
            </Paragraph>
          </Fade>
          <Form onSubmit={handleSubmit} id="btn-send-leads">
            <Fade delay={1500} cascade damping={0.3} triggerOnce>
              <InputGroup>
                <Input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Seu nome" />
                <Input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Seu melhor email" />
                <Input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Celular com DDD" />
              </InputGroup>
            </Fade>
            <Zoom delay={1450} duration={500} cascade triggerOnce>
              <ButtonContainer>
                <SubmitButton type="submit">Realizar cadastro</SubmitButton>
              </ButtonContainer>
            </Zoom>
            {isSubmitting && <SubmittingMessage>Realizando seu cadastro...</SubmittingMessage>}
          </Form>
        </MainSection>
      </Content>
    </Container>
  );
}

export default LeadsHome2;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${(props) => props.backgroundImage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6vh 2vw;
  row-gap: 3vh;

  @media (max-width: 768px) {
    padding: 4vh 1vw;
  }
`;

const LogoSection = styled.aside`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const Logo = styled.img`
  max-width: 40%;
  height: auto;

  @media (max-width: 768px) {
    max-width: 60%;
  }
`;

const MainSection = styled.main`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 40px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 90%;
    padding: 20px;
  }
`;

const Heading1 = styled.h1`
  font-size: 6vh;
  font-weight: 700;
  text-align: center;
  color: #333;
  font-family: "Montserrat", sans-serif;
  margin-bottom: 2vh;

  @media (max-width: 768px) {
    font-size: 4vh;
  }
`;

const Heading2 = styled.h2`
  font-size: 3.5vh;
  font-weight: 700;
  text-align: center;
  color: #333;
  font-family: "Montserrat", sans-serif;
  margin-bottom: 2vh;

  b {
    color: #007bff;
  }

  @media (max-width: 768px) {
    font-size: 2.5vh;
  }
`;

const Paragraph = styled.p`
  font-size: 2.2vh;
  font-weight: 400;
  text-align: center;
  color: #555;
  font-family: "Montserrat", sans-serif;
  margin-bottom: 4vh;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 2vh;
    margin-bottom: 2vh;
  }
`;

const Form = styled.form`
  width: 100%;
`;

const InputGroup = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 4vh;

  @media (max-width: 1000px) {
    flex-direction: column;
    margin-bottom: 2vh;
  }
`;

const Input = styled.input`
  width: 30%;
  height: 6vh;
  border: 1px solid #ccc;
  border-radius: 25px;
  font-family: "Montserrat", sans-serif;
  font-size: 2vh;
  padding: 0 15px;
  margin-bottom: 1vh;

  &::placeholder {
    color: #999;
    font-style: italic;
  }

  &:focus {
    outline: none;
    border-color: #007bff;
  }

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const SubmitButton = styled.button`
  width: 50%;
  padding: 1.5vh 0;
  color: white;
  border: none;
  font-family: "Montserrat", sans-serif;
  font-size: 2.4vh;
  border-radius: 25px;
  background-color: #007bff;
  background-size: 400% 200%;
  animation: textura 3.4s cubic-bezier(0.2, 0.5, 0.9, 0.6) 2s infinite;
  transition: background 1.6s cubic-bezier(0.55, 0.1, 0.47, 0.94), transform 0.3s ease;
  box-shadow: 0px 0px 21px 0px rgba(0, 123, 255, 0.4);

  &:hover {
    transform: scale(1.05);
    background-color: #0056b3;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const SubmittingMessage = styled.p`
  margin-top: 1vh;
  font-family: "Montserrat", sans-serif;
  font-size: 2vh;
  text-align: center;
  color: #333;
`;
