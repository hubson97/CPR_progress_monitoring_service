import { Component, OnInit, Input, ViewChild } from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexStroke,
  ApexTitleSubtitle,
  ApexDataLabels,
  ApexMarkers
} from "ng-apexcharts";

type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  markers: ApexMarkers;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  title: ApexTitleSubtitle;
};

import { CompressionDepthChartData } from '../../models';

@Component({
  selector: 'app-user-compression-depth-chart',
  templateUrl: './user-compression-depth-chart.component.html',
  styleUrls: ['./user-compression-depth-chart.component.scss']
})
export class UserCompressionDepthChartComponent implements OnInit {
  @Input() compressionDepthChartData: CompressionDepthChartData;
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "stepline-series",
          data: [410, 420, 480, 470, 440, 550, 570, 600, 525, 560, 550, 530, 610, 560]
        }
      ],
      chart: {
        type: "line",
        height: 350
      },
      stroke: {
        curve: "stepline"
      },
      dataLabels: {
        enabled: false
      },
      title: {
        //text: "Stepline Chart",
        //align: "left"
      },
      markers: {
        hover: {
          sizeOffset: 4
        }
      }
    };
  }

  ngOnInit(): void {
  }

}
