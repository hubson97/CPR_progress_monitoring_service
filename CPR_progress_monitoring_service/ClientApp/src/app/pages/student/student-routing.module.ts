import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {StudentHomePageComponent} from './containers';

const routes: Routes = [
  {
    path: '',
    component: StudentHomePageComponent
  },
  {
    path: 'home',
    redirectTo: ''
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
