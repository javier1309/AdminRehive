import { Component, OnInit } from '@angular/core';
import{ CurrencyService } from '../../Services/currency.service';
import{ UsersService } from '../../Services/users.service';
import{ TransactionsService } from '../../Services/transactions.service';
@Component({
  selector: 'app-summary2',
  templateUrl: './summary2.component.html',
  styleUrls: ['./summary2.component.scss']
})
export class Summary2Component implements OnInit {
currency: any=[];
Usuarios: any=[];
Transa:any=[];


  constructor(private curr:CurrencyService, private Users:UsersService, private trans:TransactionsService) { }

  ngOnInit() {
    this.getCurrency();
    this.getUsuarios();
    this.getTransactions();
  }

  getCurrency(){
    this.currency=[];
    this.curr.getCurrency().subscribe((datos)=>{

      this.currency=datos.data;
    //  console.log(datos);
    });

  }
  getUsuarios(){
    this.Usuarios=[];
    this.Users.getUsers().subscribe((datos) =>{
     this.Usuarios=datos.data;
    });
  }
  getTransactions(){
    this.Transa=[];
    this.trans.getTransactions().subscribe((datos)=>{
//console.log(datos);
      this.Transa=datos.data;
    });
  }


}
