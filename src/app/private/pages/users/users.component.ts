import { Component, OnInit } from '@angular/core';

import {
  LazyLoadEvent,
  ConfirmationService,
  MessageService,
} from 'primeng/api';
import { UsersService } from '../../../core/services/users.service';
import { DialogService } from 'primeng/dynamicdialog';
import { UserFormComponent } from '../../components/user-form/user-form.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  usersDataPagination: any = {};

  usersList: any[] = [];

  loading: boolean = true;

  filterValue: string = '';

  constructor(
    private confirmationService: ConfirmationService,
    private dialogService: DialogService,
    private messageService: MessageService,
    private usersService: UsersService
  ) {}

  ngOnInit(): void {
    this.loadDefaultUserList();
  }

  loadUsers(event: LazyLoadEvent) {
    this.loading = true;

    let { rows, first, sortField, sortOrder, globalFilter } = event;

    if (globalFilter === null) {
      globalFilter = '';
    }

    setTimeout(() => {
      this.usersService
        .getUsers(
          rows as number,
          first as number,
          `${sortField || 'name'}:${sortOrder}`,
          globalFilter
        )
        .subscribe((usersResponse: any) => {
          this.usersDataPagination = usersResponse;

          this.usersList = usersResponse.usersList;
        });

      this.loading = false;
    }, 1000);
  }

  openAddUser() {
    const ref = this.dialogService.open(UserFormComponent, {
      width: '90%',
      style: { 'max-width': '650px' },
    });

    ref.onClose.subscribe(() => {
      this.loadDefaultUserList();
    });
  }

  openEditUser(user: any) {
    const ref = this.dialogService.open(UserFormComponent, {
      data: user,
      width: '90%',
      style: { 'max-width': '650px' },
    });

    ref.onClose.subscribe(() => {
      this.loadDefaultUserList();
    });
  }

  openDeleteUser(user: any) {
    const ref = this.confirmationService.confirm({
      message: `Are you sure you want to delete ${user.name} user?`,
      accept: () => {
        this.usersService.deleteUser(user.uid).subscribe(
          () => {
            this.messageService.add({
              severity: 'info',
              summary: 'User deleted',
              detail: 'User deleted successfully',
            });
            this.loadDefaultUserList();
          },
          (err) => {
            this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: err.error,
            });
          }
        );
      },
    });
  }

  loadDefaultUserList() {
    this.usersService
      .getUsers(5, 0, 'name:1', '')
      .subscribe((usersResponse: any) => {
        this.usersDataPagination = usersResponse;

        this.usersList = usersResponse.usersList;
      });
  }
}
