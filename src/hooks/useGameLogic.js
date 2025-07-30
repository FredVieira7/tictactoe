import { useCallback } from 'react'

export const useGameLogic = () => {
  const getRandomEmptyIndex = useCallback((board) => {
    const emptyIndices = board
      .map((val, idx) => (val === null ? idx : null))
      .filter((val) => val !== null)
    const randomIndex = Math.floor(Math.random() * emptyIndices.length)
    return emptyIndices[randomIndex]
  }, [])

  const checkWinner = useCallback((board) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
    for (let [a, b, c] of lines) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a]
      }
    }
    return null
  }, [])

  const getStatusMessage = useCallback(({
    gameOver,
    winner,
    scores,
    board,
    currentPlayer
  }) => {
    if (gameOver) {
      const winnerPlayer = scores.X === 11 ? 'X' : 'O'
      return `Jogador ${winnerPlayer} venceu o jogo!`
    }

    if (winner) {
      return `Vitória do ${winner} na rodada ${scores[winner]}`
    }

    if (board.every((c) => c !== null)) {
      return 'Empate'
    }

    return `Jogador: ${currentPlayer}`
  }, [])

  const updateGameState = useCallback(({
    board,
    player,
    checkWinner,
    scores,
    setBoard,
    setWinner,
    setScores,
    setGameOver,
    setCurrentPlayer,
    setTimer,
  }) => {
    const newWinner = checkWinner(board)
    setBoard(board)
    setWinner(newWinner)

    if (newWinner) {
      const updatedScores = {
        ...scores,
        [newWinner]: scores[newWinner] + 1,
      }
      setScores(updatedScores)

      if (updatedScores[newWinner] === 11) {
        setGameOver(true)
      }
    } else if (board.every((cell) => cell !== null)) {
      setWinner(null)
    }

    setCurrentPlayer(player === 'X' ? 'O' : 'X')
    setTimer(5)
  }, [])

  return {
    getRandomEmptyIndex,
    checkWinner,
    getStatusMessage,
    updateGameState,
  }
}
