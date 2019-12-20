import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// third party
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ChelpComponent } from './chelp/chelp.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ChelpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
