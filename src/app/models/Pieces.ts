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

  constructor(public name: string, public startingPosition: Position, public color: Color) {
    this.position = startingPosition;
    this.selfId = Pieces.id;
    Pieces.id++;
  }

  isWithinBounds(destination: Position): boolean {
    if (destination.x > 7 || destination.x < 0) return false;
    if (destination.y > 7 || destination.y < 0) return false;
    else return true;
  }

  get Piece(): Pieces {
    return this;
  }

  abstract canCapture(): any;

  abstract canBeMoved(): boolean;

  abstract setConstraints(): void;

  abstract moveTo(destination: Position): void;
}
