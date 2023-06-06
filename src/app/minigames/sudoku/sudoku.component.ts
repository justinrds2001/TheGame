import { Component } from '@angular/core';

@Component({
  templateUrl: './sudoku.component.html',
  styleUrls: ['./sudoku.component.css'],
})

export class SudokuComponent {
  board: number[][] = 
    [[5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]]
    
    submitBoard: number[][] =  JSON.parse(JSON.stringify(this.board));

    answer: number[][] = 
      [[5, 6, 1, 8, 4, 7, 9, 2, 3],
      [3, 7, 9, 5, 2, 1, 6, 8, 4],
      [4, 2, 8, 9, 6, 3, 1, 7, 5],
      [6, 1, 3, 7, 8, 9, 5, 4, 2],
      [7, 9, 4, 6, 5, 2, 3, 1, 8],
      [8, 5, 2, 1, 3, 4, 7, 9, 6],
      [9, 3, 5, 4, 7, 8, 2, 6, 1],
      [1, 4, 6, 2, 9, 5, 8, 3, 7],
      [2, 8, 7, 3, 1, 6, 4, 5, 9]]
    
  onCellChange(event: any, i: number, j: number) {
    const value = event.target.value;
    this.submitBoard[i][j] = value ? parseInt(value, 10) : 0;
  }

  //print board to console
  submit() {
    if (JSON.stringify(this.submitBoard) == JSON.stringify(this.answer)) {
        console.log(this.submitBoard);
      return;
    }
  }

  boardIsFilled(): boolean {
    return !this.submitBoard.some(row => row.includes(0));
  }
  
}