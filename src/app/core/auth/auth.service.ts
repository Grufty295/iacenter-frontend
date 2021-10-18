import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

import { IUser } from '../models/user';
import { TokenService } from '../services/token.service';
import { Router } from '@angular/router';

const AUTH_API = `${environment.apiBaseUrl}/auth/`;

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userSubject: BehaviorSubject<IUser | null>;
  public user: Observable<IUser | null>;

  constructor(
    private http: HttpClient,
    private router: Router,
    private tokenService: TokenService
  ) {
    this.userSubject = new BehaviorSubject<IUser | null>(
      this.tokenService.getUser()
    );
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): IUser | null {
    return this.userSubject!.value;
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'login',
      {
        email,
        password,
      },
      httpOptions
    );
  }

  register(
    username: string,
    email: string,
    password: string,
    role: string
  ): Observable<any> {
    return this.http.post(
      AUTH_API + 'signup',
      {
        username,
        email,
        password,
        role,
      },
      httpOptions
    );
  }

  renew(token: string) {
    return this.http.post(
      AUTH_API + 'renew',
      {},
      { headers: { 'Content-Type': 'application/json', refreshtoken: token } }
    );
  }

  logout() {
    this.userSubject.next(null);
    this.tokenService.signOut();
    this.router.navigate(['/auth/login']);
  }
}
