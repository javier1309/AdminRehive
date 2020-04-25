import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import{Observable, of} from 'rxjs';

const endpoint='https://api.rehive.com/3/admin/accounts/?page_size=1000';

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
export class AccountsService {

  constructor(private http: HttpClient) {   }



  getAccounts(): Observable<any> {


    return this.http.get(endpoint,httpOptions);   //get para retornar valores


  }
}
