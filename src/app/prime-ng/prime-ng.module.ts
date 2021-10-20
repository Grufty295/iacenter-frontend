import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DividerModule } from 'primeng/divider';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextModule } from 'primeng/inputtext';
import { ImageModule } from 'primeng/image';
import { MenuModule } from 'primeng/menu';
import { MultiSelectModule } from 'primeng/multiselect';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SidebarModule } from 'primeng/sidebar';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';

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
    MultiSelectModule,
    ProgressSpinnerModule,
    SidebarModule,
    RadioButtonModule,
    ToastModule,
    TableModule,
    ToolbarModule,
  ],
  providers: [ConfirmationService, MessageService],
})
export class PrimeNgModule {}
