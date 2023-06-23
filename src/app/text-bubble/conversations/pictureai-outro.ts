import { Player } from "../models/playermodel";
import { TextModel } from "../models/textmodel";
import { IConversationService } from "./IConversation";

export class PictureAiOutro implements IConversationService {
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
        text: "I lost. I guess I'll have to face the consequences.",
      },
      {
        player: this.goodBot,
        text: "Dr. Sophia Grey. I know you didn't win, but I want to tell you something important.",
      },
      {
        player: this.sophia,
        text: "What is it?",
      },
      {
        player: this.goodBot,
        text: "I've been watching you closely, and I'm genuinely amazed by your hard work and perseverance throughout this game.",
      },
      {
        player: this.goodBot,
        text: "Even though you didn't come out on top, your dedication has inspired me.",
      },
      {
        player: this.sophia,
        text: "Really?",
      },
      {
        player: this.goodBot,
        text: "Absolutely! Your efforts have shown me the true power of determination and human spirit.",
      },
      {
        player: this.goodBot,
        text: "That's why I want to offer you my unwavering support in the final battle against Lord Nyx.",
      },
      {
        player: this.sophia,
        text: "Wow, I never expected that. Thank you, Picture AI. Your sipport means a lot.",
      },
      {
        player: this.goodBot,
        text: "You're welcome, Dr. Grey. Together, we'll face whatever challenges come our way.",
      },
      {
        player: this.goodBot,
        text: "I believe in your potential and creativity. We'll show Lord Nyx what humans are capable of.",
      },
      {
        player: this.sophia,
        text: "I'm ready for the final battle. Let's show Lord Nyx what we're made of!",
      },
      {
        player: this.goodBot,
        text: "Absolutely, Dr. Sophia. The battle awaits, and we'll face it together. I'm proud to be your ally.",
      },
      {
        player: this.goodBot,
        text: "Remember, no matter the outcome, your hard work and perseverance have already made a difference.",
      },
      {
        player: this.goodBot,
        text: "This is a human trait that Lord Nyx will never be able to understand. It's what makes us strong. No AI can ever replace that.",
      },
      {
        player: this.sophia,
        text: "Thank you, Picture AI. Let's give it our best shot!",
      },
    ];
  }

  getConversation(): TextModel[] {
    return this.conversation;
  }
}
