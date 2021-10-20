import { Component, OnInit } from '@angular/core';

import { LazyLoadEvent } from 'primeng/api';
import { UsersService } from '../../../core/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  usersDataPagination: any = {};

  usersList: any[] = [];

  roles = ['Admin', 'User'];

  loading: boolean = true;

  filterValue: string = '';

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.usersService
      .getUsers(5, 0, 'name:1', '')
      .subscribe((usersResponse: any) => {
        this.usersDataPagination = usersResponse;

        this.usersList = usersResponse.usersList;
      });
  }

  loadUsers(event: LazyLoadEvent) {
    console.log(this.filterValue);
    this.loading = true;
    console.log(event);
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
}
