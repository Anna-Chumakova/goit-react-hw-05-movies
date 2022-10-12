import { MovieDetails } from "components/MovieDetails/MovieDetails";
import { useState, useEffect } from "react";
// import { GetMovieById } from "components/GetFilms/GetFilms";
import Loader from "components/Loader/Loader";

export const Movie = (props) => {
    // const [item, setItem] = useState([]);
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState(null);

    // useEffect(() => {
    //     const fetchMovieById = async () => {
    //         try {
    //             setLoading(true);
    //             const data = await GetMovieById();
    //             setItem(data.results);
    //         } catch (error) {
    //             setError(error);
    //         } finally {
    //             setLoading(false);
    //         }
    //     };
    //     fetchMovieById(id);
        
    // }, [])

    
    return (
        <div>
            {/* {loading && <Loader />}
            {<MovieDetails item={ item} />}
            {error && <p>Будь ласка спробуйте пізніше...</p>} */}
            hello
        </div>
    );
}