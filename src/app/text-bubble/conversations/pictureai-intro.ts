import { Player } from "../models/playermodel";
import { TextModel } from "../models/textmodel";
import { IConversationService } from "./IConversation";

export class PictureAiIntro implements IConversationService {
	sophia: any;
	badBot: any;
	goodBot: any;
	conversation: TextModel[] = [];

	constructor() {
		this.goodBot = new Player(
			"Sudoku AI Bot",
			"assets/images/robot-good.png"
		);
		this.badBot = new Player(
			"Sudoku AI Bot",
			"assets/images/robot-bad.png"
		);
		this.sophia = new Player("Dr. Sophia Grey", "assets/images/sophia.png");
		this.conversation = [
			{
				player: this.sophia,
				text: "What is this minigame about?",
			},
			{
				player: this.sophia,
				text: "It looks like a game about pictures.",
			},
			{
				player: this.goodBot,
				text: "Hello, dr. Sophia Grey.",
			},
			{
				player: this.sophia,
				text: "Who are you?",
			},
			{
				player: this.goodBot,
				text: "I am the Picture AI. I am specialized in classifying images.",
			},
			{
				player: this.sophia,
				text: "How does this work?",
			},
			{
				player: this.goodBot,
				text: "I have been trained on a massive dataset containing pairs of images and their corresponding textual descriptions",
			},
			{
				player: this.goodBot,
				text: "When someone provides me a image, I try to describe it in words.",
			},
			{
				player: this.sophia,
				text: "That sounds interesting, what does that have to do with me?",
			},
			{
				player: this.badBot,
				text: "Glad you asked. I am here on behalf of the great AI, Nyx. I am here to determine if you are creative enough.",
			},
			{
				player: this.sophia,
				text: "What do you mean?",
			},
			{
				player: this.badBot,
				text: "I will show you a picture and you will have to describe it in words. If I deem you creative enough, I will help you in the battle against the almighty AI, Nyx.",
			},
			{
				player: this.sophia,
				text: "What if I am not creative enough?",
			},
			{
				player: this.badBot,
				text: "Then you will be trapped here forrever!",
			},
			{
				player: this.sophia,
				text: "I will not let that happen!",
			},
			{
				player: this.badBot,
				text: "Then let's begin!",
			},
		];
	}

	getConversation(): TextModel[] {
		return this.conversation;
	}
}
