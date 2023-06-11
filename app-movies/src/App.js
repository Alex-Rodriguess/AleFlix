import Banner from "./componentes/Banner";
import Card from "./componentes/Card";
import Container from "./componentes/Container";
import Footer from "./componentes/Footer";
import Header from "./componentes/Header";
import videos from "./json/db.json";

function App() {
  return (
    <>
    <Header />
    <Banner image="home" />
    <Container>
      <h2>Ação</h2>
      <section className="cards">
        {videos.map((video) => <Card id={video.id} key={video.id} />)}
      </section>
    </Container>
    <Footer />
    
    </>
  );
}

export default App;
