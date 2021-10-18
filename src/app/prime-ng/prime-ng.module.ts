import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SidebarModule } from 'primeng/sidebar';
import { ToastModule } from 'primeng/toast';

import { MessageService } from 'primeng/api';
@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    DividerModule,
    InputTextModule,
    RadioButtonModule,
    SidebarModule,
    MenuModule,
    ToastModule,
  ],
  providers: [MessageService],
})
export class PrimeNgModule {}
