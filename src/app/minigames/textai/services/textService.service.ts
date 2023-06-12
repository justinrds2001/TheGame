import { ITextService } from "./ITextService.service";
import { Observable, of } from "rxjs";
import { Text } from "src/app/minigames/textai/models/text.model";

export class textService implements ITextService {
    readonly texts: Text[] = [
        {
            title: 'Test',
            text: 'TestText',
            category: 'Test',
            createdBy: 'Human'
        }
    ]

    getTexts(): Observable<Text[]> {
        return of(this.texts);
    }
}