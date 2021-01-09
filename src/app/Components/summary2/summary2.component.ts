import { Component, OnInit } from '@angular/core';
import{ CurrencyoverviewService } from '../../Services/currencyOverview.service';
import{ CurrencyService } from '../../Services/currency.service';
import{ UsersService } from '../../Services/users.service';
import{ TransactionsService } from '../../Services/transactions.service';

@Component({
  selector: 'app-summary2, ngbd-collapse-basic',
  templateUrl: './summary2.component.html',
  styleUrls: ['./summary2.component.scss']
})

export class Summary2Component implements OnInit {
isCollapsed = false;
currencyOverview: any=[];
currency: any=[];
Usuarios: any=[];
Transa:any=[];

public isMenuCollapsed = true;

  constructor(
    private currOver:CurrencyoverviewService,
    private curr:CurrencyService,
    private Users:UsersService,
    private trans:TransactionsService
  ) { }

  ngOnInit() {
    this.getCurrencyOverview();
    this.getCurrency();
    this.getUsuarios();
    this.getTransactions();
  }

  getCurrencyOverview(){
    this.currencyOverview=[];
    this.currOver.getCurrencyOverview().subscribe((datos)=>{

      this.currencyOverview=datos.data;
    //  console.log(datos);
    });
  }

  getCurrency(){
    this.currency=[];
    this.curr.getCurrency().subscribe((datos)=>{

      this.currency=datos.data.results;
    //console.log(datos);
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
