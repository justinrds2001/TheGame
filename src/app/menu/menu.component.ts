import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { TextBubbleComponent } from "../text-bubble/text-bubble.component";
import { MenuIntro } from "../text-bubble/conversations/menu-intro";
import { MenuOutro } from "../text-bubble/conversations/menu-outro";
import { Router } from "@angular/router";

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
export class MenuComponent implements OnInit {
  ngOnInit(): void {
    if (this.everythingBeaten()) {
      this.openTextBubble(MenuOutro);
    } else if (this.nothingBeaten()) {
      this.openTextBubble(MenuIntro);
    }
  }

  constructor(public dialog: MatDialog, private router: Router) {}

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

  openTextBubble(conversationType: any) {
    this.dialog.open(TextBubbleComponent, {
      width: "1000px",
      height: "400px",
      disableClose: true,
      data: { conversationType: conversationType },
    });
  }

  resetProgress() {
    localStorage.clear();
    //this.router.navigateByUrl("../");
    window.location.reload();
  }

  everythingBeaten(): boolean {
    return this.menuItems.every((item) => item.isBeaten);
  }

  nothingBeaten(): boolean {
    return this.menuItems.every((item) => !item.isBeaten);
  }
}
