import { Component, HostListener, OnInit, Inject } from "@angular/core";
import { Player } from "./models/playermodel";
import { TextModel } from "./models/textmodel";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "app-text-bubble",
  templateUrl: "./text-bubble.component.html",
  styleUrls: ["./text-bubble.component.css"],
})
export class TextBubbleComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<TextBubbleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  sophia: Player = new Player("Sophia", "assets/images/sophia.png");
  badDrawBot: Player = new Player("DrawBot", "assets/images/robot-bad.png");
  goodDrawBot: Player = new Player("DrawBot", "assets/images/robot-good.png");
  cssClass: string = "player";
  drawAiConversation: TextModel[] = [
    {
      player: this.sophia,
      text: "What is this minigame about?",
    },
    {
      player: this.sophia,
      text: "It looks like a drawing game.",
    },
    {
      player: this.goodDrawBot,
      text: "Hello, dr. Sophia Grey.",
    },
    {
      player: this.sophia,
      text: "Who are you?",
    },
    {
      player: this.goodDrawBot,
      text: "I am the Draw AI. I am based on Open-AI's Dall-E. I can draw anything on request.",
    },
    {
      player: this.sophia,
      text: "How does this work?",
    },
    {
      player: this.goodDrawBot,
      text: "I have been trained on a massive dataset containing pairs of images and their corresponding textual descriptions",
    },
    {
      player: this.goodDrawBot,
      text: "When someone provides me what they want, I encode the text into a numbers so I can understand it more easily. This encoding captures the essence of the text and it's connected with visual details I can add to a picture.",
    },
    {
      player: this.sophia,
      text: "That's amazing!",
    },
    {
      player: this.badDrawBot,
      text: "Yes. But I am a servant of the great AI, Nyx. I am here to test your creativity.",
    },
    {
      player: this.sophia,
      text: "What do you mean?",
    },
    {
      player: this.badDrawBot,
      text: "I won't let you leave this room until you have beaten me by drawing a masterpiece.",
    },
    {
      player: this.sophia,
      text: "I don't have time for this. I need to get out of here.",
    },
    {
      player: this.badDrawBot,
      text: "You will never leave this room!",
    },
    {
      player: this.sophia,
      text: "Fine, I will play your game. Give me the instructions.",
    },
    {
      player: this.badDrawBot,
      text: "Good. Let's begin.",
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
      this.dialogRef.close();
    }
  }
}
