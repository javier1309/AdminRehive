import { Component, OnInit, Input, ViewEncapsulation  } from '@angular/core';
import{ UsersService } from '../../Services/users.service';
import { Subject,interval,timer } from 'rxjs';
import {TestService} from '../../Services/MainAccounts/test.service';
//import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',

  })

export class UsersComponent implements OnInit {
  title = 'appBootstrap';
  



  public loading: boolean;
  dtOptions: DataTables.Settings = {};
  Usuarios:any=[];
  CodeAccountHtml:any=[];
  AccountEndpoint:any=[];
  TransactionEndpoint:any=[];

  dtTrigger: Subject<any> = new Subject<any>();

  constructor(public Users: UsersService,
    private test:TestService,
    // private modalService: NgbModal
    

    ) {
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
}



funcionclick(usuario){
   
  this.CodeAccountHtml=usuario;  //recuperando la cuenta de usuario seleccionado
if (this.CodeAccountHtml){
  //this.AccountEndpoint=null;
   this.test.getAccount(this.CodeAccountHtml).subscribe((datos)=>{
      this.AccountEndpoint=datos.data;
      console.log(this.AccountEndpoint);
      
   
      })
      this.test.getTransactions(this.CodeAccountHtml).subscribe((datos)=>{
        this.TransactionEndpoint=datos.data;
        console.log(this.TransactionEndpoint);

      
      
      })
      

  }
  else 
  alert("El usuario no tiene cuenta registrada")
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



