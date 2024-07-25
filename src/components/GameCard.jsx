import '../styles/GameCard.css';
import { Link } from 'react-router-dom';

function GameCard({children, link, active = true}){
    const className = active ? 'gamecard' : 'disable gamecard';
    const newLink = active ? link : '#';
    const text = active ? children : 'Coming soon...';
    return (
        <Link to={newLink}>
            <article className={className}>
                <h2> {text} </h2>
            </article>
        </Link>
    )
}

export default GameCard;