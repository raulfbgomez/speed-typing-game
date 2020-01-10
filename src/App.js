import React, { useState, useEffect, useRef } from 'react'

const App = () => {
  const TIME = 5
  const [text, setText] = useState('')
  const [timeRemaining, setTimeRemaining] = useState(TIME)
  const [isTimeRunning, setIsTimeRunning] = useState(false)
  const [wordCount, setWordCount] = useState(0)
  const textBoxRef = useRef(null)

  const handleChange = (event) => {
    const { value } = event.target
    setText(value)
  }

  const calculateWords = (str) => {
    const wordsArray =  str.trim().split(' ')
    return wordsArray.filter(word => word !== '').length
  }

  const startGame = () => {
    setIsTimeRunning(true)
    setTimeRemaining(TIME)
    setText('')
    textBoxRef.current.disabled = false
    textBoxRef.current.focus()
  }

  const endGame = () => {
    setIsTimeRunning(false)
    setWordCount(calculateWords(text))
  }

  useEffect(() => {
    if(isTimeRunning && timeRemaining > 0) {
      setTimeout(() => {
          setTimeRemaining(time => time - 1)
      }, 1000)
    } else if(timeRemaining === 0) {
      endGame()
    }
  }, [timeRemaining, isTimeRunning])

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