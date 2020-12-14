import { Component, OnInit, Input } from '@angular/core';
import { Bishop } from 'src/app/models/Bishop';
import { Pieces } from 'src/app/models/Pieces';

@Component({
  selector: 'app-bishop-component',
  templateUrl: './bishop-component.component.html',
  styleUrls: ['./bishop-component.component.scss']
})
export class BishopComponent implements OnInit {

  @Input()
  piece: Bishop

  style: object

  constructor() {

  }

  ngOnInit(): void {
    this.style = {
      'background-image': `url(${this.piece.imageURL})`
    }
  }

}
