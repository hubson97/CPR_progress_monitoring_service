import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';
import { TrendModule } from 'ngx-trend';

import { NgApexchartsModule } from 'ng-apexcharts';
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { MaterialModule } from '../../material/material.module';

import { InstructorRoutingModule } from './instructor-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { InstructorHomePageComponent, InstructorUsersPageComponent } from './containers';
import { DailyLineChartComponent, UsersListTableComponent } from './components';
import { InstructorService } from './services';
import { InstructorStatisticsPageComponent } from './containers/instructor-statistics-page/instructor-statistics-page.component';
import { UsersExerciseFrequencyHeatmapChartComponent } from './components/users-exercise-frequency-heatmap-chart/users-exercise-frequency-heatmap-chart.component';
import { ChestCompressionQualityChartComponent } from './components/chest-compression-quality-chart/chest-compression-quality-chart.component';
import { QualityDispersionChartComponent } from './components/quality-dispersion-chart/quality-dispersion-chart.component';
import { CompressionDepthChartComponent } from './components/compression-depth-chart/compression-depth-chart.component';
import { AvgCompressionFreqChartComponent } from './components/avg-compression-freq-chart/avg-compression-freq-chart.component';



@NgModule({
  declarations: [
    InstructorHomePageComponent,
    InstructorUsersPageComponent,
    DailyLineChartComponent,
    UsersListTableComponent,
    InstructorStatisticsPageComponent,
    UsersExerciseFrequencyHeatmapChartComponent,
    ChestCompressionQualityChartComponent,
    QualityDispersionChartComponent,
    CompressionDepthChartComponent,
    AvgCompressionFreqChartComponent
  ],
  imports: [
    CommonModule,
    InstructorRoutingModule,
    SharedModule,
    TrendModule,
    NgxEchartsModule,
    NgApexchartsModule,
    MaterialModule,

    //FormsModule,
    //MatTableModule,
    //MatCardModule,
    //MatIconModule,
    //MatMenuModule,
    //MatButtonModule,
    //MatProgressBarModule,
    //MatToolbarModule,
    //MatGridListModule,
    //MatSelectModule,
    //MatInputModule,
    //MatNativeDateModule,

  ],
  exports: [],
  providers: [
    InstructorService
  ]
})
export class InstructorModule { }
