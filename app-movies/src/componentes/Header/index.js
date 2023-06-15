import styles from "./Header.module.css"

function Header() {
    return (
        <header className={styles.header}>
            <span>PlayFlix</span>
            <nav>
                <a href="#">Home</a>
                <a href="#">Assistir</a>
                <a href="#">Favoritos</a>
            </nav>
        </header>
    )
}

export default Header;