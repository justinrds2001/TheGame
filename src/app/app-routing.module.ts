import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SudokuComponent } from './minigames/sudoku/sudoku.component';
import { PictureaiComponent } from './minigames/pictureai/pictureai.component';
import { TextaiComponent } from './minigames/textai/textai.component';
import { DrawaiComponent } from './minigames/drawai/drawai.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'minigames',
  },
  {
    path: 'minigames',
    pathMatch: 'full',
    component: MenuComponent,
  },
  {
    path: 'minigames/sudoku',
    pathMatch: 'full',
    component: SudokuComponent,
  },
  {
    path: 'minigames/pictureai',
    pathMatch: 'full',
    component: PictureaiComponent,
  },
  {
    path: 'minigames/textai',
    pathMatch: 'full',
    component: TextaiComponent,
  },
  {
    path: 'minigames/drawai',
    pathMatch: 'full',
    component: DrawaiComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
