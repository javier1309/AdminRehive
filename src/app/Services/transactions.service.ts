import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import{Observable, of} from 'rxjs';


const endpoint='https://api.rehive.com/3/admin/transactions/';
const httpOptions = {  // contruyendo el http options
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Token 707b72188fb95d70fbe3a3617cbd77fada89e4da643fe83ac1496cbfbd31e1e9'
    
  })
  
}

 //dando atributos al header
 httpOptions.headers =
 httpOptions.headers.set('Authorization', 'Token 707b72188fb95d70fbe3a3617cbd77fada89e4da643fe83ac1496cbfbd31e1e9');
 









@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor(private http: HttpClient) { }
  getTransactions(): Observable<any> {
   
    
    return this.http.get(endpoint,httpOptions);   //get para retornar valores


  } 
}