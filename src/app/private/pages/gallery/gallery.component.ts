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

  public masonryOptions: NgxMasonryOptions = {
    gutter: 10,
    horizontalOrder: true,
    columnWidth: 320,
  };

  constructor(private fileService: FileService) {}

  ngOnInit() {
    this.fileService.getFiles().subscribe((files: any) => {
      this.filesDataPagination = files;

      this.filesList = files.filesList;
      this.totalFilePages = this.filesDataPagination.totalPages;
      console.log(this.filesDataPagination);
      console.log('Files list:', this.filesList);
    });
  }

  setIndex(index: number | null) {
    this.selectedIndex = index;
  }

  onScroll() {
    console.log('scroll detectado');
    if (this.filesDataPagination.page >= this.totalFilePages) return;
    // if (this.limit >= this.dummyPictures.length) return;

    this.showMoreImages();
  }

  showMoreImages() {
    this.filesDataPagination.page += 1;
    // this.limit += 15;
    // this.masonryImages = this.dummyPictures.slice(0, this.limit);
    this.fileService
      .getFiles(this.filesDataPagination.page)
      .subscribe((files: any) => {
        this.filesList.push(...files.filesList);
        console.log('Files list:', this.filesList);
      });
  }

  insertImage() {
    // this.masonryImages.splice(0, 0, this.dummyPictures[0]);
    this.masonry.reloadItems();
    this.masonry.layout();
  }

  itemsLoaded() {
    console.log('itemsloaded');
  }
}
