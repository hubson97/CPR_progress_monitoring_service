import { Component } from '@angular/core';
import { routes,roles } from '../../consts';

import { AuthService } from '../../pages/auth/services';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  public routes: typeof routes = routes;
  public roles: typeof roles = roles;
  public isOpenUiElements = false;

  public isAdminRole: boolean = false;
  public isInstructorRole: boolean = false;
  public isStudentRole: boolean = false;

  constructor(private authService: AuthService){}

  public ngOnInit(): void {
      const role = this.authService.getUserRole();
      if(role === this.roles.ADMIN){  //  
          this.isAdminRole = true;
          this.isInstructorRole = false;
          this.isStudentRole = false;
      }
      else if(role === this.roles.INSTRUCTOR){
          this.isAdminRole = false;
          this.isInstructorRole = true;
          this.isStudentRole = false;
      }
      else if(role === this.roles.STUDENT){
          this.isAdminRole = false;
          this.isInstructorRole = false;
          this.isStudentRole = true;
      }
      else{
          this.isAdminRole = false;
          this.isInstructorRole = false;
          this.isStudentRole = false;
      }
  }


  public openUiElements() {
    this.isOpenUiElements = !this.isOpenUiElements;
  }
}
