import styled from "styled-components";
import { MdMedicalServices } from "react-icons/md";
import StyledButton from "../../common/form/Button";
import bestPrice from "../../images/best-price.png";
import sevenDays from "../../images/sevenDays.png";

export default function Oferta(){

    const body = {
        title: "GASOMETRIA",
        subtitle: "DESCOMPLICADA",
        price: "1247,00",
        discountedprice: "R$59,58",
        fullpricediscount: "R$597",
        buttontext: "QUERO DOMINAR GASOMETRIA",
        buttoncolor: "#E42323",
        buttonhovercolor: "#C73B3B",
        color: "#ff0000",
        topics: [
            {
                details: "Método didático, com aulas curtas e totalmente voltado à prática"
            },
            {
                details: "Método didático, com aulas curtas e totalmente voltado à prática"
            },
            {
                details: "Método didático, com aulas curtas e totalmente voltado à prática"
            },
            {
                details: "Método didático, com aulas curtas e totalmente voltado à prática"
            },
        ]
    }

  return (
    <Container >
        <LeftSide>
            <OfferCard color={body?.color}>
                <Title color={body?.color}>{body?.title}</Title>
                <SubTitle>{body?.subtitle}</SubTitle>

                <p>{"De "}<StrikeThrough>{body?.price}</StrikeThrough>{" por:"}</p>
                <p>{"12x de "}<DiscountedPrice>{body?.discountedprice}</DiscountedPrice></p>
                <p>{"ou "}{body?.fullpricediscount}{" À VISTA"}</p>

                {body?.topics?.map((topic, index) => (
                    <Option key={index} color={body?.color}>
                        <div><MdMedicalServices /></div>
                        <p>{topic?.details}</p>
                    </Option>
                ))}

                <StyledButton 
                    width={"100%"} 
                    height={"60px"} 
                    margintop={"30px !important"}
                    background={`${body?.buttoncolor} !important`}
                    backgroundhover={`${body?.buttonhovercolor} !important`}
                >
                    {body?.buttontext}
                </StyledButton>

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
                >
                    {"QUERO DOMINAR GASOMETRIA"}
                </StyledButton>
                
                <BestPriceImage src={bestPrice}/>
                <SevenDays src={sevenDays} top={"90px"}/>
            </OfferCard>
        </RightSide>
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: start;
    padding: 5vh 10vw;  // Espaçamento vertical e horizontal adaptável
    background-color: #000;
    color: #FFF;
    @media (max-width: 1200px) {
        height: auto;
        padding: 5vh 4vw;
        flex-direction: column;
        row-gap: 4vh;
    }
`;
const LeftSide = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    align-items: start;
    justify-content: center;
    @media (max-width: 1200px) {
        width: 100%;
    }
`
const RightSide = styled(LeftSide)``

const OfferCard = styled.div`
    user-select: none;
    position: relative;
    background-color: #0e0e0e;
    border-radius: 1rem;
    border: 2px solid ${props => props.color};
    max-width: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3vh 2vw;
    gap: 1rem;
    transition: transform 0.3s;
    &:hover {
        transform: scale(1.05);
        background-color: #131313;
    }
    > p {
        font-family: "Montserrat", Sans-serif;
        font-size: 1.2rem;  // Conversão para rem
        font-weight: 400;
    }
    @media (max-width: 1200px) {
        width: auto;
        max-width: 500px;
    }
`
const Title = styled.h3`
    color: ${props => props.color};
    font-family: "Rajdhani", Sans-serif;
    font-size: 2.6875rem;  // Conversão para rem
    font-weight: 800;
`
const SubTitle = styled.h3`
    font-family: "Rajdhani", Sans-serif;
    font-size: 1.625rem;  // Conversão para rem
    font-weight: 500;
    letter-spacing: 0.20625rem;  // Espaçamento em rem
    margin-bottom: 0.8rem;  // Margem em rem
`
const StrikeThrough = styled.span`
    text-decoration: line-through;
`
const DiscountedPrice = styled.span`
    font-size: 1.75em;
    font-weight: 600;
`;
const Option = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.78125rem;  // Espaçamento em rem
    font-family: "Montserrat", Sans-serif;
    font-size: 1rem;  // Tamanho em rem
    font-weight: 400;
    padding-top: 1.25rem;  // Padding superior em rem
    width: 100%;
    > div {
        width: 1.875rem;  // Tamanho em rem
        height: 1.875rem;  // Tamanho em rem
        border-radius: 0.625rem;  // Raio em rem
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5625rem;  // Tamanho da fonte em rem
        color: ${props => props.color};
    }
    > p {
        font-size: 1rem;
        font-weight: 400;
        width: calc(100% - 30px);
        @media (max-width: 1200px) {
            width: calc(95% - 1.875rem);
        }
    }
`
const BestPriceImage = styled.img`
    width: 150px;
    height: 150px;
    position: absolute;
    top: -38px;
    right: -75px;
    @media (max-width: 1200px) {
        width: calc(150px * .6);
        height: calc(150px * .6);
        top: -26px;
        right: -30px;
    }
`
const SevenDays = styled.img`
    width: 90px;
    height: 90px;
    position: absolute;
    top: ${props => props.top};
    right: -45px;
    @media (max-width: 1200px) {
        width: calc(90px * .7);
        height: calc(90px * .7);
        top: ${props => `calc(${props.top} * .7)`};
        right: -20px;
    }
`