import { Component, OnInit } from '@angular/core';
import{ CurrencyService } from '../../Services/currency.service';
import{ UsersService } from '../../Services/users.service';

@Component({
  selector: 'app-summary2',
  templateUrl: './summary2.component.html',
  styleUrls: ['./summary2.component.scss']
})
export class Summary2Component implements OnInit {
currency: any=[];
Usuarios: any=[];


  constructor(public curr:CurrencyService, private Users:UsersService) { }

  ngOnInit() {
    this.getCurrency();
    this.getUsuarios();
    console.log(this.Usuarios);
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
}
