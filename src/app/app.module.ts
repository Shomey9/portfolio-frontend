import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentBoxComponent } from './modules/content-box/content-box.component';
import { NavbarComponent } from './modules/navbar/navbar.component';
import { ContentDisplayComponent } from './modules/content-display/content-display.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentBoxComponent,
    NavbarComponent,
    ContentDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
