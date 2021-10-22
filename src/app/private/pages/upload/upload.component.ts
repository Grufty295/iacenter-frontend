import { Component, OnInit } from '@angular/core';
import { FileService } from '../../../core/services/file.service';
import { TokenService } from 'src/app/core/services/token.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
})
export class UploadComponent implements OnInit {
  uploadedFiles: any[] = [];

  isLoading: boolean = false;

  constructor(
    private fileService: FileService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {}

  onUpload(event: any) {
    this.isLoading = true;
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
        this.isLoading = false;
      },
      (err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Something went wrong',
          detail: err.error,
        });
      }
    );
  }
}
