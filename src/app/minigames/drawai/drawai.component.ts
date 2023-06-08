import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";

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

  color = "#000000";
  eraser = "#ffffff";
  penWidth = 15;
  eraserWidth = 50;

  isPenSelected = true;
  isEraserSelected = false;
  isExtracting = false;

  prevX = 0;
  prevY = 0;

  private minDistance = 2;
  private executedCommands: (() => void)[] = [];

  ngOnInit(): void {
    const canvas: HTMLCanvasElement = this.canvasRef.nativeElement;
    this.context = canvas.getContext("2d")!;
    this.context.lineWidth = this.penWidth;
    this.context.strokeStyle = this.color;
    this.context.lineCap = "round";
    this.context.imageSmoothingEnabled = true;
    this.context.fillStyle = "#ffffff";
    this.context.fillRect(0, 0, canvas.width, canvas.height);

    canvas.addEventListener("mousedown", this.onMouseDown.bind(this));
    canvas.addEventListener("mousemove", this.onMouseMove.bind(this));
    canvas.addEventListener("mouseup", this.onMouseUp.bind(this));
    canvas.addEventListener("touchstart", this.onTouchStart.bind(this));
    canvas.addEventListener("touchmove", this.onTouchMove.bind(this));
    canvas.addEventListener("touchend", this.onTouchEnd.bind(this));
    canvas.addEventListener("mouseenter", this.onMouseEnter.bind(this));
  }

  selectPen(): void {
    this.isPenSelected = true;
    this.isEraserSelected = false;
    this.context.strokeStyle = this.color;
    this.context.lineWidth = this.penWidth;
  }

  selectEraser(): void {
    this.isPenSelected = false;
    this.isEraserSelected = true;
    this.context.strokeStyle = this.eraser;
    this.context.lineWidth = this.eraserWidth;
  }

  private getMouseCoordinates(event: MouseEvent | TouchEvent): {
    x: number;
    y: number;
  } {
    const canvas: HTMLCanvasElement = this.canvasRef.nativeElement;
    const rect = canvas.getBoundingClientRect();

    let clientX: number;
    let clientY: number;

    if (event instanceof MouseEvent) {
      clientX = event.clientX;
      clientY = event.clientY;
    } else if (event instanceof TouchEvent) {
      const touch = event.touches[0];
      clientX = touch.clientX;
      clientY = touch.clientY;
    } else {
      throw new Error("Invalid event type");
    }

    const offsetX = clientX - rect.left;
    const offsetY = clientY - rect.top;

    return { x: offsetX, y: offsetY };
  }

  private draw(x: number, y: number): void {
    const distance = Math.hypot(x - this.prevX, y - this.prevY);

    if (distance > this.minDistance && this.isDrawing) {
      // Create and execute a new command
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

      command(); // Execute the command

      // Add the command to the executedCommands array
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
    this.context.strokeStyle = this.color;
  }

  //download canvas as png
  downloadCanvas(): void {
    const canvas: HTMLCanvasElement = this.canvasRef.nativeElement;

    // Create a temporary canvas with a white background
    const tempCanvas = document.createElement("canvas");
    const tempContext = tempCanvas.getContext("2d")!;
    tempCanvas.width = canvas.width;
    tempCanvas.height = canvas.height;
    tempContext.fillStyle = "#ffffff"; // Set the background color to white
    tempContext.fillRect(0, 0, tempCanvas.width, tempCanvas.height);

    // Draw the original canvas onto the temporary canvas
    tempContext.drawImage(canvas, 0, 0);

    // Generate the download link using the temporary canvas
    const link = document.createElement("a");
    link.download = "drawing.png";
    link.href = tempCanvas.toDataURL();
    link.click();
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
    if (canvas.classList.length > 0) {
      canvas.classList.remove(
        "canvas-extract-cursor",
        "canvas-hover-cursor",
        "canvas-auto-cursor"
      );
    }
    canvas.classList.add(className);
  }

  onMouseEnter(): void {
    if (this.isExtracting) {
      this.setCursorStyle("canvas-extract-cursor");
    }
  }

  extractColor(): void {
    const canvas: HTMLCanvasElement = this.canvasRef.nativeElement;
    const context = canvas.getContext("2d")!;
    this.isExtracting = true;

    const clickHandler = (event: MouseEvent) => {
      const { x, y } = this.getMouseCoordinates(event);
      const pixelData = context.getImageData(x, y, 1, 1).data;
      const hexColor = this.rgbToHex(pixelData[0], pixelData[1], pixelData[2]);
      this.color = hexColor;
      this.updateColor();
      if (this.isEraserSelected) {
        this.isEraserSelected = false;
        this.isPenSelected = true;
        this.context.lineWidth = this.penWidth;
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
}
