import { Player } from "./playermodel";

export class TextModel {
  constructor(public player: Player, public text: string) {
    this.player = player;
    this.text = text;
  }
}
