import { Component, Input, OnInit } from '@angular/core';
import { Queen } from 'src/app/models/Queen';

@Component({
  selector: 'app-queen',
  templateUrl: './queen.component.html',
  styleUrls: ['./queen.component.scss']
})
export class QueenComponent implements OnInit {

  @Input()
  piece: Queen

  style: object

  constructor() { }

  ngOnInit(): void {
    this.style = {
      'background-image': `url(${this.piece.imageURL})`
    }
  }
}
