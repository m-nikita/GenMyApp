import { Injectable } from '@angular/core';

@Injectable()

export class VariablesGlobales {
    urlBack: string = 'http://localhost:5001/api/';
    token = sessionStorage.getItem('token');
}