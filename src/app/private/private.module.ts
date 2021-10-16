import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { PrivateRoutingModule } from './private-routing.module';
import { MainComponent } from './pages/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { DrawerComponent } from './components/drawer/drawer.component';
import { UsersComponent } from './pages/users/users.component';
import { GalleryComponent } from './pages/gallery/gallery.component';

@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    DrawerComponent,
    UsersComponent,
    GalleryComponent,
  ],
  imports: [CommonModule, PrivateRoutingModule, PrimeNgModule],
})
export class PrivateModule {}
