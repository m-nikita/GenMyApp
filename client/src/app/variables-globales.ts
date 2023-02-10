import { Injectable } from '@angular/core';

@Injectable()

export class VariablesGlobales {
    urlBack: string = 'https://genmyapp-production.up.railway.app/api/';
    token = sessionStorage.getItem('token');
}