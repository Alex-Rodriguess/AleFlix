<<<<<<< HEAD
import Home from "./Pages/Home"

function App() {
  return (
    <Home />
  )
=======
import Banner from "./componentes/Banner";
import Card from "./componentes/Card";
import Category, {categorias, filterCategory} from "./componentes/Category";
import Container from "./componentes/Container";
import Footer from "./componentes/Footer";
import Header from "./componentes/Header";

function App() {
  return (
    <>
    <Header />
    <Banner image="home" />
    <Container>

      {categorias.map((category, index) =>
          <Category category={category}>
           {filterCategory(index).map((video) => <Card id={video.id} key={video.id} />)}
          </Category>
        )
      }

    </Container>
    <Footer />
    
    </>
  );
>>>>>>> 7944a7939a4866a7a792ca3d4ff6a4f722150f12
}

export default App;
