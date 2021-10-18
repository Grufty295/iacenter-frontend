import { Injectable } from '@angular/core';
import { CanLoad, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivateChild, CanLoad {
  constructor(private authService: AuthService, private router: Router) {}

  canActivateChild(): Observable<boolean> | boolean {
    const user = this.authService.userValue;
    console.log(user);

    if (user) {
      return true;
    }
    this.router.navigate(['/auth']);
    return false;
  }

  canLoad(): Observable<boolean> | boolean {
    const user = this.authService.userValue;
    if (user) {
      return true;
    }
    this.router.navigate(['/auth']);
    return false;
  }
}
