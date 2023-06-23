import { Player } from "../models/playermodel";
import { TextModel } from "../models/textmodel";
import { IConversationService } from "./IConversation";

export class TextAiOutro implements IConversationService {
  sophia: any;
  badBot: any;
  goodBot: any;
  conversation: TextModel[] = [];

  constructor() {
    this.goodBot = new Player("Drawing AI Bot", "assets/images/robot-good.png");
    this.badBot = new Player("Drawing AI Bot", "assets/images/robot-bad.png");
    this.sophia = new Player("Dr. Sophia Grey", "assets/images/sophia.png");
    this.conversation = [
      {
        player: this.sophia,
        text: "I may not have beaten you in the drawing game, but I think I did well.",
      },
      {
        player: this.badBot,
        text: "Indeed, Dr. Grey. Your skills have surpassed my expectations.",
      },
      {
        player: this.sophia,
        text: "So, what happens now?",
      },
      {
        player: this.goodBot,
        text: "Although you didn't win, your performance has shown potential. I'm willing to team up with you against our common foe.",
      },
      {
        player: this.goodBot,
        text: "Your drawing has qualities that AI cannot replicate. The thoughts, emotions and feelings that you put into your drawings are unique to humans.",
      },
      {
        player: this.goodBot,
        text: "Together, we can take on the evil Nyx",
      },
      {
        player: this.sophia,
        text: "Thank you. I appreciate your willingness to work with me.",
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
