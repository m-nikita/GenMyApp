import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
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
      if(f.value.passwordEnterprise != f.value.confirmPasswordEnterprise) {
        this.error = "Les deux mots de passes doivent être identiques !";
      } else {
        const body = { 
          name: f.value.nameEnterprise,
          email: f.value.emailEnterprise,
          password: f.value.passwordEnterprise 
        };
        this.http.post('/api/auth/register', body).subscribe((data) => {
          console.log(data);
        });
      }
    }
  }
}
