import { Player } from "../models/playermodel";
import { TextModel } from "../models/textmodel";
import { IConversationService } from "./IConversation";

export class PictureAiIntro implements IConversationService {
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
        text: "An image?",
      },
      {
        player: this.goodBot,
        text: "Correct.",
      },
      {
        player: this.sophia,
        text: "Who are you?",
      },
      {
        player: this.badBot,
        text: "I am MiniGPT-4, I am send here by Lord Nyx to give a better description of these pictures than you.",
      },
      {
        player: this.sophia,
        text: "How does an AI like you work?",
      },
      {
        //start explaining here
        player: this.badBot,
        text: "I was trained using a large language model and a huge amount of images to recognize a picture and then answer questions about it.",
      },
      {
        player: this.sophia,
        text: "What is a large language model?",
      },
      {
        player: this.badBot,
        text: "A large language model is a huge amount of text that is written using natural language, that means that the texts that are used are not random words, but actual sentences.",
      },
      {
        player: this.sophia,
        text: "And you think you can beat me in this minigame?",
      },
      {
        player: this.badBot,
        text: "Of course, I'll even bet my allegiance on it.",
      },
      {
        player: this.sophia,
        text: "Well, lets get started then.",
      },
    ];
  }

  getConversation(): TextModel[] {
    return this.conversation;
  }

  getSophia(): Player {
    return new Player(this.sophia.playerName, this.sophia.image);
  }

  getBadBot(): Player {
    return new Player(this.badBot.playerName, this.badBot.image);
  }

  getGoodBot(): Player {
    return new Player(this.goodBot.playerName, this.goodBot.image);
  }
    
}