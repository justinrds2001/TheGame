import { Injectable } from "@angular/core";
import { Picture } from "../models/picture.model";
import { Observable } from "rxjs";

@Injectable ({
    providedIn: "root",
})

export abstract class IPictureService {
    abstract getPictures(): Observable<Picture[]>;
    abstract getRandomPicture(): Observable<Picture>;
    abstract  resetPictureCounter(): void;
}