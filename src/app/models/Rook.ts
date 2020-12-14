import { Position, Pieces, Color } from '../models/Pieces'

export class Rook extends Pieces {
  imageURL: string;

  constructor(name: string, startingPosition: Position, color: Color) {
    super(name, startingPosition, color)

    this.imageURL = color === Color.white ? 'assets/images/RookWhite.svg' : 'assets/images/RookBlack.svg';

  }


  moveTo(destination: Position): void {
    throw new Error("Method not implemented.");
  }

}
