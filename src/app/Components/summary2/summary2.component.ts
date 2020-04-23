import { Component, OnInit } from '@angular/core';
import{ CurrencyService } from '../../Services/currency.service';

@Component({
  selector: 'app-summary2',
  templateUrl: './summary2.component.html',
  styleUrls: ['./summary2.component.scss']
})
export class Summary2Component implements OnInit {
currency:any=[];


  constructor(public curr:CurrencyService) { }

  ngOnInit() {
    this.getCurrency();
  }

  getCurrency(){
    this.currency=[];
    this.curr.getCurrency().subscribe((datos)=>{

      this.currency=datos.data;
      console.log(datos);
    });
  }

}
