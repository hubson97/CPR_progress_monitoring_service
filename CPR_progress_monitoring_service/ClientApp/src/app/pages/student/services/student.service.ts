import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import {
  //DailyLineChartData,
  //GroupsData,
  //UsersByGroupData,
  //UsersExerciseFreqHeatmapChartData,
  //QualityDispersionChartData,
  ChestCompressQualityChartData,
  CompressionDepthChartData
}
from '../models';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient: HttpClient) { }


  private generateApexHeatmapChartData(count, yrange): number[] {
    let i = 0;
    const series = [];
    while (i < count) {
      const x = 'w' + (i + 1).toString();
      const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push({ x, y });
      i++;
    }
    return series;
  }

  public loadChestCompressQualityChartData(): Observable<ChestCompressQualityChartData> {
    return of({
      series: [
        {
          name: 'series1',
          data: [45, 50, 60, 51, 68, 79, 75, 77, 80, 71, 89, 82, 90, 85, 90, 93,95]
        },
        //{
        //  name: 'series2',
        //  data: [11, 32, 45, 32, 34, 52, 41, 60]
        //}
      ],
      categories: [
        //'2018-09-19T00:00:00.000Z',
        //'2018-09-19T01:30:00.000Z',
        //'2018-09-19T02:30:00.000Z',
        //'2018-09-19T03:30:00.000Z',
        //'2018-09-19T04:30:00.000Z',
        //'2018-09-19T05:30:00.000Z',
        //'2018-09-19T06:30:00.000Z'
        '2021-09-05',
        '2021-09-10',
        '2021-09-15',
        '2021-09-19',
        '2021-09-22',
        '2021-09-27',
        '2021-10-08',
        '2021-10-20',
        '2021-10-27',
        '2021-11-06',
        '2021-11-15',
        '2021-11-20',
        '2021-11-24',
        '2021-12-02',
        '2021-12-13',
        '2021-12-25',
        '2022-01-05',
      ]
    });
  }



  public loadCompressionDepthChartData(): Observable<CompressionDepthChartData> {

    return null;
  }
}
