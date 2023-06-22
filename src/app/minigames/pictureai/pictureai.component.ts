import { Component, OnInit } from "@angular/core";
import { IPictureService } from "./services/IPictureService.service";
import { Picture } from "./models/picture.model";
import { PictureAiIntro } from "src/app/text-bubble/conversations/pictureai-intro";
import { MatDialog } from "@angular/material/dialog";
import { TextBubbleComponent } from "src/app/text-bubble/text-bubble.component";

@Component({
	templateUrl: "./pictureai.component.html",
	styleUrls: ["./pictureai.component.css"],
	selector: "app-pictureai",
})
export class PictureaiComponent implements OnInit {
	picture: Picture = new Picture({ name: "", image: "", description: "" });
	showAiAnswer: boolean = false;
	disable: boolean = false;

	constructor(
		public dialog: MatDialog,
		private pictureService: IPictureService
	) {
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
		this.pictureService
			.getRandomPicture()
			.subscribe((picture) => (this.picture = picture));
		this.showAiAnswer = false;
		this.disable = false;
		if (this.picture.description == "Information") {
			this.disable = true;
			this.showAiAnswer = true;
		}
	}

	//Open dialog
	openDialog() {
		this.dialog.open(Dialog);
		this.dialog.open(TextBubbleComponent, {
			width: "1000px",
			height: "400px",
			disableClose: true,
			data: { conversationType: PictureAiIntro },
		});
	}
}

//Dialog box
@Component({
	selector: "dialog-sudoku",
	templateUrl: "./dialog-pictureai.html",
})
export class Dialog {}
