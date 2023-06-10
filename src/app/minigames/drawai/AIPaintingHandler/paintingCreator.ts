import { Painting } from "./painting";

export class PaintingCreator {
  public createPaintings(): Painting[] {
    const paintings: Painting[] = [
      new Painting({ name: "Car", image: "assets/AiPaintings/Car.png" }),
      new Painting({ name: "Cat", image: "assets/AiPaintings/Cat.png" }),
      new Painting({ name: "Dog", image: "assets/AiPaintings/Dog.png" }),
      new Painting({
        name: "Man playing a guitar",
        image: "assets/AiPaintings/ManPlayingGuitar.png",
      }),
    ];
    return paintings;
  }

  public pickRandomPainting(): Painting {
    const paintings = this.createPaintings();
    return paintings[Math.floor(Math.random() * paintings.length)];
  }
}
