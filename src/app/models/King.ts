import { Position, Pieces, Color } from '../models/Pieces'

export class King extends Pieces {
  availableSquares: Position[];
  setConstraints(): void {
    throw new Error('Method not implemented.');
  }
  imageURL: string;

  constructor(name: string, startingPosition: Position, color: Color) {
    super(name, startingPosition, color)

    this.imageURL = color === Color.white ? 'assets/images/KingWhite.svg' : 'assets/images/KingBlack.svg';

  }


  moveTo(destination: Position): void {
    throw new Error("Method not implemented.");
  }

}
