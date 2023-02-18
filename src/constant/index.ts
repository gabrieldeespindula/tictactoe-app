import { Square } from "../entities/square"

const initialBoard: Square[] = []
for(let i = 0; i < 9; i++) {
  initialBoard.push({id: i})
}

export { initialBoard }
