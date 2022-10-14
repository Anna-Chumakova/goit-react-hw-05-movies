export const ReviewsList = ({ item }) => {
    
    const { results, total_pages } = item.data;
    if (total_pages === 0) {
        return(<p>We don't have any reveiws for this movie</p>);
    } else {
        const element = results.map(({ author, content }) => {
        return ( <li key={content}>
            <p>Author: {author}</p>
            <p>{content}</p>
        </li>)
        })
    return (<ul>{element}</ul>); 
    }
           
}