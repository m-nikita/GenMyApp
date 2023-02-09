import { Component } from '@angular/core';
import { VariablesGlobales } from '../variables-globales';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(public vGlobales: VariablesGlobales) {
    
  }
}
