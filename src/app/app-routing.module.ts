import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { Page2Component } from './pages/page2/page2.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AlertPageComponent } from './pages/alert-page/alert-page.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'alert-page', component: AlertPageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
