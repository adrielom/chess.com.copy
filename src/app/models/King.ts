import { Position, Pieces, Color } from '../models/Pieces'

export class King extends Pieces {

  availableSquares: Position[];
  imageURL: string;

  setConstraints(): void {
    throw new Error('Method not implemented.');
  }

  constructor(name: string, startingPosition: Position, color: Color) {
    super(name, startingPosition, color)

    this.imageURL = color === Color.white ? 'assets/images/KingWhite.svg' : 'assets/images/KingBlack.svg';

  }
  canCapture() {
    throw new Error('Method not implemented.');
  }

  moveTo(destination: Position): void {
    throw new Error("Method not implemented.");
  }
  canBeMoved(): boolean {
    throw new Error('Method not implemented.');
  }

}
