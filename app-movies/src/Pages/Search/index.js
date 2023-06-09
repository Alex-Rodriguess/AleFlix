import styles from "./Search.module.css";
import Header from "../../componentes/Header";
import Footer from "../../componentes/Footer";
import Container from "../../componentes/Container";
import SearchVideoList from "../../componentes/SearchVideoList";
import videos from "../../json/dbvideos.json";
import ScrollToTopButton from "../../componentes/ScrollToTopButton";



function Search() {
    return(
        <>
        <ScrollToTopButton />
        <Header />
        <Container>
        <section className={styles.search}>
            <h2>Pesquisar</h2>

            <SearchVideoList videos={videos} />

        </section>

        </Container>
        <Footer />
        </>
    );
}

export default Search;