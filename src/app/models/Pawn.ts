import { ChessBoardComponent } from '../components/chess-board/chess-board.component';
import { Position, Pieces, Color } from '../models/Pieces'

export class Pawn extends Pieces {
  availableSquares: Position[] = [];
  imageURL: string;
  firstMove: boolean = true;

  constructor(name: string, startingPosition: Position, color: Color) {
    super(name, startingPosition, color)
    this.setConstraints();
    this.imageURL = color === Color.white ? 'assets/images/PawnWhite.svg' : 'assets/images/PawnBlack.svg';
  }

  setConstraints() {
    if (this.firstMove) {
      let position1 = this.color === Color.white ? new Position(this.startingPosition.x, this.startingPosition.y + 1) : new Position(this.startingPosition.x, this.startingPosition.y - 1);
      let position2 = this.color === Color.white ? new Position(this.startingPosition.x, this.startingPosition.y + 2) : new Position(this.startingPosition.x, this.startingPosition.y - 2);
      this.availableSquares.push(position1)
      this.availableSquares.push(position2)
    }
  }

  moveTo(destination: Position): void {
    this.availableSquares.forEach(s => console.log(s.x + ' ' + s.y))
    let square = this.availableSquares.find(p => p.x == destination.x && p.y == destination.y);
    if (square === undefined) throw new Error('Illegal move')
    this.position = square;
  }

}
