import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpResponse, HttpHeaders } from '@angular/common/http';

import { User, Login, AuthResponse } from '../models';
import { routes, roles } from '../../../consts';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public routers: typeof routes = routes;
  public roles: typeof roles = roles;
  serverURL = this.routers.SERVERURL;


  resData: any = null;

  constructor(private httpClient: HttpClient) { }



  public login(model: Login): Observable<HttpResponse<AuthResponse>> { //boolean

    const httpOptions = {
      observe: 'response' as const,
    };



    return this.httpClient.post<AuthResponse>(this.serverURL + '/api/user/token', model, httpOptions)//,{ responseType: 'json' })
      .pipe(map(resp => {
        if (resp.ok == true && resp.body.isAuthenticated) {
          localStorage.setItem('userAuthData', JSON.stringify(resp.body));
          localStorage.setItem('token', resp.body.token);
          localStorage.setItem('roles', JSON.stringify(resp.body.roles));
          return resp;
        }
        else
          throw new Error('Unauthorized!');
      }));
  }

  public getAuthorizationToken(): string {
    const authToken = localStorage.getItem('token');

    return authToken === null ? '' : authToken;

  }

  public isAuthenticated(): boolean{
    const authToken = localStorage.getItem('token');
    return authToken === null ? false : true;
  }

  public getUserRole(): string {
    const userAuthData = JSON.parse(localStorage.getItem('userAuthData'));
    const roles: Array<string> = userAuthData.roles;

    if(roles.includes(this.roles.ADMIN))
      return this.roles.ADMIN;
    else if(roles.includes(this.roles.INSTRUCTOR))
      return this.roles.INSTRUCTOR;
    else if(roles.includes(this.roles.STUDENT))
      return this.roles.STUDENT
    return null;
  }


  public checkIfUserIsAdmin(): boolean {
    let authData = JSON.parse(localStorage.getItem('userAuthData'));
    if (authData.roles.include('Administrator'))
      return true;
    return false;
  }

  public checkIfUserIsInstructor(): boolean {
    let authData = JSON.parse(localStorage.getItem('userAuthData'));
    if (authData.roles.include('Instructor'))
      return true;
    return false;
  }


  public checkIfUserIsUser(): boolean {
    let authData = JSON.parse(localStorage.getItem('userAuthData'));
    if (authData.roles.include('User'))
      return true;
    return false;
  }


  public sign(): void {
    //localStorage.setItem('token', 'token');
  }

  public signOut(): void {
    localStorage.removeItem('userAuthData');
    localStorage.removeItem('token');
    localStorage.removeItem('roles');
  }

  public getUser(): Observable<User> {

    //let authData: AuthResponse = <AuthResponse>JSON.parse(localStorage.getItem('userAuthData'));
    //console.log(authData.username);

    let authData = JSON.parse(localStorage.getItem('userAuthData'));

    //console.log(temp.userName);
    //console.log(temp.username);

    return of({
      name: authData.userName,
      lastName: 'c'
    });
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occured:', error.error);
    }
    else {
      console.error(`Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError('Something bad happened; please try again later!');
  }


}
