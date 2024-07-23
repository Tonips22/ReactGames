import '../styles/pages/TicTacToe.css'
import Square from '../components/TicTacToe/Square'
import { useState } from 'react'
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
        if(board.every(square => square !== null)){
            return false;
        }

        return null;
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
        if(newWinner !== null){
            setWinner(newWinner);
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
            
        </main>
    )
}

export default TicTacToe;