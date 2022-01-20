import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { AdminHomePageComponent, AdminUsersPageComponent } from './containers';


@NgModule({
  declarations: [
    AdminHomePageComponent,
    AdminUsersPageComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ],
  exports:[],
  providers:[]
})
export class AdminModule { }
