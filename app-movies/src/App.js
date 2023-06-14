import Banner from "./componentes/Banner";
import Card from "./componentes/Card";
import Category from "./componentes/Category";
import Container from "./componentes/Container";
import Footer from "./componentes/Footer";
import Header from "./componentes/Header";
import videos from "./json/dbvideos.json";

const categorias = [
  "Gauchas",
  "Geografia",
  "Como fazer e usar",
  "Astronomia e Geografia",
  "Climatologia, Meteorologia, Vegetação",
  "Geologia e Hidrografia"
]

function App() {
  return (
    <>
    <Header />
    <Banner image="home" />
    <Container>

      <Category category="Gauchas">
        {/* {videos.map((video) => <Card id={video.id} key={video.id} />)} */}
      </Category>
      
    </Container>
    <Footer />
    
    </>
  );
}

export default App;
