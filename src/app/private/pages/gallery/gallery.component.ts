import { Component, OnInit, ViewChild } from '@angular/core';

import { NgxMasonryOptions, NgxMasonryComponent } from 'ngx-masonry';
import { FileService } from '../../../core/services/file.service';
import { IFile } from '../../../core/models/file';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  selectedIndex!: number | null;

  filesDataPagination: any = {};
  totalFilePages!: number;
  filesList: IFile[] = [];

  @ViewChild(NgxMasonryComponent) masonry!: NgxMasonryComponent;

  apiURI = environment.apiBaseUrl;

  isLoading: boolean = false;

  masonryOptions: NgxMasonryOptions = {
    gutter: 10,
    horizontalOrder: true,
    columnWidth: 320,
  };

  constructor(private fileService: FileService) {}

  ngOnInit() {
    this.isLoading = true;
    this.fileService.getFiles().subscribe((files: any) => {
      this.filesDataPagination = files;

      this.filesList = files.filesList;
      this.totalFilePages = this.filesDataPagination.totalPages;
      this.isLoading = false;
    });
  }

  setIndex(index: number | null) {
    this.selectedIndex = index;
  }

  onScroll() {
    if (this.filesDataPagination.page >= this.totalFilePages) return;
    this.showMoreImages();
  }

  showMoreImages() {
    this.isLoading = true;
    console.log('pre files', this.filesList);
    console.log('pre', this.filesDataPagination.page);
    this.filesDataPagination.page += 1;
    this.fileService
      .getFiles(this.filesDataPagination.page)
      .subscribe((files: any) => {
        this.filesList.push(...files.filesList);
        console.log('post files', this.filesList);
        this.isLoading = false;
      });
  }

  insertImage() {
    this.masonry.reloadItems();
    this.masonry.layout();
  }

  itemsLoaded() {
    console.log('itemsloaded');
  }
}
