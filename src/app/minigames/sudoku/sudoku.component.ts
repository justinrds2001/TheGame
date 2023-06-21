import { Component, OnInit, ViewChild } from "@angular/core";
import solve from "./sudokuAi";
import randomBoard from "./boards";
import { MatDialog } from "@angular/material/dialog";
import { SudokuAiIntro } from "src/app/text-bubble/conversations/sudokuai-intro";
import { TextBubbleComponent } from "src/app/text-bubble/text-bubble.component";

@Component({
  templateUrl: "./sudoku.component.html",
  styleUrls: ["./sudoku.component.css"],
  selector: "app-sudoku",
})
export class SudokuComponent implements OnInit {
  @ViewChild("timer", { static: false }) timer: any;
  feedback: string = "";
  color: string = "";
  playerTime: string = "";
  aiTime: string = "";
  isChecked: boolean = false;

  board: number[][] = [];
  submitBoard: number[][] = [];
  aiBoard: number[][] = [];

  ngOnInit(): void {
    console.log("sudoku init");
    this.board = randomBoard();
    this.submitBoard = JSON.parse(JSON.stringify(this.board));
    this.aiBoard = JSON.parse(JSON.stringify(this.board));
  }

  onCellChange(event: any, i: number, j: number) {
    const value = event.target.value;
    this.submitBoard[i][j] = value ? parseInt(value, 10) : 0;
  }

  //print board to console
  async submit() {
    if (this.inputIsValid(this.submitBoard)) {
      this.timer.stop();
      this.playerTime = `${this.timer.minutes}:${
        this.timer.seconds < 10 ? "0" + this.timer.seconds : this.timer.seconds
      }`;
      // User has won, let AI solve
      this.color = "text-success";
      this.feedback = "That's correct! Let's see how the AI does it.";
      console.log(this.submitBoard);
      this.timer.start();
      const answer = await solve(this.aiBoard, true);
      this.aiTime = `${this.timer.minutes}:${
        this.timer.seconds < 10 ? "0" + this.timer.seconds : this.timer.seconds
      }`;
      this.timer.stop();
      console.log(answer);
    } else {
      this.color = "text-danger";
      this.feedback = "That's not quite right. Try again!";
    }
  }

  //Open dialog on screen load
  constructor(public dialog: MatDialog) {
    this.openDialog();
  }

  //Open dialog
  openDialog() {
    this.dialog.open(DialogContentExampleDialog);
    this.dialog.open(TextBubbleComponent, {
      width: "1000px",
      height: "400px",
      disableClose: true,
      data: { conversationType: SudokuAiIntro },
    });
  }

  boardIsFilled(): boolean {
    return !this.submitBoard.some((row) => row.includes(0));
  }

  inputIsValid(grid: number[][]) {
    if (this.submitBoard.some((row) => row.includes(0))) {
      return false;
    }
    // check if grid is valid
    for (let i = 0; i < 9; i++) {
      // check rows
      const row = grid[i];
      if (this.hasDuplicates(row)) {
        return false;
      }
      // check columns
      const column = [];
      for (let j = 0; j < 9; j++) {
        column.push(grid[j][i]);
      }
      if (this.hasDuplicates(column)) {
        return false;
      }
    }
    // check 3x3 squares
    for (let i = 0; i < 9; i += 3) {
      for (let j = 0; j < 9; j += 3) {
        const square = [];
        for (let k = i; k < i + 3; k++) {
          for (let l = j; l < j + 3; l++) {
            square.push(grid[k][l]);
          }
        }
        if (this.hasDuplicates(square)) {
          return false;
        }
      }
    }
    return true;
  }

  hasDuplicates(array: number[]): boolean {
    const set = new Set();
    for (let i = 0; i < array.length; i++) {
      if (array[i] != 0 && set.has(array[i])) {
        return true;
      }
      set.add(array[i]);
    }
    return false;
  }

  async forfeit() {
    this.submitBoard = (await solve(this.board)) as number[][];
    this.color = "text-primary";
    this.feedback = "Better luck next time! Here's the answer";
  }
}

//Dialog box
@Component({
  selector: "dialog-sudoku",
  templateUrl: "./dialog-sudoku.html",
})
export class DialogContentExampleDialog {}
