import Banner from "../../componentes/Banner";
import Card from "../../componentes/Card";
import Category, {
  categorias,
  filterCategory,
} from "../../componentes/Category";
import Container from "../../componentes/Container";
import Footer from "../../componentes/Footer";
import Header from "../../componentes/Header";
import Caroussel from "../../componentes/Caroussel";
import ScrollToTopButton from "../../componentes/ScrollToTopButton";

function Home() {
  return (
    <>
      <ScrollToTopButton />
      <Header />
      <Banner image="home" />
      <Container>
        {categorias.map((category, index) => (
          <Category category={category}>
            <Caroussel>
              {filterCategory(index).map((video) => (
                <Card id={video.id} key={video.id} />
              ))}
            </Caroussel>
          </Category>
        ))}
      </Container>
      <Footer />
    </>
  );
}

export default Home;
