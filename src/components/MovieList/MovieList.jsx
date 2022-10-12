import styles from "./MovieList.module.css"
import { Link } from "react-router-dom";

export const MovieList = ({ item }) => {
    const element = item.map(({id, title, name}) => {
        return <li key={id} className={styles.linkItem}>
            <Link to={`/movie/${id}`} className={styles.linkMovie}>{title ? title : name}</Link>
            </li>
    })
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Trending today</h1>
            <ul className={styles.listMovie}>{element}</ul>
        </div>
        
    );
}