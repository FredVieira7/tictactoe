import { useEffect, useState } from 'react'
import { useGameLogic } from '../../hooks/useGameLogic'
import { loadFromStorage, saveToStorage } from '../../utils/storage'
import Footer from '../Footer'
import Toast from '../Toast'
import {
  BoardContainer,
  BoardContent,
  BoardWrapper,
  ButtonsWrapper,
  Cell,
  InfoPanel,
  PlayerLabel,
  ResetButton,
  ScoreBoard,
  ScoreBox,
  ScoreValue,
  StatusText,
  TimerDisplay
} from './styles'

const Board = ({ colors }) => {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [currentPlayer, setCurrentPlayer] = useState('X')
  const [winner, setWinner] = useState(null)
  const [timer, setTimer] = useState(5)
  const [scores, setScores] = useState({ X: 0, O: 0 })
  const [gameOver, setGameOver] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState('')
  const { getRandomEmptyIndex, checkWinner, getStatusMessage, updateGameState } = useGameLogic()

  useEffect(() => {
    if (winner || board.every((cell) => cell !== null)) return

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [board, winner])

  useEffect(() => {
    if (timer === 0 && !winner && board.some((cell) => cell === null)) {
      autoPlay()
    }
  }, [timer])


  const autoPlay = () => {
    const index = getRandomEmptyIndex(board)
    if (index === undefined || winner) return

    const newBoard = [...board]
    newBoard[index] = currentPlayer
    updateGameState({
      board: newBoard,
      player: currentPlayer,
      checkWinner,
      scores,
      setBoard,
      setWinner,
      setScores,
      setGameOver,
      setCurrentPlayer,
      setTimer
    })
    
  }

  const handleClick = (index) => {
    if (board[index] || winner) return

    const newBoard = [...board]
    newBoard[index] = currentPlayer
    updateGameState({
      board: newBoard,
      player: currentPlayer,
      checkWinner,
      scores,
      setBoard,
      setWinner,
      setScores,
      setGameOver,
      setCurrentPlayer,
      setTimer
    })
    
  }

  const resetBoard = () => {
    setBoard(Array(9).fill(null))
    setWinner(null)
    setTimer(5)
  }

  const resetScores = () => {
    setScores({ X: 0, O: 0 })
    setBoard(Array(9).fill(null))
    setWinner(null)
    setCurrentPlayer('X')
    setTimer(5)
    setGameOver(false)
  }

  const triggerToast = (message) => {
    setToastMessage(message)
    setShowToast(true)
    setTimeout(() => setShowToast(false), 3000)
  }

  const handleSave = () => {
    saveToStorage('tictactoe.scores', scores)
    triggerToast('Placar salvo com sucesso!')
  }

  const handleLoad = () => {
    const loaded = loadFromStorage('tictactoe.scores')
    if (loaded) {
      setScores(loaded)
      triggerToast('Placar carregado com sucesso!')
    }
  }

  return (
      <BoardContainer>
        <BoardContent>
          <ScoreBoard>
            <ScoreBox isActive={currentPlayer === 'X'}>
              <PlayerLabel color={colors.x}>Jogador X</PlayerLabel>
              <ScoreValue color={colors.x}>{scores.X}</ScoreValue>
              {currentPlayer === 'X' && <TimerDisplay>⏱️ {timer}s</TimerDisplay>}
            </ScoreBox>
            <ScoreBox isActive={currentPlayer === 'O'}>
              <PlayerLabel color={colors.o}>Jogador O</PlayerLabel>
              <ScoreValue color={colors.o}>{scores.O}</ScoreValue>
              {currentPlayer === 'O' && <TimerDisplay>⏱️ {timer}s</TimerDisplay>}
            </ScoreBox>
          </ScoreBoard>
    
          <BoardWrapper>
            {board.map((cell, i) => (
              <Cell
                key={i}
                onClick={() => handleClick(i)}
                disabled={!!cell || !!winner}
                color={colors.board}
                textColor={
                  cell === 'X' ? colors.x : cell === 'O' ? colors.o : colors.text
                }
              >
                {cell}
              </Cell>
            ))}
          </BoardWrapper>
    
          <InfoPanel>
            <StatusText textColor={colors.text}>
              {getStatusMessage({ gameOver, winner, scores, board, currentPlayer })}
            </StatusText>
    
            <ButtonsWrapper>
              <ResetButton onClick={resetBoard} disabled={gameOver}>
                Nova Rodada
              </ResetButton>
              <ResetButton danger onClick={resetScores}>Resetar Placar</ResetButton>
            </ButtonsWrapper>
          </InfoPanel>
        </BoardContent>
    
        <Footer onSave={handleSave} onLoad={handleLoad} />
        {showToast && <Toast>{toastMessage}</Toast>}
      </BoardContainer>
    
    
  )
}

export default Board
