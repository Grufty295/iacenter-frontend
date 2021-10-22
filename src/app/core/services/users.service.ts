import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  USER_API = `${environment.apiBaseUrl}/users`;

  httpAuthoredOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.tokenService.getToken()}`,
    }),
  };

  constructor(private tokenService: TokenService, private http: HttpClient) {}

  getUsers(limit: number, offset: number, sort = 'name:1', query: string) {
    return this.http.get(
      `${this.USER_API}?limit=${limit}&offset=${offset}&sort=${sort}&query=${query}`,
      this.httpAuthoredOptions
    );
  }

  addUser(name: string, email: string, password: string, role: string) {
    return this.http.post(
      this.USER_API,
      { name, email, password, role },
      { ...this.httpAuthoredOptions }
    );
  }

  updateUser(
    id: string,
    name?: string,
    email?: string,
    password?: string,
    role?: string
  ) {
    return this.http.put(
      `${this.USER_API}/${id}`,
      { name, email, password, role },
      { ...this.httpAuthoredOptions }
    );
  }

  deleteUser(id: string) {
    return this.http.delete(`${this.USER_API}/${id}`, {
      ...this.httpAuthoredOptions,
    });
  }
}
