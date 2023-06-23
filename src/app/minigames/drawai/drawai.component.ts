import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Painting } from "./AIPaintingHandler/painting";
import { PaintingCreator } from "./AIPaintingHandler/paintingCreator";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { TextBubbleComponent } from "src/app/text-bubble/text-bubble.component";
import { DrawAiIntro } from "src/app/text-bubble/conversations/drawai-intro";
import { SudokuAiOutro } from "src/app/text-bubble/conversations/sudokuai-outro";

@Component({
  selector: "drawai",
  templateUrl: "./drawai.component.html",
  styleUrls: ["./drawai.component.css"],
})
export class DrawaiComponent implements OnInit {
  @ViewChild("myCanvas", { static: true })
  canvasRef!: ElementRef<HTMLCanvasElement>;
  private context!: CanvasRenderingContext2D;
  private isDrawing = false;
  private isExtracting = false;
  private prevX = 0;
  private prevY = 0;
  private executedCommands: (() => void)[] = [];
  minDistance = 5;

  theme: Painting = new Painting({ name: "", image: "" });
  showPicture = false;
  color = "#000000";
  eraser = "#ffffff";
  penWidth = 15;
  eraserWidth = 50;
  isPenSelected = true;
  isEraserSelected = false;
  rulesDialog: MatDialogRef<Dialog> | undefined;
  convoRef: MatDialogRef<TextBubbleComponent> | undefined;

  ngOnInit(): void {
    this.theme = new PaintingCreator().pickRandomPainting();
    this.initializeCanvas();
  }

  initializeCanvas(): void {
    const canvas: HTMLCanvasElement = this.canvasRef.nativeElement;
    this.context = canvas.getContext("2d")!;
    this.context.lineWidth = this.penWidth;
    this.context.strokeStyle = this.color;
    this.context.lineCap = "round";
    this.context.imageSmoothingEnabled = true;
    this.context.fillStyle = "#ffffff";
    this.context.fillRect(0, 0, canvas.width, canvas.height);

    canvas.addEventListener("mousedown", this.onMouseDown.bind(this));
    canvas.addEventListener("touchstart", this.onTouchStart.bind(this));
    canvas.addEventListener("mouseenter", this.onMouseEnter.bind(this));
  }

  selectPen(): void {
    if (!this.isPenSelected) {
      this.isPenSelected = true;
      this.isEraserSelected = false;
      this.context.strokeStyle = this.color;
      this.context.lineWidth = this.penWidth;
    }
  }

  selectEraser(): void {
    if (!this.isEraserSelected) {
      this.isPenSelected = false;
      this.isEraserSelected = true;
      this.context.strokeStyle = this.eraser;
      this.context.lineWidth = this.eraserWidth;
    }
  }

  private getMouseCoordinates(event: MouseEvent | TouchEvent): {
    x: number;
    y: number;
  } {
    const canvas: HTMLCanvasElement = this.canvasRef.nativeElement;
    const rect = canvas.getBoundingClientRect();

    const clientX =
      event instanceof MouseEvent ? event.clientX : event.touches[0].clientX;
    const clientY =
      event instanceof MouseEvent ? event.clientY : event.touches[0].clientY;

    const offsetX = clientX - rect.left;
    const offsetY = clientY - rect.top;

    return { x: offsetX, y: offsetY };
  }

  private draw(x: number, y: number): void {
    const distance = Math.hypot(x - this.prevX, y - this.prevY);

    if (distance > this.minDistance && this.isDrawing) {
      const command = () => {
        const controlX = (x + this.prevX) / 2;
        const controlY = (y + this.prevY) / 2;

        this.context.quadraticCurveTo(
          this.prevX,
          this.prevY,
          controlX,
          controlY
        );
        this.context.stroke();

        this.prevX = x;
        this.prevY = y;

        this.context.beginPath();
        this.context.moveTo(controlX, controlY);
      };

      command();
      this.executedCommands.push(command);
    }
  }

  onMouseDown(event: MouseEvent): void {
    this.isDrawing = true;
    const { x, y } = this.getMouseCoordinates(event);
    this.context.beginPath();
    this.context.moveTo(x, y);
    this.prevX = x;
    this.prevY = y;
  }

