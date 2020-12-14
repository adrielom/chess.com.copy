import { Component, Input, OnInit } from '@angular/core';
import { Rook } from 'src/app/models/PiecesList';

@Component({
  selector: 'app-rook',
  templateUrl: './rook.component.html',
  styleUrls: ['./rook.component.scss']
})
export class RookComponent implements OnInit {

  @Input()
  piece: Rook

  style: object

  constructor() { }

  ngOnInit(): void {
    this.style = {
      'background-image': `url(${this.piece.imageURL})`
    }
  }

}
