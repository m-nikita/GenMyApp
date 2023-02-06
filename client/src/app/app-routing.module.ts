import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { FAQComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "registration",
    component: RegistrationComponent
  },
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: "faq",
    component: FAQComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
