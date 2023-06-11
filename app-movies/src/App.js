import Banner from "./componentes/Banner";
import Container from "./componentes/Container";
import Footer from "./componentes/Footer";
import Header from "./componentes/Header";

function App() {
  return (
    <>
    <Header />
    <Banner image="home" />
    <Container>
    <h1>Aprendendo React JS</h1>
    </Container>
    <Footer />
    
    </>
  );
}

export default App;
