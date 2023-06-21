import { Component, HostListener, OnInit, Inject } from "@angular/core";
import { Player } from "./models/playermodel";
import { TextModel } from "./models/textmodel";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { IConversationService } from "./conversations/IConversation";

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

  cssClass: string = "player";
  textModel: TextModel[] = {} as TextModel[];
  currentTextModel: TextModel | undefined;
  conversationType: IConversationService = new this.data.conversationType();

  iterator: number = 0;

  ngOnInit(): void {
    this.textModel = this.conversationType.getConversation();
    this.currentTextModel = this.textModel[this.iterator];
  }

  @HostListener("click", ["$event"])
  onClick(_event: MouseEvent) {
    this.iterator++;
    if (this.iterator < this.textModel.length) {
      this.currentTextModel = this.textModel[this.iterator];
      if (this.currentTextModel.player.playerName == "Dr. Sophia Grey") {
        this.cssClass = "player";
      } else {
        this.cssClass = "npc";
      }
    } else {
      this.dialogRef.close();
    }
  }
}
