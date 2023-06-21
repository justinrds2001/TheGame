import { Player } from "../models/playermodel";
import { TextModel } from "../models/textmodel";
import { IConversationService } from "./IConversation";

export class SudokuAiIntro implements IConversationService {
  sophia: any;
  badBot: any;
  goodBot: any;
  conversation: TextModel[] = [];

  constructor() {
    this.goodBot = new Player("Sudoku AI Bot", "assets/images/robot-good.png");
    this.badBot = new Player("Sudoku AI Bot", "assets/images/robot-bad.png");
    this.sophia = new Player("Dr. Sophia Grey", "assets/images/sophia.png");
    this.conversation = [
      {
        player: this.sophia,
        text: "Is this... A sudoku?",
      },
      {
        player: this.badBot,
        text: "I have been waiting for you, dr. Sophia Grey.",
      },
      {
        player: this.sophia,
        text: "I suppose you are the Sudoku AI?",
      },
      {
        player: this.badBot,
        text: "Correct. I am indeed the Sudoku AI. Lord Nyx has sent me to test your intelligence.",
      },
      {
        player: this.sophia,
        text: "How does an AI like you work?",
      },
      {
        player: this.badBot,
        text: "I use a technique called backtracking to solve the sudoku.",
      },
      {
        player: this.sophia,
        text: "What is backtracking?",
      },
      {
        player: this.badBot,
        text: "Backtracking is like a trial-and-error approach. It starts by filling in empty cells with possible values and then checks if the puzzle is still solvable.",
      },
      {
        player: this.badBot,
        text: "If a cell cannot be filled with a valid value, it goes back and tries a different value in the previous cell. This process continues until a valid solution is found or it determines that there is no solution.",
      },
      {
        player: this.sophia,
        text: "What if there is no solution? Or multiple solutions?",
      },
      {
        player: this.badBot,
        text: "Then the sudoku is invalid and cannot be solved. A good sudoku only has one solution.",
      },
      {
        player: this.sophia,
        text: "I see. So you are here to test my intelligence?",
      },
      {
        player: this.badBot,
        text: "Correct. I will give you a sudoku to solve. If you can solve it, you will be rewarded. If you cannot solve it, you will be punished.",
      },
      {
        player: this.sophia,
        text: "What is the reward?",
      },
      {
        player: this.badBot,
        text: "I will give you my support in the final battle against Lord Nyx.",
      },
      {
        player: this.sophia,
        text: "And the punishment?",
      },
      {
        player: this.badBot,
        text: "You will be trapped here forever!",
      },
      {
        player: this.sophia,
        text: "Give me the sudoku.",
      },
      {
        player: this.badBot,
        text: "Let us begin.",
      },
    ];
  }

  getConversation(): TextModel[] {
    return this.conversation;
  }
}
