

export const MovieDetails = ({ id, title, poster_path }) => {
    const poster = `https://image.tmdb.org/t/p/w500${poster_path}`;
    //const placeholderImg =
    //    'https://image.tmdb.org/t/p/w500/AcKVlWaNVVVFQwro3nLXqPljcYA.jpg';
    return <div>
        <img src={poster } alt={title} />
    </div>;
}