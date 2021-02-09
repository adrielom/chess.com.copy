import { Position, Pieces, Color } from '../models/Pieces'

export class Bishop extends Pieces {

  availableSquares: Position[];
  imageURL: string;

  constructor(name: string, startingPosition: Position, color: Color) {
    super(name, startingPosition, color)

    this.imageURL = color === Color.white ? 'assets/images/wb.png' : 'assets/images/bb.png';

  }
  canCapture() {
    throw new Error('Method not implemented.');
  }

  setConstraints(): void {
    throw new Error('Method not implemented.');
  }
  moveTo(destination: Position): void {
    throw new Error("Method not implemented.");
  }

  canBeMoved(): boolean {
    throw new Error('Method not implemented.');
  }

}
