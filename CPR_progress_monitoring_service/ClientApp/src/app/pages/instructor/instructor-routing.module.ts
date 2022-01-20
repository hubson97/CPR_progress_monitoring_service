import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InstructorUsersPageComponent, InstructorHomePageComponent } from './containers';

const routes: Routes = [
  {
    path: 'users',
    component: InstructorUsersPageComponent
  },
  {
    path: '',
    component: InstructorHomePageComponent
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
export class InstructorRoutingModule { }
