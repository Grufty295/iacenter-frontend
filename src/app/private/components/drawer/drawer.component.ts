import { Component, Input, OnInit } from '@angular/core';

import { ToggleSidebarService } from '../../../core/utils/toggle-sidebar.service';

import {
  ConfirmationService,
  ConfirmEventType,
  MenuItem,
  MessageService,
} from 'primeng/api';

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

  sidebar = document.querySelector('p-sidebar-mask');

  user: boolean = true;

  constructor(
    private authService: AuthService,
    private confirmationService: ConfirmationService,
    private toggleSidebarService: ToggleSidebarService,
    private messageService: MessageService
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
    this.closeSidebar();

    this.confirmationService.confirm({
      message: 'Are you sure you want to LogOut?',
      header: 'LogOut Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.messageService.add({
          severity: 'warn',
          summary: 'You have accepted',
          detail: 'Logged Out successfully',
        });
        setTimeout(() => {
          this.authService.logout();
        }, 1000);
      },
      reject: () => {
        this.messageService.add({
          severity: 'info',
          summary: 'Rejected',
          detail: 'You have rejected to Log Out',
        });
      },
    });
  }
}
