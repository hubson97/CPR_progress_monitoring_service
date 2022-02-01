import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { InstructorService } from '../../services';
import { GroupsData, UsersByGroupData } from '../../models';

@Component({
  selector: 'app-instructor-users-page',
  templateUrl: './instructor-users-page.component.html',
  styleUrls: ['./instructor-users-page.component.scss']
})
export class InstructorUsersPageComponent implements OnInit {
  public usersByGroupData$: Observable<UsersByGroupData>;
  public groupsData$: Observable<GroupsData>;


  constructor(private instrService: InstructorService) {
    this.usersByGroupData$ = this.instrService.loadUsersByGroup(1);
    this.groupsData$ = this.instrService.loadGroupsData();
  }

  ngOnInit(): void {

  }

}
