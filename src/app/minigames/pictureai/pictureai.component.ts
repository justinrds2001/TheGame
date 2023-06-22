import { Component, OnInit } from "@angular/core";
import { IPictureService } from "./services/IPictureService.service";
import { Picture } from "./models/picture.model";
import { MatDialog } from "@angular/material/dialog";

@Component({
  templateUrl: "./pictureai.component.html",
  styleUrls: ["./pictureai.component.css"],
  selector: "app-pictureai",
})
export class PictureaiComponent implements OnInit 
{
	picture: Picture = new Picture({name: '', image: '', description: ''});
	showAiAnswer: boolean = false;
    disable: boolean = false;

  constructor(public dialog: MatDialog, private pictureService: IPictureService) {
    this.openDialog();
  }

  ngOnInit(): void {
    this.pictureService.resetPictureCounter();
    this.pictureService
      .getRandomPicture()
      .subscribe((picture) => (this.picture = picture));
  }

  submit(): void {
    this.showAiAnswer = true;
    this.disable = true;
  }

  next(): void {
    this.pictureService.getRandomPicture().subscribe((picture) => (this.picture = picture));
    this.showAiAnswer = false;
    this.disable = false;
    if (this.picture.description == "Information") {
      this.disable = true;
      this.showAiAnswer = true;
    }
  }

  openDialog() {
    this.dialog.open(Dialog);
  }
  
}

@Component({
    selector: "dialog-pictureai",
    templateUrl: "./dialog-pictureai.html",
  })
  export class Dialog {}
  
