import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeTaskComponent } from './home-task.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../shared/material/material.module';
import { EnterLettersNumbersDirective } from './enter-letters-numbers.directive';
import { EnterBackgroundDirective } from './enter-background.directive';
import { HighlightTextDirective } from './highlight-text.directive'
import { ReverseTextPipe } from './reverse-text.pipe'
const routes = [
  {
    path: '',
    component: HomeTaskComponent,
  }
];

@NgModule({
  declarations: [HomeTaskComponent, EnterLettersNumbersDirective, EnterBackgroundDirective, HighlightTextDirective, ReverseTextPipe],
  imports: [
    CommonModule, RouterModule.forChild(routes), FormsModule, MaterialModule
  ]
})
export class HomeTaskModule {
}
