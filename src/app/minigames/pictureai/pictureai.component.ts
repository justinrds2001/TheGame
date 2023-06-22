import { Component, OnInit } from "@angular/core";
import { IPictureService } from "./services/IPictureService.service";
import { Picture } from "./models/picture.model";
import { PictureAiIntro } from "src/app/text-bubble/conversations/pictureai-intro";
import { TextBubbleComponent } from "src/app/text-bubble/text-bubble.component";
import { MatDialog } from "@angular/material/dialog";

@Component({
  templateUrl: "./pictureai.component.html",
  styleUrls: ["./pictureai.component.css"],
  selector: "app-pictureai",
})
export class PictureaiComponent implements OnInit {
  picture: Picture = new Picture({ name: "", image: "", description: "" });

  constructor(public dialog: MatDialog, private pictureService: IPictureService) {
    this.openDialog();
  }

  ngOnInit(): void {
    this.pictureService.resetPictureCounter();
    this.pictureService
      .getRandomPicture()
      .subscribe((picture) => (this.picture = picture));
  }

  //Open dialog
  openDialog() {
    //this.rulesDialog = this.dialog.open(DialogContentExampleDialog);
    this.dialog.open(TextBubbleComponent, {
      width: "1000px",
      height: "400px",
      disableClose: true,
      data: { conversationType: PictureAiIntro },
  });
}}
