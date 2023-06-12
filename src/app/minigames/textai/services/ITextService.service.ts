import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Text } from "src/app/minigames/textai/models/text.model";

@Injectable ({
    providedIn: "root",
})

export abstract class ITextService {
    abstract getTexts(): Observable<Text[]>;
}