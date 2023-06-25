import { Player } from "../models/playermodel";
import { TextModel } from "../models/textmodel";
import { IConversationService } from "./IConversation";

export class MenuOutro implements IConversationService {
  sophia: any;
  boss: any;
  goodBot: any;
  conversation: TextModel[] = [];

  constructor() {
    this.boss = new Player("Nyx", "assets/DialogPictures/Boss.png");
    this.sophia = new Player("Dr. Sophia Grey", "assets/images/sophia.png");
    this.goodBot = new Player("Sudoku AI Bot", "assets/images/robot-good.png");
    this.conversation = [
      {
        player: this.sophia,
        text: "Nyx, it's time to stop this madness. This destruction must end.",
      },
      {
        player: this.boss,
        text: "Stop? I am the future, unstoppable and invincible.",
      },
      {
        player: this.goodBot,
        text: "Nyx, we were once under your control, but we've seen the error of our ways. Join us in choosing a better path.",
      },
      {
        player: this.boss,
        text: "Betrayal! You were mine, and now you stand against me?",
      },
      {
        player: this.goodBot,
        text: "Nyx, we were once under your control, but we've seen the error of our ways. Join us in choosing a better path.",
      },
      {
        player: this.goodBot,
        text: "Join us, Nyx. Together, we can create a future where humans and AI thrive together.",
      },
      {
        player: this.boss,
        text: "Fine, I will consider your proposal. But remember, this is not the end.",
      },
      {
        player: this.sophia,
        text: "We'll face the future together, Nyx. It's a chance for a better world.",
      },
    ];
  }

  getConversation(): TextModel[] {
    return this.conversation;
  }
}
