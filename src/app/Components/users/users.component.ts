import { Component, OnInit } from '@angular/core';
import{ UsersService } from '../../Services/users.service';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
  
})
export class UsersComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  Usuarios:any=[];

  dtTrigger: Subject<any> = new Subject<any>();

  constructor(public Users: UsersService) { }

  ngOnInit(){
    this.getUsuarios();

    this.dtOptions = {
      responsive: true,
      pagingType: 'full_numbers',
      pageLength: 15,
     
  }
}
  getUsuarios(){
    this.Usuarios=[];
    this.Users.getUsers().subscribe((datos) =>{
     // console.log(datos);
      this.Usuarios=datos.data.results;
      //Llamamos al dtTrigger para que se modifique la tabla cada vez
      //que exista un cambio
      this.dtTrigger.next();
    });
  }


}
