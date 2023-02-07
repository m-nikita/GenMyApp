import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { VariablesGlobales } from '../variables-globales';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  error: String = "";

  constructor(private vGlobales : VariablesGlobales, private http : HttpClient, private router : Router) {

  }

  onSubmit(f: NgForm) {
    this.error = "";
    if(!f.valid) {
      this.error = "Le formulaire n'est pas valide ! Des champs requis sont manquants !";
    } else {
      const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*')
      const body = { 
        email: f.value.emailEnterprise,
        password: f.value.passwordEnterprise 
      };
      this.http.post<any>(this.vGlobales.urlBack + 'auth/login', body, { headers }).subscribe(data => {
        console.log(data);
        sessionStorage.setItem('token', data.token);
        this.vGlobales.token = data.token;
        this.router.navigate(['/']);
      });
    }
  }
}
