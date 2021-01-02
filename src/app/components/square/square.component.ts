import { Component, OnInit, Input } from '@angular/core';
import { Pieces, Position } from 'src/app/models/Pieces';
import { ChessBoardComponent } from '../chess-board/chess-board.component';
import { BishopComponent } from '../piecesComponents/bishop-component/bishop-component.component';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent implements OnInit {

  @Input()
  value: string;

  @Input()
  piece: Pieces
  isPopulated: boolean = false;
  brokenValue: string[];
  myStyle: object;
  position: Position;
  isLastPlayed = false;

  constructor() {
  }

  ngOnInit(): void {
    this.brokenValue = this.value?.split(',');
    this.myStyle = {
      'background': this.setColor(),
      'border-radius': this.roundCorners()
    }
    this.position = new Position(Number.parseInt(this.brokenValue[0]), Number.parseInt(this.brokenValue[1]));
  }

  resetColor(): void {
    this.isLastPlayed = false
  }

  setDestination(): void {
    this.resetColor();
    let active = ChessBoardComponent.instance.activePlayer;
    if (active.firstPosition.isSet()) {
      active.setPosition(this.position)
    }
  }

  setLastPlayed(): void {
    this.isLastPlayed = true
  }

  setColor(): string {
    let columnEven = Number.parseInt(this.brokenValue[1]) % 2 === 0;
    let rowEven = Number.parseInt(this.brokenValue[0]) % 2 === 0;

    if ((rowEven && !columnEven) || (columnEven && !rowEven)) {
      return '#F0D9B5';
    }
    else {
      return '#B58863';
    }
  }

  roundCorners(): string {
    if (this.brokenValue[0] == '0' && this.brokenValue[1] == '0') {
      return '5px 0 0 0';
    }
    else if (this.brokenValue[0] == '0' && this.brokenValue[1] == '7') {
      return '0 5px 0 0';
    }
    else if (this.brokenValue[0] == '7' && this.brokenValue[1] == '0') {
      return '0 0 0 5px';
    }
    else if (this.brokenValue[0] == '7' && this.brokenValue[1] == '7') {
      return '0 0 5px 0';
    }
  }

}
