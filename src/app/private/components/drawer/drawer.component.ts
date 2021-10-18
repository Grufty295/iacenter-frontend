import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ToggleSidebarService } from '../../../core/utils/toggle-sidebar.service';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
})
export class DrawerComponent implements OnInit {
  @Input() toggle: boolean = false;

  items!: MenuItem[];

  user: boolean = true;

  constructor(
    private toggleSidebarService: ToggleSidebarService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'Dashboard',
        items: [
          {
            label: 'Users',
            icon: 'pi pi-users',
            routerLink: '/dashboard/users',
            routerLinkActiveOptions: { exact: true },
          },
        ],
        visible: this.user,
      },
      {
        items: [
          {
            label: 'Gallery',
            icon: 'pi pi-images',
            routerLink: '/dashboard/gallery',
            routerLinkActiveOptions: { exact: true },
          },
        ],
      },

      {
        items: [
          {
            label: 'Edit Profile',
            icon: 'pi pi-cog',
            command: () => {
              this.closeSidebar();
            },
          },
        ],
      },
    ];
  }

  closeSidebar() {
    this.toggleSidebarService.setSidebarVisibility(false);
  }
}
