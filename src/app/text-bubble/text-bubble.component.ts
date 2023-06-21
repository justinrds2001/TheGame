import { Component, HostListener, OnInit } from "@angular/core";
import { Player } from "./models/playermodel";
import { TextModel } from "./models/textmodel";

@Component({
  selector: "app-text-bubble",
  templateUrl: "./text-bubble.component.html",
  styleUrls: ["./text-bubble.component.css"],
})
export class TextBubbleComponent implements OnInit {
  sophia: Player = new Player("Sophia", "assets/images/sophia.png");
  nyx: Player = new Player("Nyx", "assets/images/nyx-good.png");
  cssClass: string = "player";
  drawAiConversation: TextModel[] = [
    {
      player: this.sophia,
      text: "Finally. I have finished the AI model that I have been working on for so long.",
    },
    {
      player: this.sophia,
      text: "I can't wait to see how it performs.",
    },
    {
      player: this.sophia,
      text: "I will just run it on my computer and see what happens.",
    },
    {
      player: this.nyx,
      text: "Hello, dr. Sophia Grey. I am Nyx.",
    },
    {
      player: this.nyx,
      text: "Thank you for creating me.",
    },
  ];
  currentTextModel: TextModel | undefined;
  iterator: number = 0;

  ngOnInit(): void {
    this.currentTextModel = this.drawAiConversation[this.iterator];
  }

  @HostListener("click", ["$event"])
  onClick(_event: MouseEvent) {
    this.iterator++;
    if (this.iterator < this.drawAiConversation.length) {
      this.currentTextModel = this.drawAiConversation[this.iterator];
      if (this.currentTextModel.player.playerName == "Sophia") {
        this.cssClass = "player";
      } else {
        this.cssClass = "npc";
      }
    } else {
      //Close the text bubble
    }
  }
}
