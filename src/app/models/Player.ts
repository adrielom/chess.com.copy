import { Color, Pieces, Position } from './Pieces'
import { Command } from './Command'
import { ChessBoardComponent } from '../components/chess-board/chess-board.component'

export class Player {
  constructor(public name: string, public color: Color) {

  }

  listOfMoves: Command[] = []
  listOfPieces: Pieces[] = []
  firstPosition: Position = new Position(-1, -1);
  lastPosition: Position = new Position(-1, -1);

  setPosition(position: Position): void {
    if (!this.firstPosition.isSet()) {
      this.firstPosition = position;
    } else if (!this.lastPosition.isSet()) {
      this.lastPosition = position
      this.makeMove()
    }
  }

  async makeMove(): Promise<void> {
    let command = new Command(this.color, this.firstPosition, this.lastPosition);
    this.listOfMoves.push(command)
    await ChessBoardComponent.instance.newMove(command);
    this.endTurn()
  }

  endTurn(): void {
    ChessBoardComponent.instance.SetActivePlayer()
  }

  cleanUp(): void {
    this.firstPosition = new Position(-1, -1);
    this.lastPosition = new Position(-1, -1);
  }

}
