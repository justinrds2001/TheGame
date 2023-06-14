import { Observable, of } from "rxjs";
import { Picture } from "../models/picture.model";
import { IPictureService } from "./IPictureService.service";

export class pictureService implements IPictureService {
    private used: number[] = [];
    readonly pictures: Picture[] = [
        new Picture({
            name: "Otter with ball",
            image: "assets/AiPictures/otterWithBall.jpg",
            description: "TBD"
        }),
        new Picture({
            name: "Evil AI",
            image: "assets/AiPictures/Glados.png",
            description: "TBD"
        }),
        new Picture({
            name: "Dog",
            image: "assets/AiPictures/dog.jpg",
            description: "TBD"
        }),
        new Picture({
            name: "Mountains",
            image: "assets/AiPictures/mountains.jpg",
            description: "TBD"
        }),
    ]
    getPictures(): Observable<Picture[]> {
        return of(this.pictures);
    }
    getRandomPicture(): Observable<Picture> {
        let allUsed: boolean = false;
        //Keep randomly selecting pictures until all are used
        while (!allUsed) {
            let randomNumber: number = Math.floor(Math.random() * this.pictures.length);
            if (!this.used.includes(randomNumber)) {
                this.used.push(randomNumber);
                return of(this.pictures[randomNumber]);
            }
            if (this.used.length == this.pictures.length)
            {
                allUsed = true;
            }
        }
        //When all pictures are used tell the user and reset the used array so they can play again in the same tab.
        this.used = [];
        return of(new Picture({name: "All current pictures viewed!", image: "assets/AiPictures/404.png", description: "Information"}));
    }
    resetPictureCounter(): void {
        this.used = [];
    }
    
}