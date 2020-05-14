import { Component, OnInit } from '@angular/core';
import{ TransactionsService } from '../../Services/transactions.service';
import { Subject } from 'rxjs';
//Datepicker
import {NgbDate, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styles: [`
    .custom-day {
      text-align: center;
      padding: 0.185rem 0.25rem;
      display: inline-block;
      height: 2rem;
      width: 2rem;
    }
    .custom-day.focused {
      background-color: #e6e6e6;
    }
    .custom-day.range, .custom-day:hover {
      background-color: rgb(2, 117, 216);
      color: white;
    }
    .custom-day.faded {
      background-color: rgba(2, 117, 216, 0.5);
    }
  `]

})
export class TransactionsComponent implements OnInit {
  hoveredDate: NgbDate | null = null;
  fromDate: NgbDate;
  toDate: NgbDate | null = null;

  dtOptions: DataTables.Settings = {};
  Transa:any=[];
  dateT:any=[];
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(public  trans:TransactionsService, calendar: NgbCalendar)
  {
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
     
  }

  ngOnInit(){
    this.getTransactions();
    this.getDateTransaction();


    this.dtOptions = {
      responsive: true,
      pagingType: 'full_numbers',
      pageLength: 15,
      paging:true,
      scrollCollapse: false,
      scrollY:"75vh",


    };
  }

  getTransactions(){
    this.Transa=[];
    this.trans.getTransactions().subscribe((datos)=>{

      this.Transa=datos.data.results;
      this.dtTrigger.next();
    });
  }


  getDateTransaction(){
    this.dateT=[];
    this.trans.getDateTransactions().subscribe((datos)=>{

      this.dateT=datos;
     console.log(this.dateT);
    });
  }

  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || (this.toDate && date.equals(this.toDate)) || this.isInside(date) || this.isHovered(date);
  }

}
