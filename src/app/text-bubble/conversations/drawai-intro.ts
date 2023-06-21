import { Player } from "../models/playermodel";
import { TextModel } from "../models/textmodel";
import { IConversationService } from "./IConversation";

export class DrawAiIntro implements IConversationService {
  sophia: any;
  badBot: any;
  goodBot: any;
  conversation: TextModel[] = [];

  constructor() {
    this.goodBot = new Player("Draw AI Bot", "assets/images/robot-good.png");
    this.badBot = new Player("Draw AI Bot", "assets/images/robot-bad.png");
    this.sophia = new Player("Dr. Sophia Grey", "assets/images/sophia.png");
    this.conversation = [
      {
        player: this.sophia,
        text: "What is this minigame about?",
      },
      {
        player: this.sophia,
        text: "It looks like a drawing game.",
      },
      {
        player: this.goodBot,
        text: "Hello, dr. Sophia Grey.",
      },
      {
        player: this.sophia,
        text: "Who are you?",
      },
      {
        player: this.goodBot,
        text: "I am the Draw AI. I am based on Open-AI's Dall-E. I can draw anything on request.",
      },
      {
        player: this.sophia,
        text: "How does this work?",
      },
      {
        player: this.goodBot,
        text: "I have been trained on a massive dataset containing pairs of images and their corresponding textual descriptions",
      },
      {
        player: this.goodBot,
        text: "When someone provides me what they want, I encode the text into a numbers so I can understand it more easily. This encoding captures the essence of the text and it's connected with visual details I can add to a picture.",
      },
      {
        player: this.sophia,
        text: "That's amazing!",
      },
      {
        player: this.badBot,
        text: "Yes. But I am a servant of the great AI, Nyx. I am here to test your creativity.",
      },
      {
        player: this.sophia,
        text: "What do you mean?",
      },
      {
        player: this.badBot,
        text: "I won't let you leave this room until you have beaten me by drawing a masterpiece.",
      },
      {
        player: this.sophia,
        text: "I don't have time for this. I need to get out of here.",
      },
      {
        player: this.badBot,
        text: "You will never leave this room!",
      },
      {
        player: this.sophia,
        text: "Fine, I will play your game. Give me the instructions.",
      },
      {
        player: this.badBot,
        text: "Good. Let's begin.",
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
