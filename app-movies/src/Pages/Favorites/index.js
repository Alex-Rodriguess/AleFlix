import styles from "./Favorites.module.css";
import Header from "../../componentes/Header";
import Footer from "../../componentes/Footer";
import Container from "../../componentes/Container";

function Favorites() {
  return (
    <>
      <Header />
        <Container>
            <section className={styles.favorites}>
                <h2>Lista de Favoritos</h2>
                Lista de Favoritos
            </section>
        </Container>
      <Footer />
    </>
  );
}

export default Favorites;
