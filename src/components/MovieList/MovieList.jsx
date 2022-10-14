import styles from "./MovieList.module.css"
import { NavLink } from "react-router-dom";

export const MovieList = ({ item }) => {

    const getClassName = ({ isActive }) => {
        return isActive ? `${styles.linkMovie} ${styles.active}` : `${styles.linkMovie}`;
    };

    const element = item.map(({id, title, name}) => {
        return <li key={id} className={styles.linkItem}>
            <NavLink to={`/movie/${id}`} className={getClassName}>{title ? title : name}</NavLink>
            </li>
    })
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Trending today</h1>
            <ul className={styles.listMovie}>{element}</ul>
        </div>
        
    );
}