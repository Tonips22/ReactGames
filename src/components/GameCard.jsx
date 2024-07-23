import '../styles/GameCard.css';
import { Link } from 'react-router-dom';

function GameCard({children, link}){
    return (
        <Link to={link}>
            <article className='gamecard'>
                <h2> {children} </h2>
            </article>
        </Link>
    )
}

export default GameCard;