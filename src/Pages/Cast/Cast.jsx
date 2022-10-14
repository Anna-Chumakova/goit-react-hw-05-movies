import { GetMovieCast } from "components/GetFilms/GetFilms";
import { useState, useEffect } from "react";
import Loader from "components/Loader/Loader";
import { useParams } from "react-router-dom";
import { CastList } from "components/CastList/CastList";

export const Cast = () => {
    const [state, setState] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { id} = useParams();
    useEffect(() => {
        const fetchCastById = async () => {
            try {
                setLoading(true);
                setError(null);
                const data = await GetMovieCast(id);
                setState(data);
            } catch (e) {
                setError(e);
            } finally {
                setLoading(false);
            }
        }
        fetchCastById();
    }, [id]);
    
    return (
        <div>
            {loading && <Loader />}
            {error && <p>Something went wrong</p>}
            {state && <CastList item={ state.cast} />}
        </div>
    )
}