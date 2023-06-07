import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'drawai',
  templateUrl: './drawai.component.html',
  styleUrls: ['./drawai.component.css']
})
export class DrawaiComponent implements OnInit {
  @ViewChild('myCanvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;
  private context!: CanvasRenderingContext2D;
  private isDrawing = false;

  ngOnInit(): void {
    const canvas: HTMLCanvasElement = this.canvasRef.nativeElement;
    this.context = canvas.getContext('2d')!;
    this.context.lineWidth = 10;
    this.context.strokeStyle = '#FF0000';

    // Add event listeners to handle mouse and touch events
    canvas.addEventListener('mousedown', this.onMouseDown.bind(this));
    canvas.addEventListener('mousemove', this.onMouseMove.bind(this));
    canvas.addEventListener('mouseup', this.onMouseUp.bind(this));
    canvas.addEventListener('touchstart', this.onTouchStart.bind(this));
    canvas.addEventListener('touchmove', this.onTouchMove.bind(this));
    canvas.addEventListener('touchend', this.onTouchEnd.bind(this));
  }

  private getMouseCoordinates(event: MouseEvent | TouchEvent): { x: number, y: number } {
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
      throw new Error('Invalid event type');
    }

    const offsetX = clientX - rect.left;
    const offsetY = clientY - rect.top;

    return { x: offsetX, y: offsetY };
  }

  private draw(x: number, y: number): void {
    this.context.lineTo(x, y);
    this.context.stroke();
  }

  onMouseDown(event: MouseEvent): void {
    this.isDrawing = true;
    const { x, y } = this.getMouseCoordinates(event);
    this.context.beginPath();
    this.context.moveTo(x, y);
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
}
