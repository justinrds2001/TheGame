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
import { MatDialogModule } from "@angular/material/dialog";
import { MenuComponent } from "./menu/menu.component";

import { ITextService } from "./minigames/textai/services/ITextService.service";
import { TextService } from "./minigames/textai/services/textService.service";
import { IPictureService } from "./minigames/pictureai/services/IPictureService.service";
import { pictureService } from "./minigames/pictureai/services/pictureService.service";

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
    MatDialogModule,
  ],
  providers: [
    { provide: ITextService, useClass: TextService },
    { provide: IPictureService, useClass: pictureService },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
