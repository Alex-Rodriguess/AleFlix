import Banner from "../../componentes/Banner";
import Card from "../../componentes/Card";
import Category, {categorias, filterCategory} from "../../componentes/Category";
import Container from "../../componentes/Container";
import Footer from "../../componentes/Footer";
import Header from "../../componentes/Header"

function Home() {
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
}

export default Home;