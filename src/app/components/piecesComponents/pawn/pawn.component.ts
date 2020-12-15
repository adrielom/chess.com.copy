import { Component, Input, OnInit } from '@angular/core';
import { Pawn } from 'src/app/models/Pawn';
import { Color } from 'src/app/models/Pieces';

@Component({
  selector: 'app-pawn',
  templateUrl: './pawn.component.html',
  styleUrls: ['./pawn.component.scss']
})
export class PawnComponent implements OnInit {

  @Input()
  piece: Pawn

  style: object

  constructor() { }

  ngOnInit(): void {
    this.style = {
      'background-image': `url(${this.piece.imageURL})`,
    }
  }
}
