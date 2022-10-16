import styles from "./SearchMovieList.module.css";
import { NavLink, useLocation } from "react-router-dom";
import propTypes from 'prop-types';


export const SearchMovieList = ({ item }) => {
    const location = useLocation();
    if (item.total_pages === 0) {
        return (<p>No Movies found</p>);
    } else {
        const getClassName = ({ isActive }) => {
        return isActive ? `${styles.linkMovie} ${styles.active}` : `${styles.linkMovie}`;
        };
        const element = item.results.map(({id, title, name}) => {
        return <li key={id} className={styles.linkItem}>
            <NavLink state={{from: location}} to={`/movie/${id}`} className={getClassName}>{title ? title : name}</NavLink>
            </li>
        })
        return (
        <div className={styles.container}>
            <ul className={styles.listMovie}>{element}</ul>
        </div>    
        );    
    }
}
SearchMovieList.propTypes = {
    item: propTypes.object.isRequired
}