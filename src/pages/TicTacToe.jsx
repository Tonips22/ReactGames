import '../styles/pages/TicTacToe.css'
import Square from '../components/TicTacToe/Square'
import { useState } from 'react'
import confetti from 'canvas-confetti'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShieldHalved } from '@fortawesome/free-solid-svg-icons'
const TURNS = {
    X: '⛌',
    O: '◯'
}

const WINNING_COMBINATIONS = [
    [0, 1, 2], // top row
    [3, 4, 5], // middle row
    [6, 7, 8], // bottom row
    [0, 3, 6], // left column
    [1, 4, 7], // middle column
    [2, 5, 8], // right column
    [0, 4, 8], // diagonal top-left to bottom-right
    [2, 4, 6] // diagonal top-right to bottom-left
]

function TicTacToe(){
    const [board, setBoard] = useState(Array(9).fill(null))
    const [turn, setTurn] = useState(TURNS.X)
    const [winner, setWinner] = useState(null) // false --> draw

    const checkWinner = (newBoard) => {
        // Check if there is a winner
        for(const combo of WINNING_COMBINATIONS){
            const [a, b, c] = combo;
            if(newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]){
                return newBoard[a];
            }
        };

        // Check if there is a draw
        if(newBoard.every(square => square !== null)){
            return false;
        }

        return null;
    }

    const resetGame = () => {
        setWinner(null)
        setTurn(TURNS.X)
        setBoard(Array(9).fill(null))
    }


    const updateBoard = (index) =>{
        // Check if the square is already filled or is a winner
        if(board[index] !== null || winner !== null) return;       

        // Update the board
        const newBoard = [...board];
        newBoard[index] = turn;
        setBoard(newBoard);

        // Update the turn
        const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
        setTurn(newTurn);

        // Check winner
        const newWinner = checkWinner(newBoard);
        console.log(newWinner)
        if(newWinner !== null){
            setWinner(newWinner);

            if(newWinner !== false){
                confetti({
                    particleCount: 200,
                    spread: 70,
                    origin: { y: 0.6 },
                  });
            }
        }
        
    }

    return (
        <main className='container-center board'>
            <h1>Tic Tac Toe</h1>
            <section className="game">
                {
                    board.map((_, index) => {
                        return (
                            <Square key={index} index={index} updateBoard={updateBoard}>
                                {board[index]}
                            </Square>
                        
                        )
                    })
                }

            </section>

            <section className="turn">
                <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
                <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
            </section>

            {
                (winner !== null) && (
                    <section className="winner">
                        <div className="winner-modal">
                            <div className="winner-modal-content">
                                {(winner !== false) ? (
                                    <>
                                        <h2>Player</h2>
                                        <h1>{winner}</h1>
                                        <h2>Wins!</h2>
                                    </>
                                ) : (
                                    <>
                                        <h2>Draw</h2>
                                        <h1><FontAwesomeIcon icon={faShieldHalved} /></h1>
                                        <h2>Try Again!</h2>
                                    </>
                                )}
                            </div>

                            <button className='winner-modal-button' onClick={resetGame}>Restart</button>
                        </div>
                    </section>
                )
            }
            
        </main>
    )
}

export default TicTacToe;