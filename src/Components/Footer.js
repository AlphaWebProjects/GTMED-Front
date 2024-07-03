import styled from "styled-components";
import { Slide, Fade } from "react-awesome-reveal";
import { FaInstagram, FaYoutube, FaTiktok, FaLinkedin } from "react-icons/fa";
import logo from "../assets/images/logoGTMEDmelhorada.png";
import background from "../assets/images/Background2.png";

export default function Footer() {
  const instagram = "https://www.instagram.com/plataforma_gtmed?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";
  const youtube = "https://www.youtube.com/@GTMED";
  const tiktok = "https://www.tiktok.com/@gtmed";

  return (
    <Container backgroundImage={background}>
      <SubContainer>
        <TextColumn>
          <h4>Contato</h4>
          <h5>Email: email@email.com</h5>
          <h5>Celular: (11) 99999-9999</h5>
        </TextColumn>

        <ImageContainer>
          <img src={logo} alt="Logo" />
        </ImageContainer>

        <SocialContainer>
          <SocialLink
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </SocialLink>
          <SocialLink href={youtube} target="_blank" rel="noopener noreferrer">
            <FaYoutube />
          </SocialLink>
          <SocialLink href={tiktok} target="_blank" rel="noopener noreferrer">
            <FaTiktok />
          </SocialLink>
        </SocialContainer>
      </SubContainer>

      <AboutContainer>
        <p>Todos Direitos Reservados ©</p>
        <p>CNPJ: 11.111.111/1111-11</p>
      </AboutContainer>
    </Container>
  );
}

const Container = styled.div`
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
  text-align: center;
  color: white;
  padding: 3vh 10vw;
  border-top: 2px solid #54545445;
  @media (max-width: 768px) {
    padding: 3vh 5vw;
  }
`;

const SubContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding-bottom: 10px;
  }
`;

const ImageContainer = styled.div`
  margin-bottom: 20px;
  img {
    width: 250px;
  }
`;

const SocialContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

const SocialLink = styled.a`
  color: white;
  font-size: 24px;
  margin: 0 10px;
  transition: color 0.3s;
  &:hover {
    color: #33cfff;
  }
`;

const TextColumn = styled.div`
  margin-bottom: 20px;
  h4 {
    margin-bottom: 15px;
    font-size: 1.5rem;
    text-align: left;
  }
  h5 {
    margin-bottom: 5px;
    font-size: 1rem;
  }
  @media (max-width: 768px) {
    text-align: center;
    h4 {
      text-align: center;
      font-size: 1.25rem;
    }
    h5 {
      font-size: 0.875rem;
    }
  }
`;

const AboutContainer = styled.div`
  background-color: #090619;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  row-gap: 2px;
  border-radius: 10px;
  p {
    margin: 5px 0;
    font-size: 0.875rem;
  }
`;
