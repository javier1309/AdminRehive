import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/shared/header/header.component';
import { MenuComponent } from './Components/shared/menu/menu.component';
import { ContentComponent } from './Components/shared/content/content.component';
import { FooterComponent } from './Components/shared/footer/footer.component';
import { SettingComponent } from './Components/shared/setting/setting.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    ContentComponent,
    FooterComponent,
    SettingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
