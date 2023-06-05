import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SudokuComponent } from './minigames/sudoku/sudoku.component';
import { DrawaiComponent } from './minigames/drawai/drawai.component';
import { PictureaiComponent } from './minigames/pictureai/pictureai.component';
import { TextaiComponent } from './minigames/textai/textai.component';

@NgModule({
  declarations: [
    AppComponent,
    SudokuComponent,
    DrawaiComponent,
    PictureaiComponent,
    TextaiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
