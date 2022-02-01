import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { InstructorService } from '../../services';
import {
  DailyLineChartData,
  GroupsData, Group,
  UsersExerciseFreqHeatmapChartData
}
from '../../models';


@Component({
  selector: 'app-instructor-home-page',
  templateUrl: './instructor-home-page.component.html',
  styleUrls: ['./instructor-home-page.component.scss']
})
export class InstructorHomePageComponent implements OnInit {
  public dailyLineChartData$: Observable<DailyLineChartData>;
  public groupsData$: Observable<GroupsData>;

  public usersExerciseFreqHeatmapChartData$: Observable<UsersExerciseFreqHeatmapChartData>;

  groupNames: Group[];


  constructor(private instrService: InstructorService) {
    this.dailyLineChartData$ = this.instrService.loadDailyLineChartData();
    this.groupsData$ = this.instrService.loadGroupsData();//.loadGroupNamesListData();
    this.usersExerciseFreqHeatmapChartData$ = this.instrService.loadUsersExerciseFreqHeatmapChartData();
  }

  ngOnInit(): void {

    this.groupsData$.subscribe(x =>
      this.groupNames = x.groups);

  }

}
