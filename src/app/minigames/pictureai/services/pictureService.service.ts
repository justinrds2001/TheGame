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
            description: "This image shows a robot with a glowing light on its head, standing in front of a dark background. The robot appears to be made of metal and has a sleek, futuristic design. The light on its head is shining brightly, illuminating the surrounding area. The robot’s arms are extended, as if it is ready to move or attack. The overall atmosphere of the image is dark and mysterious, with the robot’s glowing light adding an eerie touch to the scene."
        }),
        new Picture({
            name: "Dog",
            image: "assets/AiPictures/dog.jpg",
            description: "This is a black and white image of a dog with a red, blue, and green ball in its mouth. The dog is standing on a grassy field with trees in the background. The dog’s fur is short and fluffy, and its eyes are bright and alert. The ball is held in the dog’s mouth, and its teeth are visible. The overall mood of the image is playful and happy."
        }),
        new Picture({
            name: "Mountains",
            image: "assets/AiPictures/mountains.jpg",
            description: "The image shows a beautiful mountain landscape with tall evergreen trees surrounding a large lake. The lake is surrounded by mountains and has a clear blue color. The sky is clear and blue with a few clouds in the distance. The image is taken from a high vantage point, giving a bird’s eye view of the landscape. The trees are tall and green, with some leaves still on them. The lake is surrounded by lush greenery and has a clear blue color. The mountains in the background are tall and covered in snow. The overall scene is peaceful and serene."
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