import { Component, OnInit, ViewChild } from '@angular/core';

import { NgxMasonryOptions, NgxMasonryComponent } from 'ngx-masonry';
import { FileService } from '../../../core/services/file.service';
import { IFile } from '../../../core/models/file';

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
      console.log(this.filesDataPagination);
      console.log('Files list:', this.filesList);
      this.isLoading = false;
    });
  }

  setIndex(index: number | null) {
    this.selectedIndex = index;
  }

  onScroll() {
    console.log('scroll detectado');
    if (this.filesDataPagination.page >= this.totalFilePages) return;
    this.showMoreImages();
  }

  showMoreImages() {
    this.isLoading = true;
    this.filesDataPagination.page += 1;
    this.fileService
      .getFiles(this.filesDataPagination.page)
      .subscribe((files: any) => {
        this.filesList.push(...files.filesList);
        console.log('Files list:', this.filesList);
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
