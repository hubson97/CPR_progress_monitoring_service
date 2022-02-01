import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { routes } from '../../../consts';
import { AuthService } from '../services';

@Injectable()
export class AuthGuard implements CanActivate{
  public routers: typeof routes = routes;
  constructor(private authService: AuthService,private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const token = this.authService.getAuthorizationToken();
    if (this.authService.isAuthenticated()) { 
      return true;
    } else {
      this.router.navigate([this.routers.LOGIN]);
    }
  }
}
