import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InstructorUsersPageComponent, InstructorHomePageComponent, InstructorStatisticsPageComponent } from './containers';

const routes: Routes = [
  {
    path: 'users',
    component: InstructorUsersPageComponent
  },
  {
    path: 'home',
    component: InstructorHomePageComponent
  },
  {
    path: '',
    redirectTo: 'home'
  },
  {
    path: 'stats',
    component: InstructorStatisticsPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstructorRoutingModule { }
