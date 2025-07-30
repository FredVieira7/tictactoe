import styled from 'styled-components'

export const ScoreBoard = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
`

export const ScoreBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ isActive }) => (isActive ? '#e0e0e0' : '#f4f4f4')};
  padding: 1rem 1.5rem;
  border-radius: 8px;
  box-shadow: ${({ isActive }) =>
    isActive ? '0 0 8px rgba(0,0,0,0.2)' : '0 2px 6px rgba(0,0,0,0.1)'};
  transition: all 0.3s ease;
`

export const PlayerLabel = styled.span`
  font-weight: bold;
  color: ${({ color }) => color};
  font-size: 1.2rem;
`

export const ScoreValue = styled.span`
  font-size: 1.8rem;
  margin-top: 0.25rem;
  color: ${({ color }) => color};
  font-weight: bold;
`

export const TimerDisplay = styled.span`
  font-size: 1rem;
  margin-top: 0.35rem;
  font-weight: bold;
  color: #666;
`

export const BoardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-gap: 12px;
  justify-content: center;
  margin-top: 2rem;
`

export const Cell = styled.button`
  width: 80px;
  height: 80px;
  font-size: 2rem;
  font-weight: bold;
  border: 2px solid #000;
  background-color: ${({ color }) => color};
  color: ${({ textColor }) => textColor}; 
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:disabled {
    opacity: 0.6;
    cursor: default;
  }
`


export const StatusText = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  color: ${({ textColor }) => textColor};
  margin-bottom: 1rem;
  transition: color 0.3s ease;
`

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
`

export const InfoPanel = styled.div`
  text-align: center;
  color: black;
  margin-top: 1.5rem;
  font-size: 1.2rem;
`

export const ResetButton = styled.button`
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  background-color: ${({ danger }) => (danger ? '#f44336' : '#4CAF50')};
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ danger }) => (danger ? '#d32f2f' : '#45a049')};
  }

  &:disabled {
    background-color: #ccc;
    color: #888;
    cursor: not-allowed;
  }
`

