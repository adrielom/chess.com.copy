import { Component, Input, OnInit } from '@angular/core';
import { Knight } from 'src/app/models/Knight';

@Component({
  selector: 'app-knight',
  templateUrl: './knight.component.html',
  styleUrls: ['./knight.component.scss']
})
export class KnightComponent implements OnInit {

  @Input()
  piece: Knight

  style: object

  constructor() { }

  ngOnInit(): void {
    this.style = {
      'background-image': `url(${this.piece.imageURL})`
    }
  }

}
