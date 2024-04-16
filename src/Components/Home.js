import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ParaQuem from './paraQuem/ParaQuem';
import AoFimDoCurso from './aoFimDoCurso/AoFimDoCurso';
import Oferta from './oferta/Oferta';
import Vsl from './VSL/Vsl';

function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {

    setTimeout(() => {
      setIsVisible(true);
    }, 500);

    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };

  }, []);


  return (
    <Container>
      {/* <MainContentHome>
        <CenterContent>
          <Left isVisible={isVisible}>
            <p>content</p>
          </Left>
        </CenterContent>
      </MainContentHome> */}
      
      
      <ParaQuem/>
      <AoFimDoCurso/>
      <Vsl />
      <Oferta/>
      
    </Container>
  );
}

export default Home;

const Container = styled.div`
  width: 100%;
  height: 90%;
  margin-top: 120px;
  background-size: cover;
  background-position: center;
  @media (max-width: 1200px) {
    margin-top: 0;
    height: auto;
    max-width: 100%;
    overflow: hidden;
  }
`;

const MainContentHome = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 2%;
`;

const Left = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.45) 25px 0px 20px -20px;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5%;
  opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
  transition: opacity 1s ease-in-out;
  p {
    font-size: 20px;
    font-weight: 500;
  }
  h1{
    font-size: 40px;
    padding: 12px;
    border-radius: 12px;
    border-bottom: 3px solid #158a7a;
  }
  img{
    display: none;
  }
  @media (max-width: 1200px) {
    img{
      display: block;
      width: 35vh;
      height: 11vh;
    }
    p{
      font-size: 18px ;
    }
    h1{
      font-size: 28px;
    }
    padding: 7vh 5%;
  }
`;

const CenterContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  border-radius: 20px;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  background-color: rgba(255, 255, 255, 0.9);
  @media (max-width: 420px) {
    margin-top: 10px;
  }
`;
