import { Component, OnInit } from '@angular/core';
import{ UsersService } from '../../Services/users.service';
import { Subject,interval,timer } from 'rxjs';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
  
})
export class UsersComponent implements OnInit {

  public loading: boolean;

  dtOptions: DataTables.Settings = {};
  Usuarios:any=[];

  dtTrigger: Subject<any> = new Subject<any>();

  constructor(public Users: UsersService) {

      this.loading=true;

   }

  ngOnInit(){
        this.getUsuarios();
        if(!this.getUsuarios){
          alert('no se puede recuperar informacion de Rehive')
        }else{
          this.loading=false;
        }

        this.dtOptions = {
        responsive: true,
        pagingType: 'full_numbers',
        pageLength: 15,  
        paging:true,
        scrollCollapse: false,
        scrollY:"75vh", }


//Contador de segundos interval contador y timer para mostrar despues de cierto tiempo
 //       const timerr= interval(4000);

  //  timerr.subscribe((n)=>{console.log('Cantidad de tiempo',n)
   // });

}
  getUsuarios(){
    this.Usuarios=[];
    this.Users.getUsers().subscribe((datos) =>{
     console.log(datos);
      this.Usuarios=datos.data.results;
      //Llamamos al dtTrigger para que se modifique la tabla cada vez
      //que exista un cambio
      this.dtTrigger.next();
    });
   
  }
//  getUsuarios(page=1,size=20){
   // this.Usuarios=[];
   // this.Users.getUsers(page,size).subscribe((datos) =>{
    // console.log(datos);
   //   this.Usuarios=datos.data.results;
                                           //Llamamos al dtTrigger para que se modifique la tabla cada vez
                                           //que exista un cambio
   //   this.dtTrigger.next();
  //  });
   
  }



