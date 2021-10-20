import { Component, OnInit } from '@angular/core';
import { FileService } from '../../../core/services/file.service';
import { HttpHeaders } from '@angular/common/http';
import { TokenService } from 'src/app/core/services/token.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
})
export class UploadComponent implements OnInit {
  apiURL: string = `${this.fileService.FILE_API}/upload`;

  httpHeaders = new HttpHeaders({
    'Content-Type': 'multipart/form-data',
    Authorization: `Bearer ${this.tokenService.getToken()}`,
    'Access-Control-Allow-Origin': 'http://localhost:4200',
  });

  uploadedFiles: any[] = [];

  constructor(
    private fileService: FileService,
    private messageService: MessageService,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {}

  onUpload(event: any) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }

    this.fileService.addFiles(this.uploadedFiles).subscribe(
      (data: any) => {
        this.messageService.add({
          severity: 'success',
          summary: 'File/s Uploaded',
          detail: data.msg,
        });
      },
      (err) => {
        console.log(err);

        this.messageService.add({
          severity: 'error',
          summary: 'Something went wrong',
          detail: err.error,
        });
      }
    );
  }
}
