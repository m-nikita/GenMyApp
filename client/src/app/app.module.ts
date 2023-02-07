import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { FAQComponent } from './faq/faq.component';
import { GenPostComponent } from './gen-post/gen-post.component';
import { VariablesGlobales } from './variables-globales';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    ContactComponent,
    FAQComponent,
    GenPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    VariablesGlobales
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
