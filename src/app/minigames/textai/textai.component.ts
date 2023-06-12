import { Component, OnInit } from "@angular/core";
import { Text } from "./models/text.model";
import { ITextService } from "./services/ITextService.service";
import { TextService } from "./services/TextService.service";

@Component({
	templateUrl: "./textai.component.html",
	styleUrls: ["./textai.component.css"],
	selector: "app-textai",
})

export class TextaiComponent implements OnInit{
    text: Text = new Text('', '', '', ''); 
    feedback: string = "";
	color: string = "";

    constructor(
        private textService: ITextService
    ) {}

    ngOnInit(): void {
        this.textService.getRandomText().subscribe(text => this.text = text);
    }

    async submit(e: any) {
        let choice: string = e.target.id;
        if (choice === this.text.createdBy) {
            this.color = "text-success";
            this.feedback = "Correct!";
        } else {
            let writtenBy: string = this.text.createdBy === "Human" ? "a human!" : "an A.I.!"
            this.color = "text-danger";
			this.feedback = "This text was actually written by " + writtenBy;
        } 
    }

    next() {
        this.textService.getRandomText().subscribe(text => this.text = text);
    }
}
