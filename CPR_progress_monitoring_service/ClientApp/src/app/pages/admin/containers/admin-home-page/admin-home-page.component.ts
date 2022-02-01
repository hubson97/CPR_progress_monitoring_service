import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { AdminService } from '../../services';

import {
  UsersLoggingHeatmapChartData
}
  from '../../models';

@Component({
  selector: 'app-admin-home-page',
  templateUrl: './admin-home-page.component.html',
  styleUrls: ['./admin-home-page.component.scss']
})
export class AdminHomePageComponent implements OnInit {
  public usersLogingHeatmapChartData$: Observable<UsersLoggingHeatmapChartData>;

  constructor(private adminService: AdminService) {
    this.usersLogingHeatmapChartData$ = this.adminService.loadUsersLogingHeatmapChartData();
  }

  ngOnInit(): void {
  }

}
