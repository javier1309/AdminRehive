import { Injectable  } from '@angular/core';
import{HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import{Observable, of} from 'rxjs';


const endpoint='https://api.rehive.com/3/admin/users/?page_size=10000';
const httpOptions = {  // contruyendo el http options
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Token 1b352780ddbb6ad9e415a843572ecb7202f2fcd1dbed7770f1d735b8987bbef6'
    
  })
  
}

 //dando atributos al header
 httpOptions.headers =
 httpOptions.headers.set('Authorization', 'Token 1b352780ddbb6ad9e415a843572ecb7202f2fcd1dbed7770f1d735b8987bbef6');
 




@Injectable({
  providedIn: 'root'
})
export class UsersService {


  constructor(private http: HttpClient) { }




  getUsers(): Observable<any> {
   
    
    return this.http.get(endpoint,httpOptions);   //get para retornar valores


  } 














  
 // ngOnInit(){

  //  this.getUsers();
  
 // } // esta funcion hace arrancar el metodo get sin necesidad de llamarlo 

 
}
