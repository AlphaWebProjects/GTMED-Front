import styled from "styled-components";
import { MdMedicalServices } from "react-icons/md";
import StyledButton from "../../../common/form/Button";
import bestPrice from "../../../assets/images/best-price.png";
import sevenDays from "../../../assets/images/sevenDays.png";

export default function Oferta({oferta}){

    const body = {
        title: "CLÍNICA MÉDICA",
        subtitle: "DE PLANTÃO",
        price: "1247,00",
        discountedprice: "R$59,58",
        fullpricediscount: "R$597",
        buttontext: "DOMINAR CLÍNICA MÉDICA",
        buttoncolor: "#655BCE",
        buttonhovercolor: "#5448DA",
        color: "#C8C4F4",
        topics: [
            {
                details: "10 módulos"
            },
            {
                details: "Casos clínicos reais"
            },
            {
                details: "Prescrição na Prática"
            },
            {
                details: `O “Como fazer“ da Especialidade`
            },
            {
                details: `Aulas Bônus`
            },
            {
                details: `1 ano de acesso`
            },
            {
                details: `Certificado de Conclusão do Módulo`
            },
        ]
    }
    const cursoCompleto = {
        title: "GTMED",
        subtitle: "Todos os Cursos",
        price: "10.470,00",
        discountedprice: "R$290,58",
        fullpricediscount: "R$2.970",
        buttontext: "GARANTIR OFERTA",
        buttoncolor: "#4AC3FF",
        buttonhovercolor: "#33C9FF",
        color: "#33CFFF",
        topics: [
            {
                details: "150 módulos"
            },
            {
                details: "O que é de mais importante de cada especialidade"
            },
            {
                details: "99% dos casos que você encontrará no Plantão"
            },
            {
                details: `Casos Clínicos Reais`
            },
            {
                details: `As principais prescrições de todas as especialidades`
            },
            {
                details: `O “ Como fazer “ de todas as Especialidades`
            },
            {
                details: `Descontos especiais para os demais cursos da plataforma`
            },
            {
                details: `1 Ano de acesso e as condições especiais`
            },
            {
                details: `Bônus 1: 10 aulas`
            },
            {
                details: `Bônus2: Mentoria com um dos Especialistas GTMED`
            },
            {
                details: `Certificado de Conclusão da Plataforma GTMED`
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
            <OfferCard color={cursoCompleto?.color} highlighted>
                <Title color={cursoCompleto?.color}>{cursoCompleto?.title}</Title>
                <SubTitle>{cursoCompleto?.subtitle}</SubTitle>

                <p>{"De "}<StrikeThrough>{cursoCompleto?.price}</StrikeThrough>{" por:"}</p>
                <p>{"12x de "}<DiscountedPrice>{cursoCompleto?.discountedprice}</DiscountedPrice></p>
                <p>{`ou ${cursoCompleto?.fullpricediscount} À VISTA`}</p>

                {cursoCompleto?.topics?.map((topic, index) => (
                    <Option key={index} color={cursoCompleto?.color}>
                        <div><MdMedicalServices /></div>
                        <p>{topic?.details}</p>
                    </Option>
                ))}

                <StyledButton 
                    width={"100%"} 
                    height={"60px"} 
                    margintop={"30px !important"} 
                    background={`${cursoCompleto?.buttoncolor} !important`}
                    backgroundhover={`${cursoCompleto?.buttonhovercolor} !important`}
                >
                    {cursoCompleto?.buttontext}
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
    justify-content: space-around;
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
    width: 35%;
    height: 100%;
    display: flex;
    align-items: start;
    justify-content: center;
    @media (max-width: 1200px) {
        width: 96%;
    }
`
const RightSide = styled(LeftSide)`
    width: 45%;
    @media (max-width: 1200px) {
        width: 96%;
    }

`

const OfferCard = styled.div`
    user-select: none;
    position: relative;
    background-color: #0e0e0e;
    border-radius: 1rem;
    border: ${props => props.highlighted ? `2px solid ${props.color};` : `4px solid #181818;`};
    max-width: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3vh 2vw;
    gap: 1rem;
    transition: transform 0.3s, box-shadow 0.3s;
    box-shadow: ${props => props.highlighted ? "0 0 20px #33C9FF82" : "none"};
    &:hover {
        transform: scale(1.1);
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
    font-size: 2.0rem;  // Conversão para rem
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
        font-size: 1.8rem;  // Tamanho da fonte em rem
        color: ${props => props.color};
    }
    > p {
        font-size: 1.1rem;
        font-weight: 700;
        width: calc(100% - 30px);
        @media (max-width: 1200px) {
            width: calc(95% - 1.875rem);
            font-size: .95rem;
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
