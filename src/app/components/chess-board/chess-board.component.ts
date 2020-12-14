import { Component, OnInit } from '@angular/core';
import { Position, Pieces, Color } from '../../models/Pieces';

import { Bishop, King, Knight, Pawn, Queen, Rook } from '../../models/PiecesList'

@Component({
  selector: 'app-chess-board',
  templateUrl: './chess-board.component.html',
  styleUrls: ['./chess-board.component.scss']
})
export class ChessBoardComponent implements OnInit {

  constructor() {

  }

  public static pieces: Pieces[] = [];

  ngOnInit(): void {
    this.populateChessBoard();
  }

  populateChessBoard(): void {
    let kingBlack = new King("King", new Position(0, 4), Color.black);
    let kingWhite = new King("King", new Position(7, 4), Color.white);
    let queenBlack = new Queen("Queen", new Position(0, 3), Color.black);
    let queenWhite = new Queen("Queen", new Position(7, 3), Color.white);
    let rookBlackA8 = new Rook("Rook", new Position(0, 0), Color.black);
    let rookBlackH8 = new Rook("Rook", new Position(0, 7), Color.black);
    let rookWhiteA1 = new Rook("Rook", new Position(7, 0), Color.white);
    let rookWhiteH1 = new Rook("Rook", new Position(7, 7), Color.white);
    let bishopWhiteC1 = new Bishop("Bishop", new Position(7, 2), Color.white);
    let bishopWhiteF1 = new Bishop("Bishop", new Position(7, 5), Color.white);
    let bishopBlackC8 = new Bishop("Bishop", new Position(0, 2), Color.black);
    let bishopBlackF8 = new Bishop("Bishop", new Position(0, 5), Color.black);
    let knightWhiteB1 = new Knight("Knight", new Position(7, 1), Color.white);
    let knightWhiteG1 = new Knight("Knight", new Position(7, 6), Color.white);
    let knightBlackG8 = new Knight("Knight", new Position(0, 6), Color.black);
    let knightBlackB8 = new Knight("Knight", new Position(0, 1), Color.black);

    for (let i = 0; i < 8; i++) {
      ChessBoardComponent.pieces.push(new Pawn("Pawn", new Position(6, i), Color.white));
      ChessBoardComponent.pieces.push(new Pawn("Pawn", new Position(1, i), Color.black));
    }

    ChessBoardComponent.pieces.push(kingBlack);
    ChessBoardComponent.pieces.push(kingWhite);
    ChessBoardComponent.pieces.push(queenBlack);
    ChessBoardComponent.pieces.push(queenWhite);
    ChessBoardComponent.pieces.push(rookWhiteA1)
    ChessBoardComponent.pieces.push(rookWhiteH1)
    ChessBoardComponent.pieces.push(rookBlackA8)
    ChessBoardComponent.pieces.push(rookBlackH8)
    ChessBoardComponent.pieces.push(bishopWhiteC1)
    ChessBoardComponent.pieces.push(bishopWhiteF1)
    ChessBoardComponent.pieces.push(bishopBlackC8)
    ChessBoardComponent.pieces.push(bishopBlackF8)
    ChessBoardComponent.pieces.push(knightWhiteB1)
    ChessBoardComponent.pieces.push(knightWhiteG1)
    ChessBoardComponent.pieces.push(knightBlackG8)
    ChessBoardComponent.pieces.push(knightBlackB8)
  }

}
