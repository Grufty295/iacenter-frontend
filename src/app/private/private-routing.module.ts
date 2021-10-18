import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { MainComponent } from './pages/main/main.component';
import { UsersComponent } from './pages/users/users.component';
import { RoleGuard } from '../core/guards/role.guard';
import { Roles } from '../core/models/roles.enum';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'users',
        component: UsersComponent,
        canActivate: [RoleGuard],
        data: { role: Roles.ADMIN_ROLE },
      },
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
