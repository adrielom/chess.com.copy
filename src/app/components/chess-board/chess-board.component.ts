import { Component, OnChanges, OnInit, SimpleChanges, } from '@angular/core';
import { Position, Pieces, Color } from '../../models/Pieces';
import { Bishop, King, Knight, Pawn, Queen, Rook } from '../../models/PiecesList'
import { Command } from '../../models/Command'
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
    // this.gameCycle();
  }

  gameCycle(): void {
    this.newMove(new Command(Color.white, new Position(5, 2), new Position(5, 4)));
  }

  simulate() {
    this.newMove(new Command(Color.white, new Position(5, 2), new Position(5, 4)));
    this.newMove(new Command(Color.black, new Position(3, 7), new Position(3, 5)));

  }

  newMove(command: Command): void {
    command.executeCommand(this.getPieceByPosition(command.from));
  }


  getPieceByPosition(position: Position): Pieces {
    let piece = ChessBoardComponent.pieces.find(p => {
      if (p.position.x == position.x && p.position.y == position.y) {
        console.log(p)
        return p;
      }
    })
    return piece;
  }
  getPieceByXY(x: number, y: number): Pieces {
    let position = new Position(x, y);
    let piece = ChessBoardComponent.pieces.find(p => {
      if (p.position?.x == position?.x && p.position?.y == position?.y) {
        return p;
      }
    })
    return piece;
  }

  populateChessBoard(): void {
    let kingBlack = new King("King", new Position(5, 8), Color.black);
    let kingWhite = new King("King", new Position(5, 1), Color.white);
    let queenBlack = new Queen("Queen", new Position(4, 8), Color.black);
    let queenWhite = new Queen("Queen", new Position(4, 1), Color.white);
    let rookBlackA8 = new Rook("Rook", new Position(1, 1), Color.white);
    let rookBlackH8 = new Rook("Rook", new Position(1, 8), Color.black);
    let rookWhiteA1 = new Rook("Rook", new Position(8, 1), Color.white);
    let rookWhiteH1 = new Rook("Rook", new Position(8, 8), Color.black);
    let bishopWhiteC1 = new Bishop("Bishop", new Position(3, 1), Color.white);
    let bishopWhiteF1 = new Bishop("Bishop", new Position(6, 1), Color.white);
    let bishopBlackC8 = new Bishop("Bishop", new Position(6, 8), Color.black);
    let bishopBlackF8 = new Bishop("Bishop", new Position(3, 8), Color.black);
    let knightWhiteB1 = new Knight("Knight", new Position(2, 1), Color.white);
    let knightWhiteG1 = new Knight("Knight", new Position(7, 1), Color.white);
    let knightBlackG8 = new Knight("Knight", new Position(2, 8), Color.black);
    let knightBlackB8 = new Knight("Knight", new Position(7, 8), Color.black);

    for (let i = 1; i <= 8; i++) {
      ChessBoardComponent.pieces.push(new Pawn("Pawn", new Position(i, 2), Color.white));
      ChessBoardComponent.pieces.push(new Pawn("Pawn", new Position(i, 7), Color.black));
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
