import { Component, Input, OnInit } from '@angular/core';
import { Knight } from 'src/app/models/Knight';
import { Position } from 'src/app/models/Pieces';
import { ChessBoardComponent } from '../../chess-board/chess-board.component';

@Component({
  selector: 'app-knight',
  templateUrl: './knight.component.html',
  styleUrls: ['./knight.component.scss']
})
export class KnightComponent implements OnInit {

  @Input()
  piece: Knight
  @Input()
  value: string;

  style: object

  constructor() { }

  ngOnInit(): void {
    this.style = {
      'background-image': `url(${this.piece.imageURL})`
    }
  }

  mouseDown(event: MouseEvent) {
    if (!this.piece.canBeSelected()) return;
    this.selectSquare()

    if (!this.piece.canBeMoved()) {
      console.log('cannot be moved')
      return;
    }
    console.log('knight')
    let attributes = this.value.split(',');
    ChessBoardComponent.instance.SelectedPiece = this.piece;
    ChessBoardComponent.instance.activePlayer.setPosition(new Position(Number.parseInt(attributes[0]), Number.parseInt(attributes[1])));
  }

  selectSquare(): void {
    this.piece.setConstraints()
    let square = ChessBoardComponent.instance.getSquareByValue(this.value)
    ChessBoardComponent.instance.squares.forEach(s => s.resetSelected())
    square.IsSelected = true
  }

}
