import { ChessBoardComponent } from '../components/chess-board/chess-board.component';
import { Position, Pieces, Color } from '../models/Pieces'

export class Knight extends Pieces {

  availableSquares: Position[] = [];
  imageURL: string;
  range: Position[] = []

  setConstraints(): void {
    this.setRangeBasedOnPosition()
    this.range?.forEach(r => {
      let square = ChessBoardComponent.instance.getSquareByValue(`${r.x},${r.y}`)
      if (this.isWithinBounds(r) && square !== undefined) {
        let piece = ChessBoardComponent.instance.getPieceByXY(r.x, r.y)
        if (!square.IsPopulated && piece?.color !== this.color) {
          this.availableSquares.push(r)
        }
      }
    })
    console.log(this.availableSquares.length)

  }

  setRangeBasedOnPosition(): void {
    this.range = []
    this.availableSquares = []

    let topLeftCorner: Position = new Position(this.position.x - 1, this.position.y + 1);
    let topRightCorner: Position = new Position(this.position.x + 1, this.position.y + 1);
    let bottomLeftCorner: Position = new Position(this.position.x - 1, this.position.y - 1);
    let bottomRightCorner: Position = new Position(this.position.x + 1, this.position.y - 1);

    this.range.push(new Position(topLeftCorner.x - 1, topLeftCorner.y))
    this.range.push(new Position(topLeftCorner.x, topLeftCorner.y + 1))

    this.range.push(new Position(topRightCorner.x + 1, topRightCorner.y))
    this.range.push(new Position(topRightCorner.x, topRightCorner.y + 1))

    this.range.push(new Position(bottomLeftCorner.x - 1, bottomLeftCorner.y))
    this.range.push(new Position(bottomLeftCorner.x, bottomLeftCorner.y - 1))

    this.range.push(new Position(bottomRightCorner.x + 1, bottomRightCorner.y))
    this.range.push(new Position(bottomRightCorner.x, bottomRightCorner.y - 1))
  }

  constructor(name: string, startingPosition: Position, color: Color) {
    super(name, startingPosition, color)

    this.imageURL = color === Color.white ? 'assets/images/KnightWhite.svg' : 'assets/images/KnightBlack.svg';
    this.position = this.startingPosition
  }

  canCapture() {
    throw new Error('Method not implemented.');
  }

  moveTo(destination: Position): void {
    this.setConstraints()
    let destinationIsAvailable: Position
    console.log(this.availableSquares)
    this.availableSquares.forEach(p => {
      if (p.x === destination.x && p.y === destination.y) {
        destinationIsAvailable = p
      }
    })
    if (destinationIsAvailable === undefined) throw new Error('Illegal move - Knight cannot move to this square')
    let destinationPiece = ChessBoardComponent.instance.getPieceByPosition(destination)
    if (destinationPiece !== undefined) {
      console.log('dest is not empty')
      ChessBoardComponent.instance.capture(destinationPiece.selfId);
    }
    else {
      console.log('bla')
    }

    this.actionMove(destination)

  }

  canBeMoved(): boolean {
    throw new Error('Method not implemented.');
  }

}
