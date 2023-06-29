import styles from "./Favorites.module.css";
import Header from "../../componentes/Header";
import Footer from "../../componentes/Footer";
import Container from "../../componentes/Container";
import VideoList from "../../componentes/VideoList";
import { useFavoriteContext } from "../../contexts/Favorites";

function Favorites() {

  const { favorite } = useFavoriteContext()

  return (
    <>
      <Header />
        <Container>
            <section className={styles.favorites}>
                <h2>Meus Favoritos</h2>
                { <VideoList videos={favorite} emptyHeading="Sem Favoritos" /> }
            </section>
        </Container>
      <Footer />
    </>
  );
}

export default Favorites;
