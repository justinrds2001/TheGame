interface PaintingData {
  name: string;
  image: string;
}

export interface Painting extends PaintingData {}

export class Painting {
  constructor({ name, image }: PaintingData) {
    this.name = name;
    this.image = image;
  }

  toObject(): PaintingData {
    return {
      name: this.name,
      image: this.image,
    };
  }
}
