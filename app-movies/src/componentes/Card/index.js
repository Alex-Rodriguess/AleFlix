import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import iconFavorites from "./favorite.png";
import unFavorites from "./unfavorite.png";


function Card({id}) {
    return(
        <section className={styles.card}>
            <Link to={`/Watch/${id}`}>
                <img src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`} alt="Capa" className={styles.capa} />
            </Link>
            <figure className={styles.icon} >
                <img src={iconFavorites} alt="Ícone" />
            </figure> 
        </section>
    );
}

export default Card;