import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import {
  DailyLineChartData,
  GroupsData,
  UsersByGroupData,
  UsersExerciseFreqHeatmapChartData,
  ChestCompressQualityChartData,
  QualityDispersionChartData,
  CompressionDepthChartData
}
from '../models';


@Injectable({
  providedIn: 'root'
})
export class InstructorService {

  constructor(private httpClient: HttpClient) { }

  public loadDailyLineChartData(): Observable<DailyLineChartData> {
    return of({
      dailyData: {
        mobile: [16, 46, 45, 12, 37, 16, 41, 13, 25, 22, 30],
        //desktop: [42, 60, 49, 50, 13, 15, 16, 57, 56, 27, 43],
        desktop: [42, 47, 52, 50, 62, 69, 73, 77, 80, 87,93],
        tablet: [35, 25, 36, 30, 67, 35, 64, 12, 25, 36, 39]
      },
      weeklyData: {
        mobile: [23, 31, 45, 10, 37, 67, 43, 63, 15, 22, 30],
        desktop: [67, 60, 49, 50, 25, 15, 16, 57, 13, 27, 43],
        tablet: [56, 48, 23, 48, 13, 35, 64, 12, 45, 36, 39]
      },
      monthlyData: {
        mobile: [42, 47, 43, 50, 69, 61, 75, 73, 88, 87, 93],
        desktop: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
        tablet: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
      },
      labels: [
        '01/01/2021',
        '02/01/2021',
        '03/01/2021',
        '04/01/2021',
        '05/01/2021',
        '06/01/2021',
        '07/01/2021',
        '08/01/2021',
        '09/01/2021',
        '10/01/2021',
        '11/01/2021'
      ]
    });
  }

  //public loadGroupNamesListData(): Observable<GroupNamesData> {

  //  let data: GroupNamesData = {
  //    groupNames: [
  //      { value: 'gr1', viewValue: 'Grupa 1' },
  //      { value: 'gr2', viewValue: 'Grupa 2' },
  //      { value: 'gr3', viewValue: 'Grupa 3' },
  //    ]
  //  };
  //  return of(data);
  //}

  public loadUsersByGroup(groupId: number): Observable<UsersByGroupData>{
    let data: UsersByGroupData = {
      users: [
        { uid: 1, email: 'John@cpr.com', name: 'John', lastname: 'Lenon', group: 'Group 1' },
        { uid: 2, email: 'Osmond@cpr.com', name: 'Osmond', lastname: 'Daves', group: 'Group 2'},
        { uid: 3, email: 'Guy@cpr.com', name: 'Guy', lastname: 'Mills', group: 'Group 1'},
        { uid: 4, email: 'Jade@cpr.com', name: 'Jade', lastname: 'Knight', group: 'Group 2'},
        { uid: 5, email: 'Jim@cpr.com', name: 'Jim', lastname: 'Madron', group: 'Group 3'},
        { uid: 6, email: 'Audrey@cpr.com', name: 'Audrey', lastname: 'Mason', group: 'Group 3'},
        { uid: 7, email: 'Karen@cpr.com', name: 'Karen', lastname: 'Hopkins', group: 'Group 2'},
      ]
    };
    return of(data);
  }

  public loadGroupsData(): Observable<GroupsData> {

    let data: GroupsData = {
      groups: [
        { id: 1, name:'Group 1'},
        { id: 2, name:'Group 2'},
        { id: 3, name:'Group 3'},
      ]
    };

    return of(data);
  }

