import { Component, OnInit } from '@angular/core';
import{RestService} from '../rest.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent  {



  constructor(public Users: RestService) {  //llamando el metodo get 

this.Users.getUsers().subscribe((res: any) =>{

  console.log(res);
 

});

}
}
