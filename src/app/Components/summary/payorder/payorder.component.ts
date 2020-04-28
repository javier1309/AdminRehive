import { Component, OnInit } from '@angular/core';
import{ PayorderService} from '../../../Services/MainAccounts/payorder.service';
import{ Payorder2Service} from '../../../Services/MainAccounts/payorder2.service';
import { Subject, from } from 'rxjs';

@Component({
  selector: 'app-payorder',
  templateUrl: './payorder.component.html',
  styleUrls: ['./payorder.component.scss']
})
export class PayorderComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  Payorder:any=[];
  Payorder2:any=[];
  Payordercount:any=[];


  constructor(
    private  orden:PayorderService, 
    private orden2:PayorderService, 
    private ordencount:Payorder2Service  
  ) { }

  ngOnInit(){
    this.getPayorder();
    this.getPayorder2();
    this.getPayordercount();

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
    getPayorder(){
      this.Payorder=[];
      this.orden.getPayorder().subscribe((datos)=>{this.Payorder=datos.data.results;
      this.dtTrigger.next();
      //console.log(datos);
    });}
// Balance de Payroll
    getPayorder2(){
      this.Payorder2=[];
      this.orden2.getPayorder().subscribe((datos)=>{this.Payorder2=datos.data;
    
      //console.log(datos);
    });
    }
    getPayordercount(){
      this.Payordercount=[];
      this.ordencount.getPayorderaccount().subscribe((datos)=>{this.Payordercount=datos.data.results[0];

     // console.log(datos);
      });



  
}
}