  public loadUsersExerciseFreqHeatmapChartData(): Observable<UsersExerciseFreqHeatmapChartData> {
    return of({
      series: [
        {
          name: 'Monday',
          data: this.generateApexHeatmapChartData(55, {
            min: 0,
            max: 90
          })
        },
        {
          name: 'Tuesday',
          data: this.generateApexHeatmapChartData(55, {
            min: 0,
            max: 90
          })
        },
        {
          name: 'Wednesday',
          data: this.generateApexHeatmapChartData(55, {
            min: 0,
            max: 90
          })
        },
        {
          name: 'Thursday',
          data: this.generateApexHeatmapChartData(55, {
            min: 0,
            max: 90
          })
        },
        {
          name: 'Friday',
          data: this.generateApexHeatmapChartData(55, {
            min: 0,
            max: 90
          })
        },
        {
          name: 'Saturday',
          data: this.generateApexHeatmapChartData(55, {
            min: 0,
            max: 90
          })
        },
        {
          name: 'Sunday',
          data: this.generateApexHeatmapChartData(55, {
            min: 0,
            max: 90
          })
        },
      ],
    });
  }

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
          data: [45, 50, 60, 51, 68, 79, 75, 80, 83, 71, 89, 93, 96, 90, 95, 96,97]
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
  //open, high, low, close
  public loadQualityDispersionChartData(): Observable<QualityDispersionChartData> {
    return of({
      series: [
        {
          name: "candle",
          data: [
            {
              x: new Date(1609502400000),
              y: [18, 16, 56, 55]
            },
            {
              x: new Date(1610712000000),
              y: [25, 20, 68, 61]
            },
            {
              x: new Date(1612180800000),
              y: [23, 20, 65, 62]
            },
            {
              x: new Date(1613390400000),
              y: [30, 27, 68, 65]
            },
            {
              x: new Date(1614600000000),
              y: [40, 35, 73, 69]
            },
            {
              x: new Date(1615809600000),
              y: [43, 35, 78, 75]
            },
            {
              x: new Date(1617278400000),
              y: [45, 35, 78, 73]
            },
            {
              x: new Date(1618488000000),
              y: [41, 30, 90, 78]
            },
            {
              x: new Date(1619870400000),
              y: [55, 35, 96, 85]
            },
            {
              x: new Date(1621080000000),
              y: [47, 33, 86, 71]
            },
            {
              x: new Date(1622548800000),
              y: [52, 40, 86, 79]
            },
            {
              x: new Date(1623758400000),
              y: [54, 80, 94, 85]
            },
            {
              x: new Date(1625140800000),
              y: [55, 80, 90, 81]
            },
            {
              x: new Date(1626350400000),
              y: [65, 50, 92, 89]
            },
            {
              x: new Date(1627819200000),
              y: [70, 58, 88, 85]
            },
            {
              x: new Date(1629028800000),
              y: [76, 63, 92, 88]
            },
            {
              x: new Date(1630497600000),
              y: [84, 75, 95, 92]
            },
            {
              x: new Date(1631707200000),
              y: [77, 80, 96, 92]
            },
            {
              x: new Date(1633089600000),
              y: [85, 80, 96, 92]
            },
            {
              x: new Date(1634299200000),
              y: [86, 80, 96, 96]
            },
            {
              x: new Date(1635768000000),
              y: [87, 80, 96, 94]
            },
            {
              x: new Date(1636977600000),
              y: [89, 80, 96, 92]
            },
            {
              x: new Date(1638360000000),
              y: [90, 80, 96, 94]
            },
            {
              x: new Date(1639569600000),
              y: [93, 80, 96, 95]
            },
          ],
        }]
    });
  }


