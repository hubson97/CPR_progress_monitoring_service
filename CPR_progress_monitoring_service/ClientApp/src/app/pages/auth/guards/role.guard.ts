import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../services';
import { routes } from '../../../consts';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate{
  public routers: typeof routes = routes;

  constructor(private authService: AuthService, private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {//Observable<boolean> {

    if (this.authService.isAuthenticated()) { //token
      //only if route contain data.role
      if(!!route.data.role){
        console.log(route.data.role);
        const routeRole = route.data.role;
        const userRole = this.authService.getUserRole();
        if(!!userRole){
          console.log(`userrole:${userRole};routeRole:${routeRole}`);
          if(userRole === routeRole){
            return true;
          }
        }
      }
    }
    alert('Forbidden permission!');
    this.router.navigate([this.routers.DASHBOARD]);
    
  }
}
