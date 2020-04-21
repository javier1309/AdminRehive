import { Component, OnInit } from '@angular/core';
import{ TransactionsService } from '../../Services/transactions.service';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html'

})
export class TransactionsComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  Transa:any=[];
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(public  trans:TransactionsService) { }

  ngOnInit(){
    this.getTransactions();

    this.dtOptions = {
      responsive: true,
      pagingType: 'full_numbers',
      pageLength: 15,
     
    };
  }
  
  getTransactions(){
    this.Transa=[];
    this.trans.getTransactions().subscribe((datos)=>{
      console.log(datos);
      this.Transa=datos.data.results;
      this.dtTrigger.next();
    });
  }

}
