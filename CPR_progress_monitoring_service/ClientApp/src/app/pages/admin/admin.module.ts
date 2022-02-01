import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';
import { TrendModule } from 'ngx-trend';
import { NgApexchartsModule } from 'ng-apexcharts';

import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { AdminHomePageComponent, AdminUsersPageComponent } from './containers';
import { AdminUsersLogingHeatmapChartComponent } from './components/admin-users-loging-heatmap-chart/admin-users-loging-heatmap-chart.component';

import { MaterialModule } from '../../material/material.module';

import { AdminService } from './services';
import { UsersListTableComponent } from './components/users-list-table/users-list-table.component';
import { UserActionsMenuComponent } from './components/user-actions-menu/user-actions-menu.component';

@NgModule({
  declarations: [
    AdminHomePageComponent,
    AdminUsersPageComponent,
    AdminUsersLogingHeatmapChartComponent,
    UsersListTableComponent,
    UserActionsMenuComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    TrendModule,
    NgApexchartsModule,
    NgxEchartsModule,
    MaterialModule,
  ],
  exports:[],
  providers: [
    AdminService,
  ]
})
export class AdminModule { }
