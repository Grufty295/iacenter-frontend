import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxMasonryModule } from 'ngx-masonry';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { PrivateRoutingModule } from './private-routing.module';
import { MainComponent } from './pages/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { DrawerComponent } from './components/drawer/drawer.component';
import { UsersComponent } from './pages/users/users.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { FileCardComponent } from './components/file-card/file-card.component';

@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    DrawerComponent,
    UsersComponent,
    GalleryComponent,
    FileCardComponent,
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    PrimeNgModule,
    NgxMasonryModule,
    InfiniteScrollModule,
  ],
})
export class PrivateModule {}
