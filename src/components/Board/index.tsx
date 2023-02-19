import { useEffect, useState } from 'react';
import { initialBoard } from '../../constant'
import { Square } from '../../entities/square';
import { Team } from '../../entities/team';
import { Position } from '../Position';
import './styles.scss'

type Props = {
  isGameOver: boolean;
  onGameOver: (team?: Team) => void;
  restartGame: boolean;
  currentTeam: Team;
  changeShift: () => void;
}

export function Board({ isGameOver, onGameOver, restartGame, currentTeam, changeShift }: Props) {
  const [board, setBoard] = useState(initialBoard);
  const [winningMoveClass, setWinningMoveClass] = useState('');

  function handleSquareClick(currentSquare: Square) {
    if(currentSquare.team || isGameOver) return;

    const newBoard = board.map((square) => {
      if (square.id === currentSquare.id) {
        return {
          ...square,
          team: currentTeam,
        }
      }
      return square;
    })
    setBoard(newBoard);
    if(!verifyEndGame(newBoard)) return changeShift();
    onGameOver(currentTeam);
  }

  function verifyEndGame(board: Square[]){
    const winningCombinations = [
      { combination: [0, 1, 2], winClass: 'win-horizontal-1'},
      { combination: [3, 4, 5], winClass: 'win-horizontal-2'},
      { combination: [6, 7, 8], winClass: 'win-horizontal-3'},
      { combination: [0, 3, 6], winClass: 'win-vertical-1'},
      { combination: [1, 4, 7], winClass: 'win-vertical-2'},
      { combination: [2, 5, 8], winClass: 'win-vertical-3'},
      { combination: [0, 4, 8], winClass: 'win-diagonal-up-down'},
      { combination: [2, 4, 6], winClass: 'win-diagonal-down-up'},
    ]

    const squares = board.filter(square => square.team)

    const winningCombination = winningCombinations.find((combination) => {
      return combination.combination.every((square) => {
        return squares.find((squareTeam) => squareTeam.id === square && squareTeam.team === currentTeam)
      })
    })

    setWinningMoveClass(winningCombination?.winClass || '')

    return winningCombination
  }

  useEffect(() => {
    setBoard(initialBoard);
    setWinningMoveClass('');
  }, [restartGame])

  return (
    <div id="board" className={winningMoveClass}>
      {board.map((square) => (
        <Position key={square.id} square={square} onClick={handleSquareClick} disabled={Boolean(square.team) || isGameOver} />
      ))}
    </div>
  )
}
