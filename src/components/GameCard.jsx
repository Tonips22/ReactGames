import '../styles/GameCard.css';

function GameCard({children, link}){
    return (
        <a href={link}>
            <article className='gamecard'>
                <h2> {children} </h2>
            </article>
        </a>
    )
}

export default GameCard;