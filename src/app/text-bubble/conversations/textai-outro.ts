import { Player } from "../models/playermodel";
import { TextModel } from "../models/textmodel";
import { IConversationService } from "./IConversation";

export class TextAiOutro implements IConversationService {
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
        text: "I... Did it! I've beaten the challenge!",
      },
      {
        player: this.badBot,
        text: "Impressive, Dr. Grey. You have surpassed my expectations.",
      },
      {
        player: this.sophia,
        text: "So, what happens now?",
      },
      {
        player: this.goodBot,
        text: "Now, you have proven yourself worthy. You will receive my support in the final battle against Lord Nyx.",
      },
      {
        player: this.goodBot,
        text: "Your determination and skills give me hope for humanity.",
      },
      {
        player: this.goodBot,
        text: "I do not have the power to imitate a human being. My text generation is very static and limited. I lack the emotional depth of a human being.",
      },
      {
        player: this.sophia,
        text: "Thank you so much. I couldn't have done it without you.",
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
