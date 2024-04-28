import styled from 'styled-components';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Home from '../Components/HomePage/Home/Home';
import TodosCursos from '../Components/HomePage/Home/TodosCursos';
export default function HomePage() {
    return (
        <Container>
            <Header />
            <Home />
            <TodosCursos />
            <Footer />
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    min-height: 50vh;
    margin-top: -21px;
    box-sizing: border-box;
`