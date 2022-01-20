import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentHomePageComponent } from './containers';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    StudentHomePageComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    SharedModule
  ]
})
export class StudentModule { }
