import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { UsersByGroupData, User, GroupsData, Group } from '../../models';

@Component({
  selector: 'app-users-list-table',
  templateUrl: './users-list-table.component.html',
  styleUrls: ['./users-list-table.component.scss']
})
export class UsersListTableComponent implements OnInit {
  @Input() usersByGroupData: UsersByGroupData;
  @Input() groupsData: GroupsData;

  columns = [
    {
      columnDef: 'uid',
      header: 'UID.',
      cell: (element: User) => `${element.uid}`,
    },
    {
      columnDef: 'name',
      header: 'Name',
      cell: (element: User) => `${element.name}`,
    },
    {
      columnDef: 'lastname',
      header: 'Lastname',
      cell: (element: User) => `${element.lastname}`,
    },
    {
      columnDef: 'email',
      header: 'Email',
      cell: (element: User) => `${element.email}`,
    },
    {
      columnDef: 'status',
      header: 'Status',
      cell: (element: User) => `${element.status}`,
    },
    {
      columnDef: 'group',
      header: 'Group',
      cell: (element: User) => `${element.group}`,
    },
    {
      columnDef: 'actions',
      header: 'Actions',
      cell: (element: User) => `${element.uid}`,
    },
  ];

  public dataSource = new MatTableDataSource<User>();//User[];
  displayedColumns = this.columns.map(c => c.columnDef);

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  groupNames: Group[];

  constructor() { }

  ngOnInit(): void {
    this.dataSource.data = this.usersByGroupData.users;
    this.groupNames = this.groupsData.groups;
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onGroupChange(name: string) {
    if (name === "") {
      this.dataSource = new MatTableDataSource(this.usersByGroupData.users);
    }
    else {
      let filteredData = this.usersByGroupData.users.filter(e => e.group == name);
      this.dataSource = new MatTableDataSource(filteredData);
    }
  }

  public redirectToDetails = (id: string) => {
    alert(`userid:${id}`);
  }

}
