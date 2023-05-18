import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DvnHeaderComponent } from './components/header/dvn-header/dvn-header.component';
import { DvnFooterComponent } from './components/footer/dvn-footer/dvn-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    DvnHeaderComponent,
    DvnFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
