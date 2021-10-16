import { Component, OnInit } from '@angular/core';
import { ToggleSidebarService } from 'src/app/core/utils/toggle-sidebar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private toggleSidebarService: ToggleSidebarService) {}

  ngOnInit(): void {}

  openSidebar() {
    this.toggleSidebarService.setSidebarVisibility(true);
  }
}
