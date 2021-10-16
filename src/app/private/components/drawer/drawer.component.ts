import { Component, Input, OnInit } from '@angular/core';
import { ToggleSidebarService } from '../../../core/utils/toggle-sidebar.service';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
})
export class DrawerComponent implements OnInit {
  @Input() toggle: boolean = false;

  constructor(private toggleSidebarService: ToggleSidebarService) {}

  ngOnInit(): void {}

  closeSidebar() {
    this.toggleSidebarService.setSidebarVisibility(false);
  }
}
