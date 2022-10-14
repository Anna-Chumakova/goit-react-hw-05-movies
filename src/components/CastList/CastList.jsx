export const CastList = ({ item }) => {
    const element = item.map(({ name, credit_id, character, profile_path }) => {
    
        return (profile_path && <li key={credit_id}>
            <img src={`https://image.tmdb.org/t/p/w500${profile_path}`} alt="name" />
            <p>{name}</p>
            <p>{character}</p></li>)
    })
    return (<ul>{ element}</ul>)
}