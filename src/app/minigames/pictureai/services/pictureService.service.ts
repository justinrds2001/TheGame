import { Observable, of } from "rxjs";
import { Picture } from "../models/picture.model";
import { IPictureService } from "./IPictureService.service";

export class PictureService implements IPictureService {
    private used: number[] = [];
    readonly pictures: Picture[] = [
        new Picture({
            name: "Otter with ball",
            image: "assets/AiPictures/otterWithBall.jpg",
            description: "This image shows a sea otter swimming in a pool with a blue ball in its mouth. The otter is floating on its back with its flippers in the water. The otter’s fur is dark brown and its eyes are large and black. The otter’s body is slender and its head is round. The ball is blue and has a small hole in the middle. The pool is clear and blue with a few small bubbles floating in it. The water is calm and still. The otter’s body is submerged in the water except for its head and flippers. The otter’s body is slender and its head is round. The ball is blue and has a small hole in the middle. The pool is clear and blue with a few small bubbles floating in it. The water is calm and still."
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