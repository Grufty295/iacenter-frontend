import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TokenService } from './token.service';

const FILE_API = `${environment.apiBaseUrl}/files/`;

@Injectable({
  providedIn: 'root',
})
export class FileService {
  httpAuthoredOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.tokenService.getToken()}`,
    }),
  };

  constructor(private tokenService: TokenService, private http: HttpClient) {}

  getFiles(page: number = 1) {
    let params = new HttpParams();

    params.append('page', page);

    return this.http.get(FILE_API, {
      ...this.httpAuthoredOptions,
      params: params,
    });
  }
}
