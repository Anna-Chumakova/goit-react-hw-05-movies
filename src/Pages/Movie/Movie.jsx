import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { GetMovieSearch } from "components/GetFilms/GetFilms";
import Loader from "components/Loader/Loader";
import { SearchForm } from "./SearchForm/SearchForm";
import { SearchMovieList } from "components/SearchMovieList/SearchMovie";

const Movie = () => {
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();

    const searchQuery = searchParams.get("searchQuery");

    useEffect(() => {
    const fetchMovies = async() => {

        try {
            setLoading(true);
            setError(null);
            const data = await GetMovieSearch(searchQuery); 
            setItem( data.data);
        } catch (error) {
            setError(error)
        }
        finally {
            setLoading(false);
        }
    }
        if (searchQuery) {
        fetchMovies(); 
        }
          
    }, [searchQuery])
    
    const onSearch = ({search} ) => {
        if (search === "") {
            return alert("Please enter text and try again.");
        }
        setSearchParams({ searchQuery: search });
        
    }

    return (
        <>
            <SearchForm onSubmit={onSearch} />
            {loading && <Loader />}
            {item && <SearchMovieList item={item} />} 
            {error && <p>Please try later...</p>}
        </>
    )
}
export default Movie;