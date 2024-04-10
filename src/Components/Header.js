import React, { useState } from 'react';
import styled from 'styled-components';
function Header() {
  const [activeHeader, setActiveHeader] = useState(1);

  const handleHeaderClick = (index) => {
    setActiveHeader(index);
    if (index === 1) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    if (index === 2) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    if (index === 3) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    if (index === 4) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    if (index === 5) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    if (index === 6) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    

  };

  return (
    <HeaderContainer>
        <h1><img width="230" height="60" alt="Logo"/> </h1>
      <MiddleHeader>
        <StyledH2 active={activeHeader === 1} onClick={() => handleHeaderClick(1)}>none</StyledH2>
        <StyledH2 active={activeHeader === 2} onClick={() => handleHeaderClick(2)}>none</StyledH2>
        <StyledH2 active={activeHeader === 3} onClick={() => handleHeaderClick(3)}>none</StyledH2>
        <StyledH2 active={activeHeader === 4} onClick={() => handleHeaderClick(4)}>none</StyledH2>
        <StyledH2 active={activeHeader === 5} onClick={() => handleHeaderClick(5)}>none</StyledH2>
        <StyledH2 active={activeHeader === 6} onClick={() => handleHeaderClick(6)}>none</StyledH2>
        {/* <Indicator activeHeader={activeHeader} /> */}
      </MiddleHeader>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
z-index: 2;
  width: 100%;
  background-color: rgb(255,255,255,0.9);
  position:fixed;
  top:0;
  left:0;
  color:black;
  height: 100px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  backdrop-filter: blur(5px);
  @media (max-width: 1200px) {
    display: none;
  }
`;

const MiddleHeader = styled.div`
  display: flex;
  align-items: center;
  width: 40%;
  font-size: 11px;
  justify-content: space-around;
  position: relative;
`;

const StyledH2 = styled.h2`
  cursor: pointer;
  min-width:20%;
  max-width:20%;
  text-align: center;
  transition: color 0.3s ease;
  color: ${({ active }) => (active ? 'black' : '#808080')};
  &:hover {
    color:black;
  }
`;

const Indicator = styled.div`
  position: absolute;
  bottom: -1px;
  left: ${({ activeHeader }) => `${(activeHeader -0.6) * 20}%`};
  width: 5%;
  height: 2px;
  background-color: #158A7A;
  transition: left 0.3s ease-in-out;
`;

export default Header;
