import { Component, Input, OnInit } from '@angular/core';
import { King } from 'src/app/models/King';

@Component({
  selector: 'app-king-component',
  templateUrl: './king-component.component.html',
  styleUrls: ['./king-component.component.scss']
})
export class KingComponent implements OnInit {

  @Input()
  piece: King

  style: object

  constructor() { }

  ngOnInit(): void {
    this.style = {
      'background-image': `url(${this.piece.imageURL})`
    }
  }

}
