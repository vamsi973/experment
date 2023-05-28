import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;

  private baseUrl = environment.server;

  constructor(
    private router: Router,
    private http: HttpClient,
  ) {
    this.userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
    this.user = this.userSubject.asObservable();
  }

  login(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login`, data)
      .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('user', JSON.stringify(user));
        this.userSubject.next(user);
        return user;
      }));
  }

  register(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/register`, data);
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
    // this.userSubject.next(null);
    this.router.navigate(['/login']);
  }


  public get userValue() {
    return this.userSubject.value;
  }
  getAll() {
    return this.http.get<User[]>(`${this.baseUrl}/users`);
  }

  getById(id: string) {
    return this.http.get<User>(`${this.baseUrl}/users/${id}`);
  }

  update(id: string, params: any) {
    return this.http.put(`${this.baseUrl}/users/${id}`, params)
      .pipe(map(x => {
        // update stored user if the logged in user updated their own record
        let strId: string = '' + this.userValue?.id;
        if (id == strId) {
          // update local storage
          const user = { ...this.userValue, ...params };
          localStorage.setItem('user', JSON.stringify(user));

          // publish updated user to subscribers
          this.userSubject.next(user);
        }
        return x;
      }));
  }

  delete(id: string) {
    return this.http.delete(`${this.baseUrl}/users/${id}`)
      .pipe(map(x => {
        // auto logout if the logged in user deleted their own record
        let strId: string = ''+this.userValue?.id;
        if (id == strId) {
          this.logout();
        }
        return x;
      }));
  }
}
