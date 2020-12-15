import { MovesList } from './MovesList';
import { Color, Position, Pieces } from './Pieces'

export class Command {
  constructor(public color: Color, public from: Position, public to: Position) {
  }

  executeCommand(piece: Pieces): void {
    piece.moveTo(this.to)
    console.log(piece)
    // MovesList.instance.addMove(this.to);
  }

}
