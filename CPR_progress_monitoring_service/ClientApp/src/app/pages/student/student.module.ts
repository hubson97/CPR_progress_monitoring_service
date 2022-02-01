import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgApexchartsModule } from 'ng-apexcharts';
import { TrendModule } from 'ngx-trend';

import { MaterialModule } from '../../material/material.module';

import { StudentRoutingModule } from './student-routing.module';
import { StudentHomePageComponent } from './containers';
import { SharedModule } from '../../shared/shared.module';
import { UserCompressionQualityChartComponent } from './components/user-compression-quality-chart/user-compression-quality-chart.component';
import { UserCompressionDepthChartComponent } from './components/user-compression-depth-chart/user-compression-depth-chart.component';

import { StudentService } from './services';

@NgModule({
  declarations: [
    StudentHomePageComponent,
    UserCompressionQualityChartComponent,
    UserCompressionDepthChartComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    SharedModule,
    TrendModule,
    NgxEchartsModule,
    NgApexchartsModule,
    MaterialModule,
  ],
  exports: [],
  providers: [
    StudentService
  ]
})
export class StudentModule { }
