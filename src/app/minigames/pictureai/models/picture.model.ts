interface PictureData {
    name: string;
    image: string;
    description: string;
  }
  
  export interface Picture extends PictureData {}
  
  export class Picture {
    constructor({ name, image, description }: PictureData) {
      this.name = name;
      this.image = image;
      this.description = description;
    }
  
    toObject(): PictureData {
      return {
        name: this.name,
        image: this.image,
        description: this.description
      };
    }
  }