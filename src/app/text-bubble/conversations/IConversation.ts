import { Player } from "../models/playermodel";
import { TextModel } from "../models/textmodel";

export interface IConversationService {
  getConversation(): TextModel[];
}
