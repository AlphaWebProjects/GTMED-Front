import Button from '@mui/material/Button';
import styled from 'styled-components';

export default function StyledButton({ variant='contained', width, height, widthmobile, heightmobile, fontsize, fontsizemobile, children, background, backgroundhover, fontColor, margintop, ...props }) {
  return (
    <StyledMuiButton fontsizemobile={fontsizemobile} widthmobile={widthmobile} heightmobile={heightmobile} variant={variant} width={width} height={height} fontsize={fontsize} background={background} backgroundhover={backgroundhover} fontColor={fontColor} margintop={margintop} {...props}>
      {children}
    </StyledMuiButton>
  );
}

const StyledMuiButton = styled(Button)`
  font-weight: 700 !important;
  font-size: ${(props) => props.fontsize || '18px !important'};
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};
  background-color: ${(props) => props.background || '#E42323 !important'};
  //background-color: ${(props) => props.background || '#158A7A !important'};
  color: ${(props) => props.fontColor || '#FFFFFF !important'};
  margin-top: ${(props) => props.margintop || '0'};

  &:hover {
    background-color: ${(props) => props.backgroundhover || '#C73B3B !important'};
  }
  @media (max-width: 1200px) {
    width: ${(props) => props.widthmobile || 'auto'};
    height: ${(props) => props.heightmobile || 'auto'};
    font-size: ${(props) => props.fontsizemobile || '18px !important'};
  }
`;
