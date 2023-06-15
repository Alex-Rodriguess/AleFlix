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

function filterCategory(id) {
  return videos.filter(video => video.category === categorias[id])
}

function App() {
  return (
    <>
    <Header />
    <Banner image="home" />
    <Container>

      <Category category={categorias[0]}>
        {filterCategory(0).map((video) => <Card id={video.id} key={video.id} />)}
      </Category>

      <Category category={categorias[1]}>
        {filterCategory(1).map((video) => <Card id={video.id} key={video.id} />)}
      </Category>

      <Category category={categorias[2]}>
        {filterCategory(2).map((video) => <Card id={video.id} key={video.id} />)}
      </Category>

      <Category category={categorias[3]}>
        {filterCategory(3).map((video) => <Card id={video.id} key={video.id} />)}
      </Category>

      <Category category={categorias[4]}>
        {filterCategory(4).map((video) => <Card id={video.id} key={video.id} />)}
      </Category>

      <Category category={categorias[5]}>
        {filterCategory(5).map((video) => <Card id={video.id} key={video.id} />)}
      </Category>


      
    </Container>
    <Footer />
    
    </>
  );
}

export default App;
