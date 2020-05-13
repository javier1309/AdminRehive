import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import{Observable, of} from 'rxjs';


const endpoint='https://api.rehive.com/3/admin/transactions/?page_size=252';
const endpoint2='https://api.rehive.com/3/admin/transactions/?created__gt=1588291200000&created__lt=1589396125000';

const httpOptions = {  // contruyendo el http options
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Token 33c79b0a68cde868e664a085c3b0926b49e203f5dd31eae711dc75c578b94d47'
  })
}

 //dando atributos al header

 httpOptions.headers.set('Authorization', 'Token 33c79b0a68cde868e664a085c3b0926b49e203f5dd31eae711dc75c578b94d47');

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor(private http: HttpClient) { }
  getTransactions(): Observable<any> {


    return this.http.get(endpoint,httpOptions);   //get para retornar valores
  }



  getDateTransactions(): Observable<any> {
    return this.http.get(endpoint2,httpOptions);   //get para retornar valores
 
  }
}
