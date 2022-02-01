import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardPageComponent } from './pages/dashboard/containers';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { Forbidden403Component } from './pages/errors';
import { AuthGuard, RoleGuard } from './pages/auth/guards';

import { roles } from './consts';

const routes: Routes = [
  {
    path: 'admin',
    canActivate: [AuthGuard, RoleGuard],
    data:{ role: roles.ADMIN},
    loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'instructor',
    canActivate: [AuthGuard, RoleGuard],
    data:{ role: roles.INSTRUCTOR},
    loadChildren: () => import('./pages/instructor/instructor.module').then(m => m.InstructorModule)
  },
  {
    path: 'student',
    canActivate: [AuthGuard, RoleGuard],
    data:{ role: roles.STUDENT},
    loadChildren: () => import('./pages/student/student.module').then(m => m.StudentModule)
  },
  {
    path: 'settings',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/settings/settings.module').then(m => m.SettingsModule)
  },
  {
    path: 'dashboard',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    component: DashboardPageComponent
  },
  {
    path: '403',
    component: Forbidden403Component
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
    useHash: true,
    preloadingStrategy: PreloadAllModules,
    relativeLinkResolution: 'legacy'
})
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
