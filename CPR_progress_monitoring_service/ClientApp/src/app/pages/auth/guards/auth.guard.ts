import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { routes } from '../../../consts';
import { AuthService } from '../services';

@Injectable()
export class AuthGuard implements CanActivate{
  public routers: typeof routes = routes;

  constructor(private authService: AuthService,private router: Router) { //private authorize: AuthorizeService,
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {//Observable<boolean> {

    const token = this.authService.getAuthorizationToken();//localStorage.getItem('token');
    
    if (this.authService.isAuthenticated()) { //token
      return true;
    } else {
      this.router.navigate([this.routers.LOGIN]);
    }
  }
}
