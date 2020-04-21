import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';

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



//declarando las rutas 
const appRoutes: Routes = [
  {path:'', component: UsersComponent},
  {path:'users', component: UsersComponent},
  {path:'transactions', component: TransactionsComponent},
  {path:'summary', component: SummaryComponent},
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
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DataTablesModule,
    RouterModule.forRoot(appRoutes)       //importando las mismas rutas
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
