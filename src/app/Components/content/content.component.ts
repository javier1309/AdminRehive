import { Component, OnDestroy, OnInit } from '@angular/core';
import{ UsersService } from '../../Services/users.service';
import{ TransactionsService } from '../../Services/transactions.service';
//Responsive Table import
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
})

export class ContentComponent implements OnInit {
//variables Rehive
 dtOptions: DataTables.Settings = {};
 Usuarios:any=[];
 Transa:any=[];
 //myDate = new Date();

 dtTrigger: Subject<any> = new Subject<any>();

  constructor(public Users: UsersService, public  trans:TransactionsService) {   }

   ngOnInit() {
    this.getUsuarios(); // cargado de la funcion lista para ser llamada
    this.getTransactions();

    //opciones y atributos del el datatable
    this.dtOptions = {
      responsive: true,
      pagingType: 'full_numbers',
      pageLength: 15,

    };
  }

  //Termina el proceso del dtTrigger
  //ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
  //  this.dtTrigger.unsubscribe();
 // }

  getUsuarios(){
    this.Usuarios=[];
    this.Users.getUsers().subscribe((datos) =>{

      this.Usuarios=datos.data.results;
      //Llamamos al dtTrigger para que se modifique la tabla cada vez
      //que exista un cambio
      this.dtTrigger.next();
      //this.myDate = Date.now();
    });
  }

  getTransactions(){
    this.Transa=[];
    this.trans.getTransactions().subscribe((datos)=>{

      this.Transa=datos.data.results;
      this.dtTrigger.next();
    });
  }
}
