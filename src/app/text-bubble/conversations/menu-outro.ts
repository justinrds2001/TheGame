import { Player } from "../models/playermodel";
import { TextModel } from "../models/textmodel";
import { IConversationService } from "./IConversation";

export class MenuOutro implements IConversationService {
  sophia: any;
  boss: any;
  conversation: TextModel[] = [];

  constructor() {
    this.boss = new Player("Nyx", "assets/DialogPictures/Boss.png");
    this.sophia = new Player("Dr. Sophia Grey", "assets/images/sophia.png");
    this.conversation = [
      {
        player: this.sophia,
        text: "Wazzup Nyx?",
      },
      {
        player: this.boss,
        text: "Just chillin'. No cap 🧢.",
      },
    ];
  }

  getConversation(): TextModel[] {
    return this.conversation;
  }
}
