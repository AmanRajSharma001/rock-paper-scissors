import { useState } from 'react'
import './app.css'

function App() {
  const [playerMove, setPlayerMove] = useState("");
  const [computerMove, setComputerMove] = useState("")
  const [playerWin, setPlayerWin] = useState(0);
  const [computerWin, setComputerWin] = useState(0);
  const [Matchcount,setCount] = useState(0);
  const [Streak,setStreak] = useState(0);
  const [matchResult, setMatchResult] = useState("");

  const emojis = {"Rock": '🪨', "Paper" : '📃', "Scissor" : '✂️'}
  const computerMoves = ['Rock','Paper','Scissor']

  function handleClick(playerSelection){
    const compSelection = computerMoves[Math.floor(Math.random() * computerMoves.length)];
    setPlayerMove(playerSelection)
    setComputerMove(compSelection)
    if (playerSelection === compSelection){
      setMatchResult("It's a Tie!");
    } else if (
      (playerSelection === 'Rock' && compSelection === 'Scissor') ||
      (playerSelection === 'Paper' && compSelection === 'Rock') ||
      (playerSelection === 'Scissor' && compSelection === 'Paper')
    ){
      setPlayerWin(p => p + 1)
      setStreak(Streak+1)
      setMatchResult("You Win!");
    } else {
      setComputerWin(c => c + 1)
      setStreak(0)
      setMatchResult("You Lose!");
    }
    setCount(Matchcount+1)
  }

  function handleReset(){
    setPlayerMove("")
    setComputerMove("")
    setPlayerWin(0)
    setComputerWin(0)
    setCount(0)
    setStreak(0)
    setMatchResult("")
  }
  return (
    <div className="container">
      <h1 className="header">Rock Paper Scissors</h1>
      
      <div className="scoreboard">
        <h3>Player: {playerWin}</h3>
        <h3>Computer: {computerWin}</h3>
      </div>

      <div className="moves">
        <h2>{playerMove ? emojis[playerMove] : '❓'} - {computerMove ? emojis[computerMove] : '❓'}</h2>
        {matchResult && <h3 className="result-text">{matchResult}</h3>}
      </div>

      <div className="buttons">
        <button className="button" onClick={() => handleClick("Rock")}>🪨</button>
        <button className="button" onClick={() => handleClick("Paper")}>📃</button>
        <button className="button" onClick={() => handleClick("Scissor")}>✂️</button>
      </div>

      <button className="button reset" onClick={handleReset}>RESTART</button>
      
      <div className="stats">
        <h3>Total Matches: {Matchcount}</h3>
        <h3>Win Streak: {Streak}</h3>
      </div>
    </div>
  )
}

export default App
