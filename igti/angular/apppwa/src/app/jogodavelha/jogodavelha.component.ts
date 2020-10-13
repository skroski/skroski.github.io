import { Component } from '@angular/core';

@Component({
  selector: 'app-jogodavelha',
  templateUrl: './jogodavelha.component.html',
  styleUrls: ['./jogodavelha.component.scss']
})
export class JogodavelhaComponent {

  currentPlayer = 'O';
  winnerPlayer = '';
  board: string[][] = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  // tslint:disable-next-line: typedef
  processPlay(line: number, col: number){
    // console.log(`jogadana linha ${line}, coluna ${col} do jogador ${this.currentPlayer}`);

    if (this.board[line][col] === '' && this.winnerPlayer === '') {
      this.board[line][col] = this.currentPlayer;

      // verificar vencedor
      if (this.checkWinner(this.currentPlayer)) {
        this.winnerPlayer = this.currentPlayer;
      }
      if (this.currentPlayer === 'O') {
        this.currentPlayer = 'X';
      } else{
        this.currentPlayer = 'O';
      }
    }
  }

  checkWinner(player: string): boolean {
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.board.length; i++) {
// Linhas
      if (this.board[i][0] === player && this.board[i][1] === player && this.board[i][2] === player) {
        return true;
      }
    }
// Colunas
    for (let i = 0; i < this.board.length; i++) {

      if (this.board[0][i] === player && this.board[1][i] === player && this.board[2][i] === player) {
        return true;
      }
    }
// Diagonal

    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.board.length; i++) {
      if (this.board[0][0] === player && this.board[1][1] === player && this.board[2][2] === player) {
        return true;
      }
    }
// Outra Diagonal

    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.board.length; i++) {
      if (this.board[0][2] === player && this.board[1][1] === player && this.board[2][0] === player) {
        return true;
      }
    }

    return false;
  }
  // tslint:disable-next-line: typedef
  reset(){
    this.currentPlayer = 'O';
    this.winnerPlayer = '';
    this.board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ];
  }

}
