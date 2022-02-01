import { Component, OnInit, Input, ViewChild } from '@angular/core';
import * as moment from 'moment';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexYAxis,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexTooltip
} from "ng-apexcharts";


import { QualityDispersionChartData } from '../../models';
import { colors } from '../../../../consts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
  tooltip: ApexTooltip;
};

@Component({
  selector: 'app-quality-dispersion-chart',
  templateUrl: './quality-dispersion-chart.component.html',
  styleUrls: ['./quality-dispersion-chart.component.scss']
})
export class QualityDispersionChartComponent implements OnInit {
  @Input() qualityDispersionChartData: QualityDispersionChartData;
  public chartOptions: Partial<ChartOptions>;
  @ViewChild("chart") chart: ChartComponent;


  constructor() { }

  ngOnInit(): void {
    this.initChart();
  }

  public initChart(): void {
    this.chartOptions = {
      series: this.qualityDispersionChartData.series,
      chart: {
        height: 350,
        type: "candlestick"
      },
      title: {
        //text: "CandleStick Chart - Category X-axis",
        align: "left"
      },
      tooltip: {
        enabled: true
      },
      xaxis: {
        type: "category",
        labels: {
          formatter: function (val) {
            return moment(val).format("DD MM YYYY");
          }
        }
      },
      yaxis: {
        tooltip: {
          enabled: true
        }
      }
    };
  }


}
