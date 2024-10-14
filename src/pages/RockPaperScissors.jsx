import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandBackFist } from '@fortawesome/free-solid-svg-icons'
import { faHand } from '@fortawesome/free-solid-svg-icons'
import { faHandScissors } from '@fortawesome/free-solid-svg-icons'
import { faShieldHalved } from '@fortawesome/free-solid-svg-icons'
import '../styles/pages/RockPaperScissors.css'


const MOVEMENTS = [
    {
        name: "Rock",
        icon: <FontAwesomeIcon icon={faHandBackFist} />
    },

    {
        name: "Paper",
        icon: <FontAwesomeIcon icon={faHand} />
    },

    {
        name: "Scissors",
        icon: <FontAwesomeIcon icon={faHandScissors} />
    },

    {
        name: "None",
        icon: <FontAwesomeIcon icon={faShieldHalved} />
    }
]

const PLAYERS = {
    PLAYER: "0",
    COMPUTER: "1"
}

const STATES = {
    PLAYING: "0",
    GAMEOVER: "1"
}

const WINNING_SCORE = 9

const isPlayerMovementWin = (playerMovement, computerMovement) => {
    if(playerMovement === computerMovement){
        return null
    }else if((playerMovement === "Rock" && computerMovement === "Scissors") || (playerMovement === "Paper" && computerMovement === "Rock") || (playerMovement === "Scissors" && computerMovement === "Paper")){
        return true
    }

    return false
}


function RockPaperScissors(){
    const [score, setScore] = useState(Array(2).fill(0))
    const [movements, setMovements] = useState(Array(2).fill(null))
    const [winner, setWinner] = useState(false)
    const playerHistory = []
    const computerHistory = []

    const updateScore = (playerMovement) => {

        const computerMovement = MOVEMENTS[Math.floor(Math.random() * 3)]

        // Update the movements
        const computerMovementName = computerMovement.name
        const playerMovementName = playerMovement.name

        const newMovements = [playerMovement.icon, computerMovement.icon]
        playerHistory.push(playerMovementName)
        computerHistory.push(computerMovementName)
        setMovements(newMovements)

        // Update the score
        if(isPlayerMovementWin(playerMovementName, computerMovementName)){
            const newScore = [...score]
            newScore[PLAYERS.PLAYER]++
            setScore(newScore)
        } else if(isPlayerMovementWin(computerMovementName, playerMovementName)){
            const newScore = [...score]
            newScore[PLAYERS.COMPUTER]++
            setScore(newScore)
        }

        // Check if there is a winner
        if(score[PLAYERS.PLAYER] === WINNING_SCORE || score[PLAYERS.COMPUTER] === WINNING_SCORE){
            setWinner(true)
        }

    }

    const resetGame = () => {
        setScore(Array(2).fill(0))
        setMovements(Array(2).fill(null))
        setWinner(false)
    }
    
    return(
        <main className='RPS'>
            <h1 className='RPS-title'>Rock, Paper, Scissors</h1>

            <section className='RPS-info'>

                <div className="RPS-info-players">
                    <div className="RPS-info-players-player">
                        <h2>{movements[0]}</h2>
                        <h3>Player</h3>
                    </div>
                    
                    <h2 className='RPS-info-versus'>VS</h2>

                    <div className="RPS-info-players-player">
                        <h2>{movements[1]}</h2>
                        <h3>Computer</h3>
                    </div>
                </div>
                

                <div className="RPS-info-score">
                    <p className="RPS-info-score-puntuation">{score[0]}</p>
                    <p className="RPS-info-score-puntuation">{score[1]}</p>
                </div>
            </section>

            <section className='RPS-movements'>
                <h2>Select your next movement</h2>

                <div className="RPS-movements-options">
                    {
                        MOVEMENTS.map((movement, index) => {
                            return (
                                <button key={index} className='RPS-movements-options-button' onClick={() => updateScore(movement)}>
                                    <i>{movement.icon}</i>
                                    <p>{movement.name}</p>
                                </button>
                            )
                        })
                    }
                </div>
            </section>

            <section className='RPS-historial'>
            </section>

            <section className='RPS-rules'>
            </section>
        </main>
    )
}

export default RockPaperScissors;