import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { VariablesGlobales } from '../variables-globales';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  error: String = "";

  constructor(private vGlobales : VariablesGlobales, private http : HttpClient, private router : Router) {
    console.log(vGlobales.token);
  }

  onSubmit(f: NgForm) {
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
        this.http.post<any>(this.vGlobales.urlBack + 'auth/register', body).subscribe((data) => {
          if(data.status == "ok") {
            this.router.navigate(['/registration']);
          } else {
            this.error = "Erreur lors de l'inscription";
          }
        });
      }
    }
  }
}
