import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { MainComponent } from './pages/main/main.component';
import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'users', component: UsersComponent },
      { path: 'gallery', component: GalleryComponent },
      { path: '**', redirectTo: 'gallery' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateRoutingModule {}
