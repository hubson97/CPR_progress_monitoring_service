import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AdminHomePageComponent, AdminUsersPageComponent} from './containers';
//import * from './components';

const routes: Routes = [
  {
    path: 'users',
    component: AdminUsersPageComponent
  },
  {
    path: '',
    component: AdminHomePageComponent
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
export class AdminRoutingModule { }
