import { Component, OnInit } from '@angular/core';
import{ PayrollService} from '../../../Services/MainAccounts/payroll.service';
import{ Payroll2Service} from '../../../Services/MainAccounts/payroll2.service';
import { Subject, from } from 'rxjs';
@Component({
  selector: 'app-payroll',
  templateUrl: './payroll.component.html',
  styleUrls: ['./payroll.component.scss']
})
export class PayrollComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  Payroll:any=[];
  Payroll2:any=[];
  Payrollcount:any=[];
  constructor(
    private  pay:PayrollService, 
    private pay2:PayrollService,
    private paycount:Payroll2Service  
  ) { }
  ngOnInit() {
    this.getPayRoll();
    this.getPayRoll2();
    this.getPayrollaccountt();

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
  getPayRoll(){
    this.Payroll=[];
    this.pay.getPayroll().subscribe((datos)=>{this.Payroll=datos.data.results;
    this.dtTrigger.next();
    //console.log(datos);
    });}
// Balance de Payroll
  getPayRoll2(){
    this.Payroll2=[];
    this.pay2.getPayroll().subscribe((datos)=>{this.Payroll2=datos.data;
   
    //console.log(datos);
    });
    }
getPayrollaccountt(){
      this.Payrollcount=[];
      this.paycount.getPayrollaccount().subscribe((datos)=>{this.Payrollcount=datos.data.results[0];

     // console.log(datos);
      });
  
    
  }

}
