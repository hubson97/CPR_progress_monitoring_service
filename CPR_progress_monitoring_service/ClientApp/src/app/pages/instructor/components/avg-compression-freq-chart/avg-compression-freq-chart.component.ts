import { Component, OnInit } from '@angular/core';

import {
  ApexAxisChartSeries,
  ApexChart,
  ApexTitleSubtitle,
  ApexDataLabels,
  ApexFill,
  ApexMarkers,
  ApexYAxis,
  ApexXAxis,
  ApexTooltip,
  ApexNonAxisChartSeries
} from "ng-apexcharts";

type ChartOptions = {
  series: ApexAxisChartSeries | ApexNonAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  title: ApexTitleSubtitle,
  fill: ApexFill;
  yaxis: ApexYAxis,
  xaxis: ApexXAxis;
  tooltip: ApexTooltip
};


@Component({
  selector: 'app-avg-compression-freq-chart',
  templateUrl: './avg-compression-freq-chart.component.html',
  styleUrls: ['./avg-compression-freq-chart.component.scss']
})
export class AvgCompressionFreqChartComponent implements OnInit {

  public apexLineChartOptions: Partial<ChartOptions>;

  constructor() {
    this.initChartData();
  }

  ngOnInit(): void {
  }

  public initChartData(): void {
    let ts2 = 1633089600000; //1484418600000 = Sat Jan 14 2017
    let dates = [];
    for (let i = 0; i < 10; i++) {
      ts2 = ts2 + 886400000;
      dates.push([ts2, this.dataSeries[1][i].value]);
    }

    this.apexLineChartOptions = {
      series: [
        {
          name: "XYZ MOTORS",
          data: dates
        }
      ],
      chart: {
        type: "area",
        stacked: false,
        height: 350,
        zoom: {
          type: "x",
          enabled: true,
          autoScaleYaxis: true
        },
        toolbar: {
          autoSelected: "zoom"
        }
      },
      dataLabels : {
        enabled: false
      },
      markers: {
        size: 0
      },
      title: {
        //text: "",
        //align: "left"
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.5,
          opacityTo: 0,
          stops: [0, 90, 100]
        }
      },
      yaxis: {
        labels: {
          formatter: function (val) {
            return (val).toFixed(0); //  / 2000000
          }
        },
        title: {
          text: ""
        }
      },
      xaxis: {
        type: "datetime"
      },
      tooltip: {
        shared: false,
        y: {
          formatter: function (val) {
            return (val).toFixed(0); //2000000
          }
        }
      },
    };

  }

  //dataSeries = [
  //  [
  //    {
  //      date: "2021-10-01",
  //      value: 80
  //    },
  //    {
  //      date: "2021-10-01",
  //      value: 120
  //    },
  //    {
  //      date: "2021-10-01",
  //      value: 80
  //    },
  //    {
  //      date: "2021-10-01",
  //      value: 120
  //    },
  //    {
  //      date: "2021-10-01",
  //      value: 80
  //    },
  //  ]

  //];

  dataSeries = [
    [],
    [
      {
        date: "2021-09-01",
        value: 78
      },
      {
        date: "2021-09-01",
        value: 130
      },
      {
        date: "2021-09-01",
        value: 100
      },
      {
        date: "2021-09-01",
        value: 110
      },
      {
        date: "2021-09-01",
        value: 85
      },
      {
        date: "2021-09-01",
        value: 122
      },
      {
        date: "2021-09-01",
        value: 100
      },
      {
        date: "2021-09-01",
        value: 110
      },
      {
        date: "2021-09-01",
        value: 93
      },
      {
        date: "2021-09-01",
        value: 105
      },
      {
        date: "2021-09-01",
        value: 88
      },
      {
        date: "2021-09-01",
        value: 113
      },
      {
        date: "2021-09-01",
        value: 111
      },
      {
        date: "2021-09-01",
        value: 120
      },
      {
        date: "2021-09-01",
        value: 80
      },
      {
        date: "2021-09-01",
        value: 120
      },
      {
        date: "2021-09-01",
        value: 80
      },
      {
        date: "2021-09-01",
        value: 120
      },
      {
        date: "2021-09-01",
        value: 80
      },
      {
        date: "2021-09-01",
        value: 120
      },
      {
        date: "2021-09-01",
        value: 80
      },
      {
        date: "2021-09-01",
        value: 120
      },
      {
        date: "2021-09-01",
        value: 89
      },
      {
        date: "2021-09-01",
        value: 112
      },
      {
        date: "2021-09-01",
        value: 80
      },
      {
        date: "2021-09-01",
        value: 100
      },
      {
        date: "2021-09-01",
        value: 80
      },
      {
        date: "2021-09-01",
        value: 99
      },
      {
        date: "2021-09-01",
        value: 100
      },
      {
        date: "2021-09-01",
        value: 85
      },
      {
        date: "2021-09-01",
        value: 93
      },
      {
        date: "2021-09-01",
        value: 120
      },
      {
        date: "2021-09-01",
        value: 80
      },
      {
        date: "2021-09-01",
        value: 120
      },
      {
        date: "2021-09-01",
        value: 80
      },
      {
        date: "2021-09-01",
        value: 120
      },
      {
        date: "2021-09-01",
        value: 80
      },
      {
        date: "2021-09-01",
        value: 120
      },
      {
        date: "2021-09-01",
        value: 80
      },
      {
        date: "2021-09-01",
        value: 120
      },
      {
        date: "2021-09-01",
        value: 80
      },
      {
        date: "2021-09-01",
        value: 120
      },
      {
        date: "2021-09-01",
        value: 80
      },
      {
        date: "2021-09-01",
        value: 120
      },
      {
        date: "2021-09-01",
        value: 80
      },
      {
        date: "2021-09-01",
        value: 120
      },
      {
        date: "2021-09-01",
        value: 80
      },
      {
        date: "2021-09-01",
        value: 120
      },
      {
        date: "2021-09-01",
        value: 80
      },
      {
        date: "2021-09-01",
        value: 120
      },
      {
        date: "2021-09-01",
        value: 80
      },
      {
        date: "2021-09-01",
        value: 120
      },
      {
        date: "2021-09-01",
        value: 80
      },
      {
        date: "2021-09-01",
        value: 120
      },
      {
        date: "2021-09-01",
        value: 96
      },
      {
        date: "2021-09-01",
        value: 110
      },
      {
        date: "2021-09-01",
        value: 106
      },
      {
        date: "2021-09-01",
        value: 105
      },
      {
        date: "2021-09-01",
        value: 90
      },
      {
        date: "2021-09-01",
        value: 115
      },
      {
        date: "2021-09-01",
        value: 10
      },


      
    ],
   
  ];




}

