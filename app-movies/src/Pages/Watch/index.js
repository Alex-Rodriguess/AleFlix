import styles from "./Watch.module.css";
import Header from "../../componentes/Header";
import Container from "../../componentes/Container";
import Footer from "../../componentes/Footer"
import { useParams } from "react-router-dom";
import videos from "../../json/dbvideos.json";
import PageNotFound from "../PageNotFound/index"
import ScrollToTopButton from "../../componentes/ScrollToTopButton";

function Watch() {
    const parametros = useParams()
    const video = videos.find((video) => {return video.id === parametros.id})
    if(!video) { return <PageNotFound />}
    return(
        <>
            <ScrollToTopButton />
            <Header />
            <Container>
                <section className={styles.watch}>
                    <iframe 
                        width="854" height="480" 
                        src={`https://www.youtube.com/embed/${video.id}`} 
                        title="YouTube video player" 
                        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen>

                    </iframe>
                </section>
            </Container>
            <Footer />
        </>
        
    );
}

export default Watch;