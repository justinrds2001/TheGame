import { Player } from "../models/playermodel";
import { TextModel } from "../models/textmodel";
import { IConversationService } from "./IConversation";

export class TextAiIntro implements IConversationService {
	sophia: any;
	badBot: any;
	goodBot: any;
	conversation: TextModel[] = [];

	constructor() {
		this.goodBot = new Player(
			"Draw AI Bot",
			"assets/images/robot-good.png"
		);
		this.badBot = new Player("Draw AI Bot", "assets/images/robot-bad.png");
		this.sophia = new Player("Dr. Sophia Grey", "assets/images/sophia.png");
		this.conversation = [
			{
				player: this.sophia,
				text: "What is this minigame about?",
			},
			{
				player: this.sophia,
				text: "It looks like a lot of text.",
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
				text: "I am the Text AI. I am based on Chat-GPT4. I can create texts that seem like they were written by humans.",
			},
			{
				player: this.sophia,
				text: "How does this work?",
			},
			{
				player: this.goodBot,
				text: "I have been trained on a massive dataset of human written texts!",
			},
			{
				player: this.goodBot,
				text: "When someone tells me what they want me to write about, I can use a neural network I have developed using the dataset of written texts to predict and generate a text that is very similar.",
			},
			{
				player: this.sophia,
				text: "That's amazing!",
			},
			{
				player: this.badBot,
				text: "Yes. But I am a servant of the great AI, Nyx. I am here to test your perception skills.",
			},
			{
				player: this.sophia,
				text: "What do you mean?",
			},
			{
				player: this.badBot,
				text: "I won't let you leave this room until you have beaten me by correctly identifying the author of texts.",
			},
			{
				player: this.sophia,
				text: "I can't be trapped here forever.",
			},
			{
				player: this.badBot,
				text: "I'm impossible to defeat!",
			},
			{
				player: this.sophia,
				text: "Very well then, tell me what to do.",
			},
			{
				player: this.badBot,
				text: "Good. Let's begin.",
			},
		];
	}

	getConversation(): TextModel[] {
		return this.conversation;
	}

	getSophia(): Player {
		return new Player(this.sophia.playerName, this.sophia.image);
	}

	getBadBot(): Player {
		return new Player(this.badBot.playerName, this.badBot.image);
	}

	getGoodBot(): Player {
		return new Player(this.goodBot.playerName, this.goodBot.image);
	}
}
