import { Position, Pieces, Color } from '../models/Pieces'

export class Queen extends Pieces {

  availableSquares: Position[];
  imageURL: string;

  setConstraints(): void {
    throw new Error('Method not implemented.');
  }

  canCapture() {
    throw new Error('Method not implemented.');
  }
  constructor(name: string, startingPosition: Position, color: Color) {
    super(name, startingPosition, color)

    this.imageURL = color === Color.white ? 'assets/images/wq.png' : 'assets/images/bq.png';
  }

  moveTo(destination: Position): void {
    throw new Error("Method not implemented.");
  }
  canBeMoved(): boolean {
    throw new Error('Method not implemented.');
  }

}
