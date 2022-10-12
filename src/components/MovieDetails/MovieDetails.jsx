import { useEffect, useState, } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Loader from "components/Loader/Loader";
import { GetMovieById } from "components/GetFilms/GetFilms";
import styles from "./MovieDetails.module.css";
//import { Cast } from "components/Cast/Cast";

export const MovieDetails = () => {
    
    //const placeholderImg = 'https://image.tmdb.org/t/p/w500/AcKVlWaNVVVFQwro3nLXqPljcYA.jpg';
    const [state, setState] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const { id } = useParams();
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
    
    //const goBack = () => navigate(-1);
    const goMovie = () => navigate("/");
    
    
    return <div>
        
        <button onClick={goMovie}>Go to home</button>
        {loading && <Loader />}
        {error && <p>Something went wrong</p>}
        {state && (
            <>
                <div className={styles.flexContainer}>
                    <img src={`https://image.tmdb.org/t/p/w500${state.poster_path}`} alt="" />
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
                    <p>Additional information</p>
                    <Link to={`/movies/${id}/cast`}>Cast</Link>
                    
                    
                    <p>Reviews</p>
                </div>
                </>
        )}
    </div>;
}