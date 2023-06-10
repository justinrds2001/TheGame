import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SudokuComponent } from "./minigames/sudoku/sudoku.component";
import { DrawaiComponent } from "./minigames/drawai/drawai.component";
import { PictureaiComponent } from "./minigames/pictureai/pictureai.component";
import { TextaiComponent } from "./minigames/textai/textai.component";
import { CdkDrag, CdkDragHandle } from "@angular/cdk/drag-drop";
import { FormsModule } from "@angular/forms";
import { ColorPickerModule } from "ngx-color-picker";
import { CdTimerModule } from "angular-cd-timer";
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    SudokuComponent,
    DrawaiComponent,
    PictureaiComponent,
    TextaiComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CdTimerModule,
    ColorPickerModule,
    CdkDrag,
    CdkDragHandle,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
