import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { ImageModule } from 'primeng/image';
import { MenuModule } from 'primeng/menu';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SidebarModule } from 'primeng/sidebar';
import { ToastModule } from 'primeng/toast';

import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    ConfirmDialogModule,
    DividerModule,
    InputTextModule,
    ImageModule,
    RadioButtonModule,
    SidebarModule,
    MenuModule,
    ToastModule,
  ],
  providers: [ConfirmationService, MessageService],
})
export class PrimeNgModule {}
