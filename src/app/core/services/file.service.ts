import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root',
})
export class FileService {
  FILE_API = `${environment.apiBaseUrl}/files`;

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

    return this.http.get(this.FILE_API, {
      ...this.httpAuthoredOptions,
      params: params,
    });
  }

  addFiles(files: any[] = []) {
    const formData: FormData = new FormData();

    console.log(files);

    files.forEach((file) => {
      formData.append('files', file, file.name);
    });

    console.log(formData.getAll('files'));

    return this.http.post(`${this.FILE_API}/upload`, formData, {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${this.tokenService.getToken()}`,
      },
    });
  }
}