import erro404 from "./erro 404.jpg"
import styles from "../PageNotFound/PageNotFound.module.css";
import Header from "../../componentes/Header";
import Footer from "../../componentes/Footer";

function PageNotFound() {
    return (
        <>
        <Header />
        <section className={styles.container}>
            <h2>Ops! Conteúdo não localizado!</h2>
            <img src={erro404} alt="Logo de página não localizada" />
        </section>
        <Footer />
        </>
    );
}
export default PageNotFound;