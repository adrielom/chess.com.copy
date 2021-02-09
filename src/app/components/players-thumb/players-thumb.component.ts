import { Component, Input, OnInit } from '@angular/core';
import { Player } from 'src/app/models/Player';
import { ChessBoardComponent } from '../chess-board/chess-board.component';

@Component({
  selector: 'app-players-thumb',
  templateUrl: './players-thumb.component.html',
  styleUrls: ['./players-thumb.component.scss']
})
export class PlayersThumbComponent implements OnInit {

  @Input() player: Player;
  @Input() top: boolean
  @Input() bottom: boolean

  constructor() { }

  isPlayerActive() {
    if (this.player === ChessBoardComponent.instance.activePlayer) return true
    else return false
  }

  ngOnInit() {

  }

}
