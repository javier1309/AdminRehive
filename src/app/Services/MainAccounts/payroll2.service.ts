import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import{Observable, of} from 'rxjs';
const endpoint='https://api.rehive.com/3/admin/accounts/E76SJAK52A/currencies/';

const httpOptions = { 
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Token 33c79b0a68cde868e664a085c3b0926b49e203f5dd31eae711dc75c578b94d47'
  })
}


 httpOptions.headers.set('Authorization', 'Token 33c79b0a68cde868e664a085c3b0926b49e203f5dd31eae711dc75c578b94d47');


@Injectable({
  providedIn: 'root'
})
export class Payroll2Service {

  constructor(private http: HttpClient) { }
  getPayrollaccount(): Observable<any> {


    return this.http.get(endpoint,httpOptions);   //get para retornar valores
  }
}
