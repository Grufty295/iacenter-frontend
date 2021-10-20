import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DividerModule } from 'primeng/divider';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextModule } from 'primeng/inputtext';
import { ImageModule } from 'primeng/image';
import { MenuModule } from 'primeng/menu';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
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
    FileUploadModule,
    InputTextModule,
    ImageModule,
    MenuModule,
    ProgressSpinnerModule,
    SidebarModule,
    RadioButtonModule,
    ToastModule,
  ],
  providers: [ConfirmationService, MessageService],
})
export class PrimeNgModule {}
