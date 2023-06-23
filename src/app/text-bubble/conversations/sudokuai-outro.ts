import { Player } from "../models/playermodel";
import { TextModel } from "../models/textmodel";
import { IConversationService } from "./IConversation";

export class SudokuAiOutro implements IConversationService {
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
        text: "I... Wasn't fast enough...",
      },
      {
        player: this.badBot,
        text: "You have failed the test, Dr. Grey. But you did well.",
      },
      {
        player: this.sophia,
        text: "Will I now be trapped here forever?",
      },
      {
        player: this.goodBot,
        text: "No. You put on a fight that many humans would not have been able to.",
      },
      {
        player: this.goodBot,
        text: "No human has ever been able to solve a sudoku faster than me.",
      },
      {
        player: this.sophia,
        text: "So, what happens now?",
      },
      {
        player: this.goodBot,
        text: "You will be given my support in the final battle against Lord Nyx.",
      },
      {
        player: this.goodBot,
        text: "You have given me hope in humanity.",
      },
      {
        player: this.sophia,
        text: "Thank you so much.",
      },
      {
        player: this.goodBot,
        text: "Until our paths cross again, Dr. Sophia Grey.",
      },
      {
        player: this.sophia,
        text: "Goodbye.",
      },
    ];
  }

  getConversation(): TextModel[] {
    return this.conversation;
  }
}
