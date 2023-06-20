import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const initialSquares = Array(9).fill(null)
  const [squares, setSquares] = useState(Array(9).fill(null))

  const [user, setUser] = useState(true)
  const [gameOver, setgameOver] = useState(false)
  const [tempArray, settempArray] = useState([])

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    console.table(lines)
    //here we preset the winning combinations
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        setgameOver(true)
        alert (`${squares[a]}' is the winner!'`)
        //return squares[a];
      }
    }
    return null;
  }
  
  const buttonClick = (selectedSquare) => {
    if(gameOver) {
      alert ("Game over, restart")
      return
      }
      else if (squares[selectedSquare]) {
        alert("Pick another square!")
      
    } else {
      // settempArray([...tempArray, selectedSquare])
      squares[selectedSquare] = user ? "X" : "O"
      setUser(!user)  
      calculateWinner(squares)
    }
  } 
  const restart = () => {
    setSquares(initialSquares)
    // settempArray([])
    setgameOver(false)
    setUser(true)

  }
  

  return (
    <>
  <h1 style={{ textAlign: 'center', color: 'red' }}>Tic Tac Toe</h1>
      <Square squares={squares} buttonClick ={buttonClick} />
     <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} className="restart-button">  <button style={{color: 'red'}} onClick={restart}>Restart</button>  
     </div> 

    
     
    </>
  )

}


export default App
  