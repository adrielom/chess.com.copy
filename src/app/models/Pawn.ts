import { ChessBoardComponent } from '../components/chess-board/chess-board.component';
import { Position, Pieces, Color } from '../models/Pieces'
import { Delay } from './Utils'
export class Pawn extends Pieces {
  imageURL: string;
  firstMove: boolean = true;
  availableSquares: Position[] = [];

  constructor(name: string, startingPosition: Position, color: Color) {
    super(name, startingPosition, color)
    this.setConstraints();
    this.imageURL = color === Color.white ? 'assets/images/wp.png' : 'assets/images/bp.png';
  }

  canCapture(): boolean {
    let captureLeft, captureRight;
    //can capture on both sides
    if (this.position.x > 1) {
      captureLeft = this.position.x - 1;
    }
    if (this.position.x < 8) {
      captureRight = this.position.x + 1;
    }

    let posCaptureLeft = new Position(captureLeft, this.color === Color.white ? this.position.y + 1 : this.position.y - 1);
    let posCaptureRight = new Position(captureRight, this.color === Color.white ? this.position.y + 1 : this.position.y - 1);

    let pieceLeft = ChessBoardComponent.instance.getPieceByPosition(posCaptureLeft)
    let pieceRight = ChessBoardComponent.instance.getPieceByPosition(posCaptureRight)


    if (pieceLeft === undefined && pieceRight === undefined) {
      return false
    }
    else {
      if (pieceLeft !== undefined) this.availableSquares.push(posCaptureLeft)
      if (pieceRight !== undefined) this.availableSquares.push(posCaptureRight)
      return true
    }
  }

  setConstraints() {
    this.availableSquares = []
    if (this.firstMove) {
      let position1 = this.color === Color.white ? new Position(this.startingPosition.x, this.startingPosition.y + 1) : new Position(this.startingPosition.x, this.startingPosition.y - 1);
      let position2 = this.color === Color.white ? new Position(this.startingPosition.x, this.startingPosition.y + 2) : new Position(this.startingPosition.x, this.startingPosition.y - 2);
      this.availableSquares.push(position1)
      this.availableSquares.push(position2)
      this.firstMove = false;
    } else {
      let position1 = this.color === Color.white ? new Position(this.position.x, this.position.y + 1) : new Position(this.position.x, this.position.y - 1);
      if (this.isWithinBounds(position1))
        this.availableSquares.push(position1)
    }
  }

  async moveTo(destination: Position): Promise<void> {
    this.canCapture();
    let square = this.availableSquares.find(p => p.x == destination.x && p.y == destination.y);
    if (square === undefined) throw new Error('Illegal move')
    let pieceSquareDest = ChessBoardComponent.instance.getPieceByPosition(square);
    if (pieceSquareDest !== undefined && pieceSquareDest?.color === this.color) throw new Error(`square of ${square.x} ${square.y} is occupied`)
    else if (pieceSquareDest !== undefined && pieceSquareDest?.color !== this.color) {
      ChessBoardComponent.instance.capture(pieceSquareDest.selfId);
      if (ChessBoardComponent.instance.pieces.find(p => p.selfId === pieceSquareDest.selfId)) throw new Error('erro não deveria achar a instancia')

      Delay(() => {
        this.actionMove(square)
      }, 20)
      return
    }
    this.actionMove(square)
  }

}
