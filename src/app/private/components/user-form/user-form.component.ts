import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { UsersService } from '../../../core/services/users.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
  isAddMode: boolean = true;

  userForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
    private usersService: UsersService,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) {}

  ngOnInit(): void {
    this.userForm = this.createFormGroup();

    if (this.config.data) {
      this.isAddMode = false;

      const { name, email, role } = this.config.data;

      this.userForm.setValue({
        name,
        email,
        password: null,
        role,
      });
    }
  }

  createFormGroup() {
    return this.fb.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email]),
      password: new FormControl('', [Validators.minLength(8)]),
      role: new FormControl('USER_ROLE'),
    });
  }

  submit() {
    const { name, email, password, role } = this.userForm.value;

    if (this.isAddMode) {
      this.addUser(name, email, password, role);
    } else {
      this.editUser(this.config.data.uid, name, email, password, role);
    }

    this.ref.close();

    this.userForm.reset();
  }

  addUser(name: string, email: string, password: string, role: string) {
    this.usersService.addUser(name, email, password, role).subscribe(
      () => {
        this.messageService.add({
          severity: 'success',
          summary: 'User added',
          detail: 'User added successfully',
        });
      },
      (err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: err.error,
        });
      }
    );
  }

  editUser(
    id: string,
    name?: string,
    email?: string,
    password?: string,
    role?: string
  ) {
    this.usersService.updateUser(id, name, email, password, role).subscribe(
      () => {
        this.messageService.add({
          severity: 'info',
          summary: 'User updated',
          detail: 'User updated successfully',
        });
      },
      (err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: err.error,
        });
      }
    );
  }
}
