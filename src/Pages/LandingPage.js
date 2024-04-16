import styled from 'styled-components';
import Footer from '../Components/Footer';
import Header from '../Components/Header';


export default function LandingPage() {
    return (
        <Container>
            <Header />
            <Footer/>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    min-height: 50vh;
    margin-top: -21px;
    box-sizing: border-box;
`