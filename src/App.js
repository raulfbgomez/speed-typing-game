import React from 'react'
import useGame from './hooks/useGame'

const App = () => {
  const {
    textBoxRef, 
    handleChange, 
    text, 
    isTimeRunning, 
    timeRemaining, 
    startGame, 
    wordCount
} = useGame(5)

  return (
    <>
      <h1>Speed Typing Game</h1>
      <textarea 
        ref={textBoxRef}
        onChange={handleChange} 
        disabled={!isTimeRunning}
        value={text} 
      />
      <h4>Time remaining: { timeRemaining }</h4>
      <button 
        onClick={startGame} 
        disabled={isTimeRunning}
      >
        Start
      </button>
      <h1>Word count: { wordCount }</h1>
    </>
  )
}

export default App