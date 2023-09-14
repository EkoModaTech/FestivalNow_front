import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamComponent } from './team/team.component';
import { PresentationComponent } from './presentation/presentation.component';



@NgModule({
  declarations: [
    TeamComponent,
    PresentationComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class AboutUsModule { }
