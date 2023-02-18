import { initialBoard } from '../../constant'
import './styles.scss'

export function Board() {

  return (
    <div id="board">
      {initialBoard.map((square) => (
        <div key={square.id} className={`square border-${square.id}`}>
        </div>
      ))}
    </div>
  )
}
