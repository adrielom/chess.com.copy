import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ChessBoardComponent } from './components/chess-board/chess-board.component';
import { SquareComponent } from './components/square/square.component';
import { KingComponent } from './components/piecesComponents/king-component/king-component.component';
import { BishopComponent } from './components/piecesComponents/bishop-component/bishop-component.component';
import { RookComponent } from './components/piecesComponents/rook/rook.component';
import { KnightComponent } from './components/piecesComponents/knight/knight.component';
import { QueenComponent } from './components/piecesComponents/queen/queen.component';
import { PawnComponent } from './components/piecesComponents/pawn/pawn.component'

@NgModule({
  declarations: [
    AppComponent,
    ChessBoardComponent,
    SquareComponent,
    KingComponent,
    BishopComponent,
    RookComponent,
    KnightComponent,
    QueenComponent,
    PawnComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
