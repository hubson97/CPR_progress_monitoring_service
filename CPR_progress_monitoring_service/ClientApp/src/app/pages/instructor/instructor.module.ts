import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { NgxEchartsModule } from 'ngx-echarts';
import { TrendModule } from 'ngx-trend';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FormsModule } from '@angular/forms';


import { InstructorRoutingModule } from './instructor-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { InstructorHomePageComponent, InstructorUsersPageComponent } from './containers';
import { DailyLineChartComponent } from './components';
import { InstructorService } from './services';



@NgModule({
  declarations: [
    InstructorHomePageComponent,
    InstructorUsersPageComponent,
    DailyLineChartComponent
  ],
  imports: [
    CommonModule,
    InstructorRoutingModule,
    SharedModule,
    MatTableModule,
    NgxEchartsModule,
    TrendModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatGridListModule,
    MatSelectModule,
    MatInputModule,
    NgApexchartsModule,
    FormsModule
  ],
  exports: [],
  providers: [
    InstructorService
  ]
})
export class InstructorModule { }
