import { Component, OnInit, ViewChild } from "@angular/core";
import solve from "./sudokuAi";

@Component({
	templateUrl: "./sudoku.component.html",
	styleUrls: ["./sudoku.component.css"],
	selector: "app-sudoku",
})
export class SudokuComponent implements OnInit {
	@ViewChild("timer", { static: false }) timer: any;
	isPlaying: boolean = true;
	feedback: string = "";
	color: string = "";
	playerTime: string = "";
	aiTime: string = "";

	board: number[][] = [
		[5, 3, 0, 0, 7, 0, 0, 0, 0],
		[6, 0, 0, 1, 9, 5, 0, 0, 0],
		[0, 9, 8, 0, 0, 0, 0, 6, 0],
		[8, 0, 0, 0, 6, 0, 0, 0, 3],
		[4, 0, 0, 8, 0, 3, 0, 0, 1],
		[7, 0, 0, 0, 2, 0, 0, 0, 6],
		[0, 6, 0, 0, 0, 0, 2, 8, 0],
		[0, 0, 0, 4, 1, 9, 0, 0, 5],
		[0, 0, 0, 0, 8, 0, 0, 7, 9],
	];

	submitBoard: number[][] = JSON.parse(JSON.stringify(this.board));
	aiBoard: number[][] = JSON.parse(JSON.stringify(this.board));

	answer: number[][] = [
		[5, 6, 1, 8, 4, 7, 9, 2, 3],
		[3, 7, 9, 5, 2, 1, 6, 8, 4],
		[4, 2, 8, 9, 6, 3, 1, 7, 5],
		[6, 1, 3, 7, 8, 9, 5, 4, 2],
		[7, 9, 4, 6, 5, 2, 3, 1, 8],
		[8, 5, 2, 1, 3, 4, 7, 9, 6],
		[9, 3, 5, 4, 7, 8, 2, 6, 1],
		[1, 4, 6, 2, 9, 5, 8, 3, 7],
		[2, 8, 7, 3, 1, 6, 4, 5, 9],
	];

	ngOnInit(): void {
		console.log("sudoku init");
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
				this.timer.seconds < 10
					? "0" + this.timer.seconds
					: this.timer.seconds
			}`;
			this.isPlaying = false;
			// User has won, let AI solve
			this.color = "text-success";
			this.feedback = "That's correct! Let's see how the AI does it.";
			console.log(this.submitBoard);
			this.timer.start();
			const answer = await solve(this.aiBoard, true);
			this.aiTime = `${this.timer.minutes}:${
				this.timer.seconds < 10
					? "0" + this.timer.seconds
					: this.timer.seconds
			}`;
			this.timer.stop();
			console.log(answer);
		} else {
			this.color = "text-danger";
			this.feedback = "That's not quite right. Try again!";
		}
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
		this.isPlaying = false;
		this.submitBoard = (await solve(this.board)) as number[][];
		this.color = "text-primary";
		this.feedback = "Better luck next time! Here's the answer";
	}
	async solve() {
		this.submitBoard = (await solve(this.board)) as number[][];
	}
}
