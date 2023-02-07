import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  error: String = "";

  constructor(private http : HttpClient) {

  }

  onSubmit(f: NgForm) {
    console.log(f.value);
    console.log(f.valid);
    this.error = "";
    if(!f.valid) {
      this.error = "Le formulaire n'est pas valide ! Des champs requis sont manquants !";
    } else {
      const body = { 
        email: f.value.emailEnterprise,
        password: f.value.passwordEnterprise 
      };
      this.http.post('/api/auth/login', body).subscribe((data) => {
        console.log(data);
      });
    }
  }
}
