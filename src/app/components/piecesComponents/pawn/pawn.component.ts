import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Pawn } from 'src/app/models/Pawn';
import { Color, Position } from 'src/app/models/Pieces';
import { ChessBoardComponent } from '../../chess-board/chess-board.component';

@Component({
  selector: 'app-pawn',
  templateUrl: './pawn.component.html',
  styleUrls: ['./pawn.component.scss']
})
export class PawnComponent implements OnInit {

  @Input()
  piece: Pawn
  @Input()
  value: string;

  style: object
  interval: any

  constructor() { }

  ngOnInit(): void {
    this.style = {
      'background-image': `url(${this.piece.imageURL})`,
    }
  }

  mouseDown(event: MouseEvent) {
    if (!this.piece.canBeSelected()) return;
    this.selectSquare()
    if (!this.piece.canBeMoved() && !this.piece.canCapture() && ChessBoardComponent.instance.activePlayer.firstPosition === undefined) {
      console.log('cannot be moved')
      return;
    }
    let attributes = this.value.split(',');
    ChessBoardComponent.instance.SelectedPiece = this.piece;
    ChessBoardComponent.instance.activePlayer.setPosition(new Position(Number.parseInt(attributes[0]), Number.parseInt(attributes[1])));
  }

  selectSquare(): void {
    console.log('yo')
    let square = ChessBoardComponent.instance.getSquareByValue(this.value)
    ChessBoardComponent.instance.squares.forEach(s => s.resetSelected())
    square.IsSelected = true
  }

}
