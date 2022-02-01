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
  selector: 'app-compression-depth-chart',
  templateUrl: './compression-depth-chart.component.html',
  styleUrls: ['./compression-depth-chart.component.scss']
})
export class CompressionDepthChartComponent implements OnInit {
  @Input() compressionDepthChartData: CompressionDepthChartData;
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  
  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "stepline-series",
          data: [410, 440, 450, 490, 440, 580, 480, 600, 530, 500, 550, 540, 600, 550]
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
    this.compressionDepthChartData.series
  }

}
