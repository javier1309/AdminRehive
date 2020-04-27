import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import {AccountsService} from '../../Services/accounts.service'

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
})
export class AccountsComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  Cuentas:any=[];

 dtTrigger: Subject<any> = new Subject<any>();

  constructor(public Lcuentas:AccountsService) { }

  ngOnInit() {
    this.getAccounts();


     this.dtOptions = {
      responsive: true,
      pagingType: 'full_numbers',
      pageLength: 15,
      paging:true,
      scrollCollapse: false,
      scrollY:"75vh",
        }
  }
  getAccounts(){
    this.Cuentas=[];
    this.Lcuentas.getAccounts().subscribe((datos)=>{

      this.Cuentas=datos.data.results;
      this.dtTrigger.next();
    // console.log(datos);
    });
  }
  
}

