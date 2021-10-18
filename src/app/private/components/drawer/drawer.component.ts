import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ToggleSidebarService } from '../../../core/utils/toggle-sidebar.service';

import { MenuItem } from 'primeng/api';
import { AuthService } from '../../../core/auth/auth.service';
import { Roles } from '../../../core/models/roles.enum';

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
    private router: Router,
    private toggleSidebarService: ToggleSidebarService,
    private authService: AuthService
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
        visible: this.authService.userValue?.role === Roles.ADMIN_ROLE,
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

  logout() {
    this.authService.logout();
  }
}
