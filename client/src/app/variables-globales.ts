import { Injectable } from '@angular/core';

@Injectable()

export class VariablesGlobales {
    urlBack: string = 'https://gen-my-app.vercel.app/api/';
    token = sessionStorage.getItem('token');
}