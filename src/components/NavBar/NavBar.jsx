import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css"

export const NavBar = () => {
    const getClassName = ({ isActive }) => {
        return isActive ? `${styles.link} ${styles.active}` : `${styles.link}`;
    };
    return (
        <nav className={styles.container}>
            <NavLink to={"/"} className={getClassName} end>Home</NavLink>
            <NavLink to={"/movie"} className={getClassName} end>Movie</NavLink>
            
        </nav>
    );
}