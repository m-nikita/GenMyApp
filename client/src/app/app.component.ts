import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VariablesGlobales } from './variables-globales';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public vGlobales : VariablesGlobales, private router: Router) {
    
  }

  deconnexion() {
    sessionStorage.clear();
    this.vGlobales.token = null;
    if(location.pathname.includes('genPost')) {
      this.router.navigate(['/login']);
    }
  }
}
