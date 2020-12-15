import { Position, Pieces, Color } from '../models/Pieces'

export class Bishop extends Pieces {
  availableSquares: Position[];
  setConstraints(): void {
    throw new Error('Method not implemented.');
  }
  imageURL: string;

  constructor(name: string, startingPosition: Position, color: Color) {
    super(name, startingPosition, color)

    this.imageURL = color === Color.white ? 'assets/images/BishopWhite.svg' : 'assets/images/BishopBlack.svg';

  }

  moveTo(destination: Position): void {
    throw new Error("Method not implemented.");
  }

}
