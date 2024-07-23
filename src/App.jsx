import { useState } from 'react'
import './styles/App.css'
import Header from './components/Header.jsx'
import GameCard from './components/GameCard.jsx'
import Label from './components/Label.jsx'
import Footer from './components/Footer.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function App() {

  return (
    <>
    <Header></Header>

    <section className='hero'>
      <h1 className="hero-title">Simply web games made with <span className='hero-title-rainbow'>React</span></h1>

      <a href="https://github.com/Tonips22/ReactGames" target='blank'>
        <Label text="Repository">
          <FontAwesomeIcon icon={faGithub} />
        </Label>
      </a>
    </section>

    <section className='games' id='games'>
      <GameCard link="https://github.com/Tonips22/ReactGames">
        Tic Tac Toe
      </GameCard>

      <GameCard link="https://github.com/Tonips22/ReactGames">
        Snake
      </GameCard>

      <GameCard link="https://github.com/Tonips22/ReactGames">
        Typing Game
      </GameCard>

      <GameCard link="https://github.com/Tonips22/ReactGames">
        Rock, Paper, Scissors
      </GameCard>

      <GameCard link="https://github.com/Tonips22/ReactGames">
        Hangman
      </GameCard>

      <GameCard link="https://github.com/Tonips22/ReactGames">
        Memory Match
      </GameCard>

      <GameCard link="https://github.com/Tonips22/ReactGames">
        Simon Says
      </GameCard>
    </section>

    <Footer></Footer>
    </>
  )
}

export default App
