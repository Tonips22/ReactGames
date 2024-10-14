import '../styles/pages/Home.css'
import GameCard from '../components/GameCard.jsx'
import Label from '../components/Label.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function Home() {
  return (
    <>
      <section className='hero'>
        <h1 className="hero-title">Simply web games made with <span className='hero-title-rainbow'>React</span></h1>

        <a href="https://github.com/Tonips22/ReactGames" target='_blank'>
          <Label text="Repository">
            <FontAwesomeIcon icon={faGithub} />
          </Label>
        </a>
      </section>

      <section className='games' id='games'>
        <GameCard link="/TicTacToe">
          Tic Tac Toe
        </GameCard>

        <GameCard link="/RockPaperScissors" >
          Rock, Paper, Scissors
        </GameCard>

        <GameCard link="/TicTacToe" active={false}>
          Snake
        </GameCard>

        <GameCard link="/TicTacToe" active={false}>
          Typing Game
        </GameCard>

        <GameCard link="/TicTacToe" active={false}>
          Hangman
        </GameCard>

        <GameCard link="/TicTacToe" active={false}>
          Memory Match
        </GameCard>

        <GameCard link="/TicTacToe" active={false}>
          Simon Says
        </GameCard>
      </section>
    </>
  );
}

export default Home;
