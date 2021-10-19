import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth/auth.service';
import { TokenService } from './services/token.service';
import { FileService } from './services/file.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [AuthService, FileService, TokenService],
})
export class CoreModule {}
