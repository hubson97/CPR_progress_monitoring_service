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


import { UsersLoggingHeatmapChartData } from '../../models';
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
  selector: 'app-admin-users-loging-heatmap-chart',
  templateUrl: './admin-users-loging-heatmap-chart.component.html',
  styleUrls: ['./admin-users-loging-heatmap-chart.component.scss']
})
export class AdminUsersLogingHeatmapChartComponent implements OnInit {
  @Input() usersLogingHeatmapChartData: UsersLoggingHeatmapChartData;
  public apexHeatmapChartOptions: Partial<ChartOptions>;


  ngOnInit(): void {
    this.initChart();
  }

  public initChart(): void {
    this.apexHeatmapChartOptions = {
      series: this.usersLogingHeatmapChartData.series,
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

