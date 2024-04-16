import styled from "styled-components";
import { MdMedicalServices } from "react-icons/md";
import StyledButton from "../../common/form/Button";
import bestPrice from "../../images/best-price.png";
import sevenDays from "../../images/sevenDays.png";

export default function Oferta(){
  return (
    <Container >
        <LeftSide>
            <OfferCard color="#ff0000">
                <Title color="#ff0000">{"GASOMETRIA"}</Title>
                <SubTitle>{"DESCOMPLICADA"}</SubTitle>
                <p>{"De "}<StrikeThrough>{"1247,00"}</StrikeThrough>{" por:"}</p>
                <p>{"12x de "}<DiscountedPrice>{"R$59,58"}</DiscountedPrice></p>
                <p>{"ou R$597 À VISTA"}</p>
                {[1,2,3,4].map(e => 
                    <Option color="#ff0000">
                        <div><MdMedicalServices /></div>
                        <p>{"Método didático, com aulas curtas e totalmente voltado à prática"}</p>
                    </Option>
                )}
                <StyledButton width={"100%"} height={"60px"} margintop={"30px !important"}>{"QUERO DOMINAR GASOMETRIA"}</StyledButton>
                <SevenDays src={sevenDays} top={"-30px"}/>
            </OfferCard>
        </LeftSide>
        <RightSide>
            <OfferCard color="#3CFF00">
                <Title color="#3CFF00">{"GTMED"}</Title>
                <SubTitle>{"Todos os Cursos"}</SubTitle>
                <p>{"De "}<StrikeThrough>{"10.470,00"}</StrikeThrough>{" por:"}</p>
                <p>{"12x de "}<DiscountedPrice>{"R$290,58"}</DiscountedPrice></p>
                <p>{"ou R$2.970 À VISTA"}</p>
                {[1,2,3,4,5,6].map(e => 
                    <Option color="#3CFF00">
                        <div><MdMedicalServices /></div>
                        <p>{"Método didático, com aulas curtas e totalmente voltado à prática"}</p>
                    </Option>
                )}
                <StyledButton 
                    width={"100%"} 
                    height={"60px"} 
                    margintop={"30px !important"} 
                    background="#309E0F !important" 
                    backgroundhover="#3CFF00 !important"
                >{"QUERO DOMINAR GASOMETRIA"}</StyledButton>
                <BestPriceImage src={bestPrice}/>
                <SevenDays src={sevenDays} top={"90px"}/>
            </OfferCard>
        </RightSide>
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    padding: 10vh 10vw;
    height: 100vh;
    background-color: #000000;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
`
const LeftSide = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    align-items: start;
    justify-content: center;
`
const RightSide = styled(LeftSide)``

const OfferCard = styled.div`
    position: relative;
    background-color: #0e0e0e;
    border-radius: 10px;
    border: 2px solid;
    border-color: ${props => props.color};
    width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 3vh 2vw;
    row-gap: 10px;
    > p {
        font-family: "Montserrat", Sans-serif;
        font-size: 22px;
        font-weight: 400;
        padding-bottom: 2.5px;
    }
`
const Title = styled.h3`
    color: ${props => props.color};
    font-family: "Rajdhani", Sans-serif;
    font-size: 43px;
    font-weight: 800;
    padding-bottom: 5px;
`
const SubTitle = styled.h3`
    font-family: "Rajdhani", Sans-serif;
    font-size: 26px;
    font-weight: 500;
    letter-spacing: 3.3px;
    padding-bottom: 30px;
`
const StrikeThrough = styled.span`
    text-decoration: line-through;
`
const DiscountedPrice = styled.span`
    font-size: 1.75em;
    font-weight: 600;
`;
const Option = styled.div`
    font-family: "Montserrat", Sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    column-gap: 12.5px;
    padding-top: 20px;
    > div {
        width: 30px;
        height: 30px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 25px;
        color: ${props => props.color};
        font-weight: 700;
    }
    > p {
        font-size: 16px;
        font-weight: 400;
        width: calc(100% - 30px);
    }
`
const BestPriceImage = styled.img`
    width: 150px;
    height: 150px;
    position: absolute;
    top: -38px;
    right: -75px;
`
const SevenDays = styled.img`
    width: 90px;
    height: 90px;
    position: absolute;
    top: ${props => props.top};
    right: -45px;
`