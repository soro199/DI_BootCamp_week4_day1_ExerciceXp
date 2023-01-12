import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MyfirstmoduleModule } from './myfirstmodule/myfirstmodule.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HeaderComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyfirstmoduleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
