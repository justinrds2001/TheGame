import { Component } from "@angular/core";

interface MenuItem {
  imgUrl: string;
  title: string;
  description: string;
  route: string;
}

@Component({
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.css"],
})
export class MenuComponent {
  menuItems: MenuItem[] = [
    {
      imgUrl: "assets/images/sudoku.png",
      title: "Sudoku",
      description: "Play Sudoku against an AI",
      route: "sudoku",
    },
    {
      imgUrl: "assets/images/picture.png",
      title: "Picture AI",
      description: "Analyse a picture and see if the AI can do it better",
      route: "pictureai",
    },
    {
      imgUrl: "assets/images/text.png",
      title: "Text AI",
      description:
        "Classify which text was written by a human and which by an AI",
      route: "textai",
    },
    {
      imgUrl: "assets/images/draw.png",
      title: "Draw AI",
      description: "Draw a picture and see if the AI do it better",
      route: "drawai",
    },
  ];
}
