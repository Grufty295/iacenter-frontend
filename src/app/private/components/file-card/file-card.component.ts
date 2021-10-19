import { Component, Input, OnInit } from '@angular/core';
import { IFile } from '../../../core/models/file';

@Component({
  selector: 'app-file-card',
  templateUrl: './file-card.component.html',
  styleUrls: ['./file-card.component.scss'],
})
export class FileCardComponent implements OnInit {
  @Input() file!: IFile;

  constructor() {}

  ngOnInit(): void {}
}
