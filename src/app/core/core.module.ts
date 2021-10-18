import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth/auth.service';
import { TokenService } from './services/token.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [AuthService, TokenService],
})
export class CoreModule {}
