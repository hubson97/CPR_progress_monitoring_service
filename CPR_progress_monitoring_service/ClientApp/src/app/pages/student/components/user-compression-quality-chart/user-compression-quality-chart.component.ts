import { Component, OnInit, Input } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexFill,
  ApexGrid,
  ApexLegend,
  ApexMarkers,
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexStroke,
  ApexTooltip,
  ApexXAxis,
  ApexYAxis,
} from 'ng-apexcharts';

import { ChestCompressQualityChartData } from '../../models';
import { colors } from '../../../../consts';

export type ChartOptions = {
  series: ApexAxisChartSeries | ApexNonAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
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
  selector: 'app-user-compression-quality-chart',
  templateUrl: './user-compression-quality-chart.component.html',
  styleUrls: ['./user-compression-quality-chart.component.scss']
})
export class UserCompressionQualityChartComponent implements OnInit {
  @Input() chestCompressQualityChartData: ChestCompressQualityChartData;
  public apexLineChartOptions: Partial<ChartOptions>;
  public colors: typeof colors = colors;

  constructor() { }

  ngOnInit(): void {
    this.initChart();
  }
  public initChart(): void {
    this.apexLineChartOptions = {
      series: this.chestCompressQualityChartData.series,
      chart: {
        height: 350,
        type: 'area',
        toolbar: {
          show: false
        }
      },
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      colors: [colors.GREEN],//, colors.BLUE
      stroke: {
        curve: 'smooth',
      },
      xaxis: {
        type: 'datetime',
        categories: this.chestCompressQualityChartData.categories
      },
      yaxis: {
        max: 100
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm'
        }
      }
    };
  }
}
