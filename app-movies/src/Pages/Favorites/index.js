import styles from "./Favorites.module.css";
import Header from "../../componentes/Header";
import Footer from "../../componentes/Footer";
import Container from "../../componentes/Container";
import VideoList from "../../componentes/VideoList";
import { useFavoriteContext } from "../../contexts/Favorites";
import ScrollToTopButton from "../../componentes/ScrollToTopButton";

function Favorites() {

  const { favorite } = useFavoriteContext()

  return (
    <>
      <ScrollToTopButton />
      <Header />
        <Container>
            <section className={styles.favorites}>
                <h2>Meus Favoritos</h2>
                { <VideoList videos={favorite} emptyHeading= "&#x1F614; Sem Favoritos &#x1F641;" /> }
            </section>
        </Container>
      <Footer />
    </>
  );
}

export default Favorites;
