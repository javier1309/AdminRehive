import { Injectable, OnInit } from '@angular/core';
import{HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import{Observable, of} from 'rxjs';


const endpoint='https://api.rehive.com/3/admin/accounts/';
const httpOptions = {  // contruyendo el http options
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Token f32500e81b5b3c19c1b9a5e7ba97328a1b24443e8dc13e9ab2b73b56b74220df'
    
  })
  
}
 //dando atributos al header
httpOptions.headers =
httpOptions.headers.set('Authorization', 'Token f32500e81b5b3c19c1b9a5e7ba97328a1b24443e8dc13e9ab2b73b56b74220df');

@Injectable({
  providedIn: 'root'
})
export class RestService implements OnInit{

  constructor( private http: HttpClient) { } //contruyendo en http importado del core




 getUsers(): Observable<any> { return this.http.get(endpoint,httpOptions);    //get para retornar valores
  } 



ngOnInit(){this.getUsers();} // esta funcion hace arrancar el metodo get sin necesidad de llamarlo 
}
