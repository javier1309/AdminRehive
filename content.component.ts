import { Component, OnInit } from '@angular/core';
import{ UsersService } from '../../Services/users.service';
import{ TransactionsService } from '../../Services/transactions.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
})

export class ContentComponent implements OnInit {
//variables Rehive
 Usuarios:any=[];
 Transa:any=[];


  constructor(public Users: UsersService, public  trans:TransactionsService) {   }

   ngOnInit() {
    this.getUsuarios(); // cargado de la funcion lista para ser llamada
    this.getTransactions();
  }

  getUsuarios(){
    this.Usuarios=[];
    this.Users.getUsers().subscribe((datos) =>{
    console.log(datos);
    this.Usuarios=datos.data.results;
  });}

  getTransactions(){
    this.Transa=[];
    this.trans.getTransactions().subscribe((datos)=>{
      console.log(datos);
      this.Transa=datos.data.results;
    })
  }
}
