import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ToggleSidebarService } from 'src/app/core/utils/toggle-sidebar.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  toggleSidebar!: Observable<boolean>;

  constructor(private toggleSidebarService: ToggleSidebarService) {}

  ngOnInit(): void {
    this.toggleSidebar = this.toggleSidebarService.isSidebarVisible;
  }
}
