import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { DefaultComponent } from './layout/default/default.component';
import { PagesComponent } from './modules/pages/pages.component';

const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [{
    path: 'dashboard',
    component: DashboardComponent
  }, {
    path: 'pages',
    component: PagesComponent
  }, {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
