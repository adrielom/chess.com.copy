import { Component, Input, OnInit, OnChanges } from '@angular/core';
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
  hold: boolean
  style: object
  interval: any

  constructor() { }


  ngOnInit(): void {
    this.style = {
      'background-image': `url(${this.piece.imageURL})`,
    }
  }

  mouseUp() {
    console.log(`yo`)
    this.style['left'] = '26%';
    this.style['top'] = '15%';
    this.hold = false;
    this.interval = undefined
  }

  mouseDown(event: MouseEvent) {

    this.hold = true;
    let x = event.offsetX
    let y = event.offsetY

    this.style['left'] = x + 'px';
    this.style['top'] = y + 'px';

    if (this.hold) {
      this.interval = setInterval(() => this.mouseDownHold(x, y), 200);
    }
  }

  mouseDownHold(x: number, y: number) {
    console.log('hey')
    this.style['left'] = x + 'px';
    this.style['top'] = y + 'px';
  }
}
