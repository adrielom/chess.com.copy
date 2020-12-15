import { Position, Pieces, Color } from '../models/Pieces'

export class Knight extends Pieces {
  availableSquares: Position[];
  setConstraints(): void {
    throw new Error('Method not implemented.');
  }
  imageURL: string;

  constructor(name: string, startingPosition: Position, color: Color) {
    super(name, startingPosition, color)

    this.imageURL = color === Color.white ? 'assets/images/KnightWhite.svg' : 'assets/images/KnightBlack.svg';

  }


  moveTo(destination: Position): void {
    throw new Error("Method not implemented.");
  }

}
