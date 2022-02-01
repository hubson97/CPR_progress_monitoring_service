import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services';
import { routes, roles } from '../../../../consts';
import { Login } from '../../models';
import { first } from 'rxjs';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent {
  public todayDate: Date = new Date();
  public routers: typeof routes = routes;
  public roles: typeof roles = roles;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.roles = roles;
  }

  public sendLoginForm(model:Login): void {
  
    console.log(model.email + ":::" + model.password);

    this.authService.login(model)
      .pipe(first())
      .subscribe(
        data => {
          if (data.body.roles.includes('administrator' as never)) {
            this.router.navigate([this.routers.ADMIN_HOME]);
          }
          else if (data.body.roles.includes(roles.INSTRUCTOR as never)) {
            this.router.navigate([this.routers.INSTRUCTOR_HOME]);
          }
          else if (data.body.roles.includes(roles.STUDENT as never)) {
            this.router.navigate([this.routers.STUDENT_HOME]);
          }
        },
        error => {
          alert('Error2: ' + error.body);
          
        }
    );

    console.log('finished');

    //if (this.authService.login(model))
    //  this.router.navigate([this.routers.DASHBOARD]).then();
    //else
    //  console.log("nie udalo sie zalogowac!");
  }

  public sendSignForm(): void {
    this.authService.sign();

    this.router.navigate([this.routers.DASHBOARD]).then();
  }
}
