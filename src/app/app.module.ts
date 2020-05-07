import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { MenuComponent } from './Components/menu/menu.component';
import { ContentComponent } from './Components/content/content.component';
import { FooterComponent } from './Components/footer/footer.component';
import { SettingComponent } from './Components/setting/setting.component';
import { UsersComponent } from './Components/users/users.component';
import { TransactionsComponent } from './Components/transactions/transactions.component';
import {Routes, RouterModule} from '@angular/router';
import { SummaryComponent } from './Components/summary/summary.component';
import { Summary2Component } from './Components/summary2/summary2.component';
import { AccountsComponent } from './Components/accounts/accounts.component';
import { PayrollComponent } from './Components/summary/payroll/payroll.component';
import { PayorderComponent } from './Components/summary/payorder/payorder.component';
import { DetailsComponent } from './Components/users/details/details.component';



//declarando las rutas 
const appRoutes: Routes = [
  {path:'', component: UsersComponent},
  {path:'users', component: UsersComponent},
  {path:'transactions', component: TransactionsComponent},
  {path:'summary', component: SummaryComponent},
  {path:'summary2', component: Summary2Component},
  {path:'accounts',component: AccountsComponent},
  {path:'payroll', component: PayrollComponent},
  {path:'payorder', component: PayorderComponent},
  
  {path:'test', component: ContentComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    ContentComponent,
    FooterComponent,
    SettingComponent,
    UsersComponent,
    TransactionsComponent,
    SummaryComponent,
    Summary2Component,
    AccountsComponent,
    PayrollComponent,
    PayorderComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DataTablesModule,
    RouterModule.forRoot(appRoutes),      //importando las mismas rutas
     NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
