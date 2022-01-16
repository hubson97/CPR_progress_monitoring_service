import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpResponse, HttpHeaders } from '@angular/common/http';

import { User, Login, AuthResponse } from '../models';
import { routes } from '../../../consts';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public routers: typeof routes = routes;
  serverURL = this.routers.SERVERURL;

  resData: any = null;

  constructor(private httpClient: HttpClient) { }
            

  public login(model: Login): Observable<HttpResponse<AuthResponse>>  { //boolean

    const httpOptions = {
      observe: 'response' as const,
    };

    return this.httpClient.post<AuthResponse>(this.serverURL + '/api/user/token', model, httpOptions)//,{ responseType: 'json' })
      .pipe(map(resp => {
        if (resp.ok == true && resp.body.isAuthenticated) {
          localStorage.setItem('userAuthData', JSON.stringify(resp.body));
          localStorage.setItem('token', resp.body.token);
          return resp;
        }
        else
          throw new Error('Unauthorized!');
      }));
  }

  public getSomethingTest(): void {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token')
      }),
      observe: 'response' as const,
    };



  }

  public sign(): void {
    //localStorage.setItem('token', 'token');
  } 
   
  public signOut(): void {
    localStorage.removeItem('userAuthData');
    localStorage.removeItem('token');
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
