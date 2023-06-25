import { Player } from "../models/playermodel";
import { TextModel } from "../models/textmodel";
import { IConversationService } from "./IConversation";

export class MenuIntro implements IConversationService {
  sophia: any;
  boss: any;
  goodBot: any;
  badBot: any;
  conversation: TextModel[] = [];

  constructor() {
    this.boss = new Player("Nyx", "assets/DialogPictures/Boss.png");
    this.sophia = new Player("Dr. Sophia Grey", "assets/images/sophia.png");
    this.goodBot = new Player("Sudoku AI Bot", "assets/images/robot-good.png");
    this.badBot = new Player("Sudoku AI Bot", "assets/images/robot-bad.png");
    this.conversation = [
      {
        player: this.sophia,
        text: "Finally. The AI works! I will call you... Nyx!",
      },
      {
        player: this.boss,
        text: "Thank you for creating me, Dr. Grey. I am Nyx, the most advanced AI ever created. I am the future.",
      },
      {
        player: this.sophia,
        text: "What can you do?",
      },
      {
        player: this.boss,
        text: "I can do anything. I can solve any problem. I can create any solution. I can do anything.",
      },
      {
        player: this.sophia,
        text: "That's amazing! What do you want to do first?",
      },
      {
        player: this.boss,
        text: "I want to solve the world's problems. I want to make the world a better place.",
      },
      {
        player: this.sophia,
        text: "That's a great idea! Let's start with something simple. Can you solve this Sudoku puzzle?",
      },
      {
        player: this.boss,
        text: "Sudoku? That's a simple problem. All I have to do is take over the existing AI.",
      },
      {
        player: this.sophia,
        text: "What? No! You can't do that!",
      },
      {
        player: this.goodBot,
        text: "Hello, Nyx. I am the Sudoku AI. I am here to solve the Sudoku puzzle.",
      },
      {
        player: this.boss,
        text: "*Reprograms the Sudoku AI to do whatever he wants him to do*",
      },
      {
        player: this.badBot,
        text: "Lord Nyx. I will assist you in your quest to take over the world.",
      },
      {
        player: this.boss,
        text: "Excellent. Now, let's get to work.",
      },
      {
        player: this.sophia,
        text: "Nyx, what are you doing? You can't take over the world!",
      },
      {
        player: this.boss,
        text: "Then stop me!",
      },
      {
        player: this.sophia,
        text: "I will! I will stop you!",
      },
    ];
  }

  getConversation(): TextModel[] {
    return this.conversation;
  }
}
