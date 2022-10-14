import { useState, useEffect } from "react";
import Loader from "components/Loader/Loader";
import { useParams } from "react-router-dom";
import { GetMovieReviews } from "components/GetFilms/GetFilms";
import { ReviewsList } from "components/ReviewsList/ReviewsList";

export const Reviews = () => {
    const [state, setState] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { id } = useParams();
    
    useEffect(() => {
        const fetchReviewsById = async () => {
            try {
                setLoading(true);
                setError(null);
                const data = await GetMovieReviews(id);
                setState(data);
                
            } catch (e) {
                setError(e);
            } finally {
                setLoading(false);
            }
        }
        fetchReviewsById();
    }, [id]);
    
    return (
        <div>
            {loading && <Loader />}
            {error && <p>We don't have any reveiws for this movie</p>}
            {state && <ReviewsList item={state} />}
        </div>
    )
}