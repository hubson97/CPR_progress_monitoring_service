import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GroupsData, UsersByGroupData } from '../../models';
import { AdminService } from '../../services';


@Component({
  selector: 'app-admin-users-page',
  templateUrl: './admin-users-page.component.html',
  styleUrls: ['./admin-users-page.component.scss']
})
export class AdminUsersPageComponent implements OnInit {
  public usersByGroupData$: Observable<UsersByGroupData>;
  public groupsData$: Observable<GroupsData>;


  constructor(private adminService: AdminService) {
    this.usersByGroupData$ = this.adminService.loadUsersByGroup(1);
    this.groupsData$ = this.adminService.loadGroupsData();
  }

  ngOnInit(): void {
  }

}
