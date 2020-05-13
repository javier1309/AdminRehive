import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import{Observable, of} from 'rxjs';


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
export class TestService {

  constructor(private http: HttpClient) { }

  getAccount(CodeAccountHtml): Observable<any> {
    return this.http.get(`https://api.rehive.com/3/admin/accounts/${CodeAccountHtml}/currencies/`,httpOptions);   //get para retornar valores
  }

  getTransactions(CodeAccountHtml) : Observable<any> {
    return this.http.get(`https://api.rehive.com/3/admin/transactions/?account=${CodeAccountHtml}&page_size=10`,httpOptions);   //get para retornar valores
 
  }
  getUser(CodeAccountHtml): Observable<any> {
    return this.http.get(`https://api.rehive.com/3/admin/users/?account=${CodeAccountHtml}`,httpOptions);   //get para retornar valores
 
  }
  
  
}
