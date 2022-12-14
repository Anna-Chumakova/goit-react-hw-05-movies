import { useEffect, useState, } from "react";
import { useParams, useNavigate, Link, Outlet, useLocation } from "react-router-dom";
import Loader from "components/Loader/Loader";
import { GetMovieById } from "components/GetFilms/GetFilms";
import styles from "./MovieDetails.module.css";


const MovieDetails = () => {
    
    const [state, setState] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const { id } = useParams();
    const location = useLocation();
    const from = location.state?.from || "/";

    const navigate = useNavigate();
    
    useEffect(() => {
        const fetchMovieById = async () => {
            try {
                setLoading(true);
                setError(null);
                const data = await GetMovieById(id);
                setState(data);
            } catch (e) {
                setError(e);
            } finally {
                setLoading(false);
            }
        }
        fetchMovieById();
    }, [id]);
    
    
    const goMovie = () => navigate(from);
    const isCastPage = location.pathname.includes("cast");
    const castLink = isCastPage ? `/movie/${id}` : `/movie/${id}/cast`;
    
    const isReviewsPage = location.pathname.includes("reviews");
    const ReviewsLink = isReviewsPage ? `/movie/${id}` : `/movie/${id}/reviews`;

    return <div>
        
        <button onClick={goMovie} className={styles.btnGoHome}>Go back</button>
        {loading && <Loader />}
        {error && <p>Something went wrong</p>}
        {state && (
            <>
                <div className={styles.flexContainer}>
                    <img src={state.poster_path ? `https://image.tmdb.org/t/p/w500${state.poster_path}` : "https://image.tmdb.org/t/p/w500/AcKVlWaNVVVFQwro3nLXqPljcYA.jpg"} alt="" />
                    <div className={styles.infoContainer}>
                        <h2>{ `${state.title}, ${state.release_date.slice(0, 4)}`}</h2>
                        <p>User score: {state.vote_average}</p>
                        <h3>Overview</h3>
                        <p>{state.overview}</p>
                        <h4>Genres</h4>
                        <p>{ state.genres.map(({ name }) => { return name; }).join(", ")}</p>
                    
                    </div>
                </div>
                <div>
                    <h2 className={styles.title}>Additional information</h2>
                    <ul className={styles.infoList}>
                        <li ><Link state={{from}} to={castLink} className={styles.infoLink}>Cast</Link></li>
                        <li ><Link state={{from}} to={ReviewsLink} className={styles.infoLink}>Reviews</Link></li>
                    </ul>
                    <Outlet />
                </div>
                </>
        )}
    </div>;
}
export default MovieDetails;