import { Component, OnInit } from '@angular/core';
import{UsersService} from '../../Services/users.service';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html'
})
export class ContentComponent implements OnInit {

Usuarios:any=[];


  constructor(  public Users: UsersService) {   }

   ngOnInit() {
    this.getUsuarios();

  }
  
  
  getUsuarios(){
  
    this.Usuarios=[];


   this.Users.getUsers().subscribe((datos) =>{

    console.log(datos);

    this.Usuarios=datos.data.results;
  });

}
}
