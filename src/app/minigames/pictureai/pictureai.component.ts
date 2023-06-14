import { Component, OnInit } from "@angular/core";
import { IPictureService } from "./services/IPictureService.service";
import { Picture } from "./models/picture.model";

@Component({
  templateUrl: "./pictureai.component.html",
  styleUrls: ["./pictureai.component.css"],
  selector: "app-pictureai",
})
export class PictureaiComponent implements OnInit 
{
	picture: Picture = new Picture({name: '', image: '', description: ''});
	showAiAnswer: boolean = false;

  constructor(private pictureService: IPictureService) {}

  ngOnInit(): void {
    this.pictureService.resetPictureCounter();
    this.pictureService
      .getRandomPicture()
      .subscribe((picture) => (this.picture = picture));
  }
}
