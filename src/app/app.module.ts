import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HomeComponent } from './pages/home/home.component';
import { Page2Component } from './pages/page2/page2.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AlertPageComponent } from './pages/alert-page/alert-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Page2Component,
    PageNotFoundComponent,
    AlertPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
