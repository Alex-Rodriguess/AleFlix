import styles from "./Category.module.css";
import videos from "../../json/dbvideos.json";

export const categorias = [
    "Gauchas",
    "Bandinha",
    "Pop-Rock",
    "Rock Internacional",
    "Barzinho",
    "Pagode"
  ]
  
  export function filterCategory(id) {
    return videos.filter(video => video.category === categorias[id])
  }

function Category({ category, children }) {
    return(
        <section className={styles.category}>
            <h2>{category}</h2>
            <div>
                {children} 
            </div>
        </section>
    );
}

export default Category;