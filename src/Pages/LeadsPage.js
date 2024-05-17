import styled from 'styled-components';
import Leads from '../Components/LeadsPage/Leads';
import { FaWhatsapp } from 'react-icons/fa';
import OQueEsperar from '../Components/LeadsPage/OQueEsperar';


export default function LeadsPage({script, setScript}) {


    return (
        <Container>
            <Leads />
            <OQueEsperar />
            <WhatsAppButton
            // href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank"
            // onClick={(e) => e.stopPropagation()}
            >
                <FaWhatsapp size={30} color="white" />
            </WhatsAppButton>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    min-height: 50vh;
    margin-top: -21px;
    box-sizing: border-box;
`

const WhatsAppButton = styled.a`
  position: fixed;
  bottom: 20px;
  right: 7vw;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: green;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out; 
  z-index: 100000000;

  &:hover {
    box-shadow: 0 3px 6px rgba(0, 128, 0, 0.3);
    transform: scale(1.1);
  }


  &:active {
    box-shadow: 0 1px 3px rgba(0, 128, 0, 0.3);
    transform: scale(0.9);
  }

  svg {
    transition: all 0.2s ease-in-out; 
  }


  &:hover svg {
    transform: scale(1.1);
  }


  &:active svg {
    transform: scale(0.9);
  }
`;