import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { InstructorService } from '../../services';
import { DailyLineChartData } from '../../models';


@Component({
  selector: 'app-instructor-home-page',
  templateUrl: './instructor-home-page.component.html',
  styleUrls: ['./instructor-home-page.component.css']
})
export class InstructorHomePageComponent implements OnInit {
  public dailyLineChartData$: Observable<DailyLineChartData>;

  constructor(private instrService: InstructorService) {
    this.dailyLineChartData$ = this.instrService.loadDailyLineChartData();

  }

  ngOnInit(): void {
  }

}
