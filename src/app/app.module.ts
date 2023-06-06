import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SudokuComponent } from './minigames/sudoku/sudoku.component';
import { DrawaiComponent } from './minigames/drawai/drawai.component';
import { PictureaiComponent } from './minigames/pictureai/pictureai.component';
import { TextaiComponent } from './minigames/textai/textai.component';
import { FormsModule } from '@angular/forms';
import { CdTimerModule } from 'angular-cd-timer';


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
    AppRoutingModule,
    FormsModule,
    CdTimerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
