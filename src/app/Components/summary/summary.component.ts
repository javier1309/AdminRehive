import { Component, OnInit } from '@angular/core';
import{ TransactionsService } from '../../Services/transactions.service';
import { Subject, from } from 'rxjs';
import{MastercageService } from '../../Services/MainAccounts/mastercage.service';
import{Mastercage2Service } from '../../Services/MainAccounts/mastercage2.service';
@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html'
 
})
export class SummaryComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  Transa:any=[];
  dtTrigger: Subject<any> = new Subject<any>();
  Masterc:any=[];
  Masterc2:any=[];
  Mastercount:any=[];

  constructor(public  trans:TransactionsService, private mastercage:MastercageService, private mastercage2:Mastercage2Service) { }

  ngOnInit(){
    this.getTransactions();
    this.getMastercage();
    this.getMastercage2();
    this.getMastercagecount();

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
  
  getTransactions(){
    this.Transa=[];
    this.trans.getTransactions().subscribe((datos)=>{

      this.Transa=datos.data.results;
      
    });
  }
  getMastercage(){
    this.Masterc=[];
    this.mastercage.getMastercage().subscribe((datos)=>{
      this.Masterc=datos.data.results;
     
      this.dtTrigger.next();
  });}
  getMastercagecount(){
    this.Mastercount=[];
    this.mastercage.getMastercage().subscribe((datos)=>{
      this.Mastercount=datos.data;
     // console.log(datos);
  });

  }
//Balance disponible y balance de accounts
     getMastercage2(){
    this.Masterc2=[];
    this.mastercage2.getMastercage2().subscribe((datos)=>{
      this.Masterc2=datos.data.results[0];

       });}
  

}
