import { Component, OnInit, OnChanges, SimpleChanges, Input, ChangeDetectorRef } from '@angular/core';
import { Position, Pieces, Color } from '../../models/Pieces';
import { Bishop, King, Knight, Pawn, Queen, Rook } from '../../models/PiecesList'
import { Command } from '../../models/Command'
import { Player } from '../../models/Player'
@Component({
  selector: 'app-chess-board',
  templateUrl: './chess-board.component.html',
  styleUrls: ['./chess-board.component.scss']
})
export class ChessBoardComponent implements OnInit {

  constructor(private cdr: ChangeDetectorRef) {
    if (ChessBoardComponent.instance === undefined)
      ChessBoardComponent.instance = this;

    this.player1 = new Player('Walter White', Color.white)
    this.player2 = new Player('Jack Black', Color.black)
    this.activePlayer = this.player1
  }

  public static instance: ChessBoardComponent;
  selectedPiece: Pieces;
  public pieces: Pieces[] = [];
  public player1: Player
  public player2: Player
  public activePlayer: Player;
  lastPlayed: Position[] = []

  public get SelectedPiece() {
    return this.selectedPiece;
  }

  public set SelectedPiece(piece: Pieces) {
    if (this.selectedPiece?.color === piece?.color) {
      this.player1.cleanUp()
      this.player2.cleanUp()
    }
    console.log(piece)
    this.selectedPiece = piece;
  }

  ngOnInit(): void {
    this.populateChessBoard();
    this.populatePlayersPieces();
    // this.gameCycle();
  }

  SetActivePlayer(): void {
    this.player1.cleanUp();
    this.player2.cleanUp();
    console.log(`the player before is ${this.activePlayer.name}`)
    if (this.activePlayer === this.player1) {
      this.activePlayer = this.player2;
    }
    else if (this.activePlayer === this.player2) {
      this.activePlayer = this.player1;
    }
    console.log(`the player after is ${this.activePlayer.name}`)
  }

  GetInactivePlayer(): Player {
    if (this.activePlayer === this.player1) return this.player2
    else return this.player1
  }

  populatePlayersPieces(): void {
    this.pieces.forEach(p => {
      if (p.color === Color.white) this.player1.listOfPieces.push(p);
      else if (p.color === Color.black) this.player2.listOfPieces.push(p);
    })
  }

  gameCycle(): void {
    this.newMove(new Command(Color.white, new Position(5, 2), new Position(5, 4)));
  }

  simulate() {
    this.newMove(new Command(Color.white, new Position(5, 2), new Position(5, 4)));
    this.newMove(new Command(Color.black, new Position(4, 7), new Position(4, 5)));
  }

  async newMove(command: Command): Promise<void> {
    command.executeCommand(this.getPieceByPosition(command.from));
  }

  capture(pieceId: number): void {
    console.log('capture ' + pieceId)
    // this.GetInactivePlayer().listOfPieces = this.GetInactivePlayer().listOfPieces.filter(i => {
    //   return i !== piece
    // })
    this.pieces = this.pieces.filter(i => {
      return i.selfId !== pieceId
    })

    this.cdr.detectChanges();

  }

  public getPieceByPosition(position: Position): Pieces {
    let piece = this.pieces.find(p => {
      if (p.position.x == position.x && p.position.y == position.y) {
        return p;
      }
    })
    return piece;
  }

  public getPieceByXY(x: number, y: number): Pieces {
    let position = new Position(x, y);
    let piece = this.pieces.find(p => {
      if (p.position?.x == position?.x && p.position?.y == position?.y) {
        return p;
      }
    })
    return piece;
  }

  public getPieceById(id: number): Pieces {
    let piece = this.pieces.find(p => {
      if (p.selfId === id) return p;
    })
    return piece
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
      this.pieces.push(new Pawn("Pawn", new Position(i, 2), Color.white));
      this.pieces.push(new Pawn("Pawn", new Position(i, 7), Color.black));
    }

    this.pieces.push(kingBlack);
    this.pieces.push(kingWhite);
    this.pieces.push(queenBlack);
    this.pieces.push(queenWhite);
    this.pieces.push(rookWhiteA1)
    this.pieces.push(rookWhiteH1)
    this.pieces.push(rookBlackA8)
    this.pieces.push(rookBlackH8)
    this.pieces.push(bishopWhiteC1)
    this.pieces.push(bishopWhiteF1)
    this.pieces.push(bishopBlackC8)
    this.pieces.push(bishopBlackF8)
    this.pieces.push(knightWhiteB1)
    this.pieces.push(knightWhiteG1)
    this.pieces.push(knightBlackG8)
    this.pieces.push(knightBlackB8)
  }

}
