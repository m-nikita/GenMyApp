import { Component } from '@angular/core';
import { VariablesGlobales } from './variables-globales';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public vGlobales : VariablesGlobales) {
    
  }

  deconnexion() {
    sessionStorage.clear();
    this.vGlobales.token = null;
  }
}
