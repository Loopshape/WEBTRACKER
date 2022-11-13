import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { ErrorRoutingModule } from './error-routing/error-routing.module';
import { MyTasksComponent } from './my-tasks/my-tasks.component';
import { DashboardsComponent } from './dashboards/dashboards.component';

export const routes: Routes = [
  { path: '', redirectTo: 'my-tasks', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'my-tasks', component: MyTasksComponent, data: { text: 'My Tasks' } },
  { path: 'dashboards', component: DashboardsComponent, data: { text: 'Dashboards' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ErrorRoutingModule],
  exports: [RouterModule, ErrorRoutingModule]
})
export class AppRoutingModule {
}
