import styled, { keyframes } from "styled-components";

const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Spinner = styled.div`
  border-radius: 50px;
  border-bottom: 3px dotted white;
  border-right: 3px dotted white;
  border-top: 6px ridge white;
  border-left: 3px dotted white; 
  width: ${props => props.width || "60px"};
  height: ${props => props.height || "60px"};
  animation: ${spinAnimation} 2s linear infinite;
  position: absolute;
  z-index: 9999;
  top: 23vh;
`;