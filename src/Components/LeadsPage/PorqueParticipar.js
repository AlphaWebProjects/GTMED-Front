import styled from "styled-components";
import { IoIosMedical } from "react-icons/io";
import { Fade, Slide } from 'react-awesome-reveal';
import background from '../../assets/images/backgroundLeads.png'
import backgroundDesktop from '../../assets/images/backgroundLeadsDesktop.png'
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { BiUserVoice } from "react-icons/bi";
import { BsPlusSquare } from "react-icons/bs";
import { MdCheckCircleOutline } from "react-icons/md";
import React, { useEffect, useState } from 'react';


export default function PorqueParticipar(){

    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
    
        const handleResize = () => {
          setWidth(window.innerWidth);
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
    
          window.removeEventListener('resize', handleResize);
        };
      }, []);


    const body = {
        title: "AO FINAL DO CURSO VOCÊ SERÁ CAPAZ DE:",
        topics: [
            {
                details: " Seja um dos primeiros a conhecer essa abordagem revolucionária de ensino médico",
                icon: <MdOutlineWorkspacePremium/>
            },
            {
                details: "Tenha a oportunidade de interagir com professores altamente capacitados",
                icon: <BiUserVoice/>
            },
            {
                details: "Descubra como a GTMED pode ajudá-lo a ganhar confiança e competência para enfrentar os plantões",
                icon: <BsPlusSquare/>
            },
            {
                details: "Garanta vantagens exclusivas ao se inscrever durante o evento de lançamento",
                icon: <MdCheckCircleOutline/>
            },
        ]
    }

    return (
        <Container backgroundImage={ width > 1200 ? backgroundDesktop : background}>
            <SubContainer>
            <Slide triggerOnce={true}><Title>Porque participar?</Title></Slide>
            <Fade delay={0.5} cascade damping={0.3} triggerOnce={true} style={{width:'100%'}}>

                {body.topics.map((topic, index) => (
                <Option key={index}>
                    <div>{topic.icon}</div>
                    <p>{topic.details}</p>
                </Option>
            ))}

            </Fade>
            </SubContainer>
        </Container>
    )
    }

const Container = styled.div`
    user-select: none;
    width: 100%;
    padding: 10vh 10vw;
    height: auto;
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
        background-position: top;
    }
`;

const SubContainer = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 1200px) {
        width: 100%;
    }
`;

const Title = styled.h3`
    text-align: center;
    font-family: "Montserrat", Sans-serif;
    font-size: 1.8rem;
    font-weight: 600;
    margin-bottom: 2rem;
`;

const Option = styled.div`
    transition: all ease .2s;
    font-family: "Montserrat", Sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-bottom: 1.25rem;
    > div {
        width: 3.125rem;
        height: 3.125rem;
        border-radius: 0.625rem;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2.5rem;
        color: white;
        @media (max-width: 1200px) {
            width: calc(3.75rem * .75);
            height: calc(3.75rem * .75);
        }
    }
    > p {
        font-size: 2vh;
        font-weight: 400;
        padding-left: 1rem;
        width: 70%;
        @media (max-width: 1200px) {
            font-weight: 600;
            width: calc(100% - (3.75rem * .75));
            font-size: calc(1.125rem * .75);
        }
    }
    &:hover {
        background: linear-gradient(274deg, rgba(0,0,0,0) 0%, rgba(0,0,0,.3) 40%, rgba(0,0,0,.3) 60%, rgba(0,0,0,0) 100%);
        transform: translateX(10px) scale(1.025);
    }
`;