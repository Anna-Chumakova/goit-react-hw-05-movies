import { GetPopularMovie } from "components/GetFilms/GetFilms"
import { useState, useEffect } from "react";
import Loader from "components/Loader/Loader";

export const Home = () => {
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchMovies = async () => {
            try {
                setLoading(true);
                const data = await GetPopularMovie();
                setItem(data.results);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }
        fetchMovies();
    }, []);
    const isMovies = Boolean(item.length);    
    return (
        <div>
            {loading && <Loader />}
            {isMovies && item.map((results) => {
                return <li key={results.id}>
                    {results.title ? results.title : results.name}
                </li>
            })}
            {error && <p>Будь ласка спробуйте пізніше...</p>}
        </div>
    )
    
}