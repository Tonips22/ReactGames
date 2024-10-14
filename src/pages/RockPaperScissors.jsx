import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandBackFist } from '@fortawesome/free-solid-svg-icons'
import { faHand } from '@fortawesome/free-solid-svg-icons'
import { faHandScissors } from '@fortawesome/free-solid-svg-icons'
import { faShield } from '@fortawesome/free-solid-svg-icons'


const MOVEMENTS = [
    {
        name: "Rock",
        image: <FontAwesomeIcon icon={faHandBackFist} />
    },

    {
        name: "Paper",
        image: <FontAwesomeIcon icon={faHand} />
    },

    {
        name: "Scissors",
        image: <FontAwesomeIcon icon={faHandScissors} />
    },

    {
        name: "None",
        image: <FontAwesomeIcon icon={faShield} />
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




function RockPaperScissors(){
    const [score, setScore] = useState(Array(2).fill(0))
    const [movements, setMovements] = null
    const [winner, setWinner] = useState(false)
    
    return(
        <main className='RPS'>
            <h1 className='RPS-title'>Rock, Paper, Scissors</h1>

            <section className='RPS-score'>
            </section>

            <section className='RPS-movements'>
            </section>

            <section className='RPS-historial'>
            </section>

            <section className='RPS-rules'>
            </section>
        </main>
    )
}

export default RockPaperScissors;