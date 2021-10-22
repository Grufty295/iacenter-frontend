import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthService } from './auth/auth.service';
import { TokenService } from './services/token.service';
import { FileService } from './services/file.service';

import { AuthInterceptor } from './utils/auth.interceptor';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    AuthService,
    FileService,
    TokenService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
})
export class CoreModule {}
