export class Position {
  constructor(public x: number, public y: number) { }
}

export enum Color { white, black }

export abstract class Pieces {
  position: Position;

  abstract imageURL: string;

  constructor(public name: string, public startingPosition: Position, public color: Color) {
    this.position = startingPosition;
  }

  isWithinBounds(destination: Position): boolean {
    if (destination.x > 7 || destination.x < 0) return false;
    if (destination.y > 7 || destination.y < 0) return false;
    else return true;
  }

  abstract moveTo(destination: Position): void;
}
