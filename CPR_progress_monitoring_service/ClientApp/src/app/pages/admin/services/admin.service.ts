import { Injectable, Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import { GroupsData, UsersByGroupData, UsersLoggingHeatmapChartData } from '../models';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  public loadGroupsData(): Observable<GroupsData> {

    let data: GroupsData = {
      groups: [
        { id: 1, name: 'Group 1' },
        { id: 2, name: 'Group 2' },
        { id: 3, name: 'Group 3' },
      ]
    };

    return of(data);
  }

  public loadUsersByGroup(groupId: number): Observable<UsersByGroupData> {
    let data: UsersByGroupData = {
      users: [
        { uid: 1, email: 'John@cpr.com', name: 'John', lastname: 'Lenon', group: 'Group 1', status:'active' },
        { uid: 2, email: 'Osmond@cpr.com', name: 'Osmond', lastname: 'Daves', group: 'Group 2', status: 'active' },
        { uid: 3, email: 'Guy@cpr.com', name: 'Guy', lastname: 'Mills', group: 'Group 1', status: 'inactive'},
        { uid: 4, email: 'Jade@cpr.com', name: 'Jade', lastname: 'Knight', group: 'Group 2', status: 'active'},
        { uid: 5, email: 'Jim@cpr.com', name: 'Jim', lastname: 'Madron', group: 'Group 3', status: 'active'},
        { uid: 6, email: 'Audrey@cpr.com', name: 'Audrey', lastname: 'Mason', group: 'Group 3', status: 'inactive'},
        { uid: 7, email: 'Karen@cpr.com', name: 'Karen', lastname: 'Hopkins', group: 'Group 2', status: 'active'},
      ]
    };
    return of(data);
  }

  constructor() { }

  public loadUsersLogingHeatmapChartData(): Observable<UsersLoggingHeatmapChartData> {
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


}