  onMouseMove(event: MouseEvent): void {
    if (this.isDrawing) {
      const { x, y } = this.getMouseCoordinates(event);
      this.draw(x, y);
    }
  }

  onMouseUp(): void {
    this.isDrawing = false;
  }

  onTouchStart(event: TouchEvent): void {
    event.preventDefault();
    this.isDrawing = true;
    const { x, y } = this.getMouseCoordinates(event);
    this.context.beginPath();
    this.context.moveTo(x, y);
  }

  onTouchMove(event: TouchEvent): void {
    event.preventDefault();
    if (this.isDrawing) {
      const { x, y } = this.getMouseCoordinates(event);
      this.draw(x, y);
    }
  }

  onTouchEnd(): void {
    this.isDrawing = false;
  }

  clearCanvas(): void {
    this.context.fillStyle = "#ffffff";
    this.context.fillRect(
      0,
      0,
      this.context.canvas.width,
      this.context.canvas.height
    );
  }

  updateColor(): void {
    if (this.isEraserSelected) {
      this.selectPen();
    }
    this.context.strokeStyle = this.color;
  }

  finish(): void {
    this.showPicture = true;
    setTimeout(() => {
      this.openTextBubble(SudokuAiOutro);
    }, 1000);
    if (localStorage.getItem("drawai") == null) {
      localStorage.setItem("drawai", "true");
    }
  }

  updateLineWidth(value: Event): void {
    const element = value.currentTarget as HTMLInputElement;
    this.penWidth = element.valueAsNumber;
    if (this.isPenSelected) {
      this.context.lineWidth = this.penWidth;
    }
  }

  updateEraserWidth(value: Event): void {
    const element = value.currentTarget as HTMLInputElement;
    this.eraserWidth = element.valueAsNumber;
    if (this.isEraserSelected) {
      this.context.lineWidth = this.eraserWidth;
    }
  }

  private setCursorStyle(className: string): void {
    const canvas: HTMLCanvasElement = this.canvasRef.nativeElement;
    canvas.classList.remove(
      "canvas-extract-cursor",
      "canvas-hover-cursor",
      "canvas-auto-cursor"
    );
    canvas.classList.add(className);
  }

  onMouseEnter(): void {
    if (this.isExtracting) {
      this.setCursorStyle("canvas-extract-cursor");
    }
  }

  extractColor(): void {
    const canvas: HTMLCanvasElement = this.canvasRef.nativeElement;
    this.isExtracting = true;

    const clickHandler = (event: MouseEvent) => {
      const { x, y } = this.getMouseCoordinates(event);
      const pixelData = this.context.getImageData(x, y, 1, 1).data;
      const hexColor = this.rgbToHex(pixelData[0], pixelData[1], pixelData[2]);
      this.color = hexColor;
      this.updateColor();
      if (this.isEraserSelected) {
        this.selectPen();
      }
      canvas.removeEventListener("click", clickHandler);
      this.isExtracting = false;
      this.setCursorStyle("canvas-auto-cursor");
    };

    canvas.addEventListener("click", clickHandler, { once: true });
  }

  rgbToHex(r: number, g: number, b: number): string {
    const componentToHex = (c: number) => {
      const hex = c.toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    };
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }

  //Open dialog on screen load
  constructor(public dialog: MatDialog) {
    this.openTextBubble(DrawAiIntro);
  }

  openTextBubble(conversationType: any) {
    this.convoRef = this.dialog.open(TextBubbleComponent, {
      width: "1000px",
      height: "400px",
      disableClose: true,
      data: { conversationType: conversationType },
    });
    if (conversationType == DrawAiIntro) {
      this.convoRef.afterClosed().subscribe(() => {
        this.openRules();
      });
    }
  }

  //Open dialog
  openRules() {
    this.rulesDialog = this.dialog.open(Dialog);
  }
}

@Component({
  selector: "dialog-drawai",
  templateUrl: "./dialog-drawai.html",
  styleUrls: ["./dialog-drawai.css"],
})
export class Dialog {}
