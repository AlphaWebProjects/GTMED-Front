import styled from 'styled-components';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Home from '../Components/HomePage/Home/Home';
import TodosCursos from '../Components/HomePage/TodosCursos/TodosCursos';
import SobreGTMED from '../Components/HomePage/SobreGTMed/SobreGTMED'


export default function HomePage({script, setScript}) {



    return (
        <Container>
            <Home />
            <TodosCursos setScript={setScript}/>
            <SobreGTMED />
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