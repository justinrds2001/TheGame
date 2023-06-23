import { Component } from "@angular/core";

interface MenuItem {
  imgUrl: string;
  title: string;
  description: string;
  route: string;
  isBeaten: boolean;
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
      isBeaten: localStorage.getItem("sudoku") == "true",
    },
    {
      imgUrl: "assets/images/picture.png",
      title: "Picture AI",
      description: "Analyse a picture and see if the AI can do it better",
      route: "pictureai",
      isBeaten: localStorage.getItem("pictureai") == "true",
    },
    {
      imgUrl: "assets/images/text.png",
      title: "Text AI",
      description:
        "Classify which text was written by a human and which by an AI",
      route: "textai",
      isBeaten: localStorage.getItem("textai") == "true",
    },
    {
      imgUrl: "assets/images/draw.png",
      title: "Draw AI",
      description: "Draw a picture and see if the AI do it better",
      route: "drawai",
      isBeaten: localStorage.getItem("drawai") == "true",
    },
  ];
}
