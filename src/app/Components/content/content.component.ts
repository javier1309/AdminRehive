import { Component, OnDestroy, OnInit } from '@angular/core';
import{ UsersService } from '../../Services/users.service';
import{ TransactionsService } from '../../Services/transactions.service';
//Responsive Table import
import { HttpClient, HttpResponse } from '@angular/common/http';
import {TestService} from '../../Services/MainAccounts/test.service'
import { Subject } from 'rxjs';
// import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
})

export class ContentComponent implements OnInit {
//variables Rehive
 dtOptions: DataTables.Settings = {};
 Usuarios:any=[];

 //myDate = new Date();

  CodeAccountHtml:any=[];
  AccountEndpoint:any=[];
  TransactionEndpoint:any=[];

 dtTrigger: Subject<any> = new Subject<any>();

  constructor(public Users: UsersService,
                   private test:TestService
    ) {   }

   ngOnInit() {
    this.getUsuarios(); // cargado de la funcion lista para ser llamada
  

    //opciones y atributos del el datatable
    this.dtOptions = {
      responsive: true,
      pagingType: 'full_numbers',
      pageLength: 15,
      paging:true,
      scrollCollapse: false,
      scrollY:"75vh",
       autoWidth:true,

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

  
  funcionclick(usuario){
   
  this.CodeAccountHtml=usuario.account;  //recuperando la cuenta de usuario seleccionado
if (this.CodeAccountHtml){
   this.test.getAccount(this.CodeAccountHtml).subscribe((datos)=>{
      this.AccountEndpoint=datos.data.results;
      console.log(this.AccountEndpoint);
      })
      this.test.getTransactions(this.CodeAccountHtml).subscribe((datos)=>{
        this.TransactionEndpoint=datos.data;
        console.log(this.TransactionEndpoint);})
  }

  else 
  alert("El usuario no tiene cuenta registrada")
    }
 

}