  public loadQualityDispersionChartData2(): Observable<QualityDispersionChartData> {
    return of({
      series: [
        {
          name: "candle",
          data: [
            {
              x: new Date(1538778600000),
              y: [29.81, 50.5, 23.04, 33.33]
            },
            {
              x: new Date(1538780400000),
              y: [32.01, 43.59, 20, 30.11]
            },
            {
              x: new Date(1538782200000),
              y: [30.71, 48.95, 23.34, 35.]
            },
            {
              x: new Date(1538784000000),
              y: [35.65, 51, 29.67, 38.24]
            },
            {
              x: new Date(1538785800000),
              y: [38.24, 40, 20, 24.47]
            },
            {
              x: new Date(1538787600000),
              y: [24.53, 36.03, 21.68, 24.31]
            },
            {
              x: new Date(1538789400000),
              y: [24.61, 32.2, 17, 26.02]
            },
            {
              x: new Date(1538791200000),
              y: [27, 27.62, 84.22, 3.02]
            },
            {
              x: new Date(1538793000000),
              y: [5, 8.03, 98.95, 4.01]
            },
            {
              x: new Date(1538794800000),
              y: [4.5, 14.4, 2.26, 8.02]
            },
            {
              x: new Date(15387900000),
              y: [8.02, 10.68, 1.99, 8.91]
            },
            {
              x: new Date(1538798400000),
              y: [8.91, 18.99, 8.01, 12]
            },
            {
              x: new Date(1538800200000),
              y: [12, 15.13, 5.09, 12]
            },
            {
              x: new Date(1538802000000),
              y: [12, 24.12, 8.43, 22.95]
            },
            {
              x: new Date(1538803800000),
              y: [23.91, 23.91, 15, 15.67]
            },
            {
              x: new Date(1538805600000),
              y: [18.69, 18.74, 10, 10.4]
            },
            {
              x: new Date(1538807400000),
              y: [11, 22.78, 10.4, 14.9]
            },
            {
              x: new Date(1538809200000),
              y: [14.9, 26.2, 13.33, 23.45]
            },
            {
              x: new Date(1538811000000),
              y: [23.48, 27, 18.38, 20.35]
            },
            {
              x: new Date(1538812800000),
              y: [19.43, 20.35, 10.05, 15.53]
            },
            {
              x: new Date(1538814600000),
              y: [15.53, 17.93, 10, 15.19]
            },
            {
              x: new Date(1538816400000),
              y: [15.19, 21.6, 8.2, 20]
            },
            {
              x: new Date(1538818200000),
              y: [19.54, 25.17, 14.15, 20]
            },
            {
              x: new Date(1538820000000),
              y: [20.33, 34.15, 17.24, 24.61]
            },
            {
              x: new Date(1538821800000),
              y: [25.95, 26, 11., 17.58]
            },
            {
              x: new Date(1538823600000),
              y: [19, 25.97, 95.27, 98.86]
            },
            {
              x: new Date(1538825400000),
              y: [98.86, 98.88, 70, 87.16]
            },
            {
              x: new Date(1538827200000),
              y: [88.86, 0, 80, 93.4]
            },
            {
              x: new Date(1538829000000),
              y: [93.99, 98.89, 85, 87.81]
            },
            {
              x: new Date(1538830800000),
              y: [87.81, 92.73, 67.14, 78]
            },
            {
              x: new Date(1538832600000),
              y: [78.35, 81.72, 67.39, 79]
            },
            {
              x: new Date(1538834400000),
              y: [79.38, 80.92, 65.77, 75.96]
            },
            {
              x: new Date(1538836200000),
              y: [75.96, 89, 71.77, 88.92]
            },
            {
              x: new Date(1538838000000),
              y: [88.92, 94, 77.55, 89.22]
            },
            {
              x: new Date(1538839800000),
              y: [89.3, 98.89, 89.1, 96.08]
            },
            {
              x: new Date(1538841600000),
              y: [97.5, 0, 88.39, 96.25]
            },
            {
              x: new Date(1538843400000),
              y: [98.03, 0, 88.73, 95.97]
            },
            {
              x: new Date(1538845200000),
              y: [95.97, 2.01, 88.17, 2]
            },
            {
              x: new Date(1538847000000),
              y: [2, 7, 96.51, 99.95]
            },
            {
              x: new Date(1538848800000),
              y: [0.63, 1.21, 90.39, 91.02]
            },
            {
              x: new Date(1538850600000),
              y: [91.02, 3.08, 91, 91]
            },
            {
              x: new Date(1538852400000),
              y: [91, 1.32, 85, 92]
            },
            {
              x: new Date(1538854200000),
              y: [93.13, 96.01, 90, 93.34]
            },
            {
              x: new Date(1538856000000),
              y: [93.34, 4.76, 82.63, 93.86]
            },
            {
              x: new Date(1538857800000),
              y: [93.86, 4.28, 86.57, 0.01]
            },
            {
              x: new Date(1538859600000),
              y: [1.81, 3.21, 92.78, 96.25]
            },
            {
              x: new Date(1538861400000),
              y: [96.25, 4.2, 90, 2.99]
            },
            {
              x: new Date(1538863200000),
              y: [2.99, 6, 84.99, 87.81]
            },
            {
              x: new Date(15388000000),
              y: [87.81, 95, 83.27, 91.96]
            },
            {
              x: new Date(15388800000),
              y: [91.97, 96.07, 85, 88.39]
            },
            {
              x: new Date(1538868600000),
              y: [87.6, 98.21, 87.6, 94.27]
            },
            {
              x: new Date(1538870400000),
              y: [96.44, 1, 90, 96.55]
            },
            {
              x: new Date(1538872200000),
              y: [98.91, 5, 96.61, 0.02]
            },
            {
              x: new Date(1538874000000),
              y: [0.55, 5, 89.14, 93.01]
            },
            {
              x: new Date(1538875800000),
              y: [93.15, 5, 92, 3.06]
            },
            {
              x: new Date(1538877600000),
              y: [3.07, 4.5, 99.09, 3.89]
            },
            {
              x: new Date(1538879400000),
              y: [4.44, 4.44, 0, 3.5]
            },
            {
              x: new Date(1538881200000),
              y: [3.5, 3.99, 97.5, 3.86]
            },
            {
              x: new Date(1538883000000),
              y: [3.85,5,0, 4.07]
            },
            {
              x: new Date(1538884800000),
              y: [4.98, 6, 4.07, 6]
            }
          ] 
        }
      ],
    });
  }

  public loadCompressionDepthChartData(): Observable<CompressionDepthChartData> {

    return null;
  }
}
