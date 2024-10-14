import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandBackFist } from '@fortawesome/free-solid-svg-icons'
import { faHand } from '@fortawesome/free-solid-svg-icons'
import { faHandScissors } from '@fortawesome/free-solid-svg-icons'
import { faShieldHalved } from '@fortawesome/free-solid-svg-icons'
import '../styles/pages/RockPaperScissors.css'

const WINNING_SCORE = 9

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
    }
]

const PLAYERS = {
    PLAYER: "0",
    COMPUTER: "1"
}

const isPlayerWinTurn = (playerMovement, computerMovement) => {
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
    const [playerHistory, setPlayerHistory] = useState([])
    const [computerHistory, setComputerHistory] = useState([])
    const [lastTurnWinner, setLastTurnWinner] = useState(null)

    const updateScore = (playerMovement) => {

        const computerMovement = MOVEMENTS[Math.floor(Math.random() * 3)]

        // Update the movements
        const computerMovementName = computerMovement.name
        const playerMovementName = playerMovement.name

        const newMovements = [playerMovement.icon, computerMovement.icon]
        setMovements(newMovements)

        const newPlayerHistory = [...playerHistory]
        const newComputerHistory = [...computerHistory]

        newPlayerHistory.push(playerMovement.icon)
        setPlayerHistory(newPlayerHistory)

        newComputerHistory.push(computerMovement.icon)
        setComputerHistory(newComputerHistory)

        // Update the score
        if(isPlayerWinTurn(playerMovementName, computerMovementName)){
            const newScore = [...score]
            newScore[PLAYERS.PLAYER]++
            setScore(newScore)
            setLastTurnWinner(PLAYERS.PLAYER)
        } else if(isPlayerWinTurn(computerMovementName, playerMovementName)){
            const newScore = [...score]
            newScore[PLAYERS.COMPUTER]++
            setScore(newScore)
            setLastTurnWinner(PLAYERS.COMPUTER)
        }else{
            setLastTurnWinner(null)
        }

        // Check if there is a winner
        if(score[PLAYERS.PLAYER] === WINNING_SCORE || score[PLAYERS.COMPUTER] === WINNING_SCORE){
            checkWinner()
        }

    }

    const checkWinner = () => {
        if(score[PLAYERS.PLAYER] === WINNING_SCORE){
            setWinner("Player")
        }else if(score[PLAYERS.COMPUTER] === WINNING_SCORE){
            setWinner("Computer")

        }
    }

    const resetGame = () => {
        setScore(Array(2).fill(0))
        setMovements(Array(2).fill(null))
        setWinner(false)
        setPlayerHistory([])
        setComputerHistory([])
        setLastTurnWinner(null)
    }
    
    return(
        <main className='RPS'>
            <h1 className='RPS-title'>Rock, Paper, Scissors</h1>

            <section className='RPS-info' style={{
                border: lastTurnWinner === PLAYERS.PLAYER ? '2px solid var(--green)' : lastTurnWinner === PLAYERS.COMPUTER ? '2px solid var(--red)' : '2px solid var(--react)',
            }}>

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
                <h2>Historial</h2>
                <div className="RPS-historial-players">
                    <div className="RPS-historial-players-player">
                        <h3>Player</h3>
                        <div className='RPS-historial-players-player-boxes'>
                            {
                                playerHistory.map((movement, index) => {
                                    return (
                                        <i className='RPS-historial-players-player-box' key={index}>{movement}</i>
                                    )
                                })
                            }
                        </div>
                        
                    </div>
                    
                    <div className="RPS-historial-players-player">
                        <h3>Computer</h3>
                        <div className='RPS-historial-players-player-boxes'>
                            {
                                computerHistory.map((movement, index) => {
                                    return (
                                        <i className='RPS-historial-players-player-box' key={index}>{movement}</i>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>

            <section className='RPS-rules'>
            </section>

                {
                    (winner !== false) && (
                        <section className="winner">
                            <div className="RPS-winner-modal">
                                <div className="RPS-winner-modal-content">
                                    {(winner !== false) ? (
                                        <>
                                            <div className="RPS-winner-modal-content-score-header">
                                                <h1>{winner}</h1>
                                                <h2>Wins!</h2>

                                            </div>
                                            <div className="RPS-winner-modal-content-score">
                                                <h3>Final Score</h3>
                                                <p>{score[0]} - {score[1]}</p>
                                            </div>
                                            <div className="RPS-winner-modal-content-move">
                                                <h3>Winner Movement</h3>
                                                <p>{
                                                    winner === "Player" ? playerHistory[playerHistory.length - 1] : computerHistory[computerHistory.length - 1]
                                                    
                                                }</p>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <h2>Draw</h2>
                                            <h1><FontAwesomeIcon icon={faShieldHalved} /></h1>
                                            <h2>Try Again!</h2>
                                        </>
                                    )}
                                </div>

                                <button className='RPS-winner-modal-button' onClick={resetGame}>Restart</button>
                            </div>
                        </section>
                    )
                }
        </main>
    )
}

export default RockPaperScissors;