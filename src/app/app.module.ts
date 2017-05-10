import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppWin } from './components/base-window.component';
import { MainMenu } from './components/main-menu.component';

import { AppComponent } from './app.component';
import { TradingScreen } from "app/components/trading-screen";


@NgModule({
  declarations: [
    AppComponent,
    AppWin,
    MainMenu,
    TradingScreen
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  
  entryComponents: [TradingScreen]
})


export class AppModule { }
