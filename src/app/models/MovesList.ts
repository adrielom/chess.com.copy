import { Color, Position } from './Pieces'

export class MovesList {

  public moves: Position[] = [];
  public static instance: MovesList;

  public getMoveAt(index: number): Position {
    return this.moves[index];
  }

  public getLastMove(): Position {
    if (this.moves.length < 0) throw Error('no move made');
    return this.moves[this.moves.length - 1];
  }

  public addMove(position: Position): void {
    this.moves.push(position);
  }

  constructor(public color: Color) {
    if (MovesList.instance === undefined) {
      MovesList.instance = this;
    }
  }
}
