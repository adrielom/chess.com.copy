import { ChessBoardComponent } from "../components/chess-board/chess-board.component";
import { SquareComponent } from "../components/square/square.component";

export class Position {
  constructor(public x: number, public y: number) { }

  isSet(): boolean {
    if (this.x === -1 && this.y === -1) return false;
    return true;
  }
}

export enum Color { white, black }

export abstract class Pieces {
  position: Position;

  abstract imageURL: string;
  abstract availableSquares: Position[]
  public static id = 0;
  public selfId: number;
  public correspondentSquare: SquareComponent

  constructor(public name: string, public startingPosition: Position, public color: Color) {
    this.position = startingPosition;
    this.selfId = Pieces.id;
    Pieces.id++;
  }

  isWithinBounds(destination: Position): boolean {
    if (destination.x > 8 || destination.x < 1) return false;
    if (destination.y > 8 || destination.y < 1) return false;
    else return true;
  }

  get Piece(): Pieces {
    return this;
  }

  abstract setConstraints(): void;

  abstract moveTo(destination: Position): void;

  canBeMoved(): boolean {
    if (ChessBoardComponent.instance.activePlayer.color === Color.white) {
      if (ChessBoardComponent.instance.player1.listOfPieces.find(p => p.Piece === this)) return true
    }
    else if (ChessBoardComponent.instance.activePlayer.color === Color.black) {
      if (ChessBoardComponent.instance.player2.listOfPieces.find(p => p.Piece === this)) return true
    }
    else return false
  }

  emptyCorrespondetSquare() {
    console.log('here')
    if (this.correspondentSquare !== undefined)
      this.correspondentSquare.IsPopulated = false;
  }

  setCorrespondetSquare() {
    this.correspondentSquare = ChessBoardComponent.instance.getSquareByValue(`${this.position.x},${this.position.y}`)
    this.correspondentSquare.IsPopulated = true;
    console.log(this.correspondentSquare)
  }


  canBeSelected() {
    let chessboard = ChessBoardComponent.instance;
    if (this.Piece.color === chessboard.activePlayer.color && chessboard.activePlayer.lastPosition !== new Position(-1, -1))
      return true;
    else return false;
  }


  actionMove(square: Position) {
    this.emptyCorrespondetSquare()
    this.position = square
    this.setCorrespondetSquare()
    this.setConstraints()
  }

}
