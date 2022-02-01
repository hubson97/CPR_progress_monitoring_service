import { Component, Input, OnInit } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels, ApexFill, ApexGrid,
  ApexLegend, ApexMarkers,
  ApexNonAxisChartSeries, ApexResponsive,
  ApexStroke,
  ApexTooltip,
  ApexXAxis
} from 'ng-apexcharts';


import { UsersExerciseFreqHeatmapChartData } from '../../models'; 
import { colors } from '../../../../consts';

type ChartOptions = {
  series: ApexAxisChartSeries | ApexNonAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
  legend: ApexLegend;
  colors: string[];
  markers: ApexMarkers;
  grid: ApexGrid;
  labels: string[];
  responsive: ApexResponsive[];
  fill: ApexFill;
};

@Component({
  selector: 'app-users-exercise-frequency-heatmap-chart',
  templateUrl: './users-exercise-frequency-heatmap-chart.component.html',
  styleUrls: ['./users-exercise-frequency-heatmap-chart.component.scss']
})
export class UsersExerciseFrequencyHeatmapChartComponent implements OnInit {
  @Input() usersExerciseFreqHeatmapChartData: UsersExerciseFreqHeatmapChartData;
  public apexHeatmapChartOptions: Partial<ChartOptions>;

  constructor() { }

  ngOnInit(): void {
    this.initChart();
  }

  public initChart(): void {
    this.apexHeatmapChartOptions = {
      series: this.usersExerciseFreqHeatmapChartData.series,
      chart: {
        height: 250,
        type: 'heatmap',
        toolbar: {
          show: false
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: [colors.GREEN],
      xaxis: {
        labels: {
          rotate: 0
        }
      }
    };
  }

}
