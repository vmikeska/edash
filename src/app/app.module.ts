import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppWin } from './components/base-window.component';
import { MainMenu } from './components/main-menu.component';

import { AppComponent } from './app.component';
import { TradingScreen } from "app/components/trading-screen";
import { AddDirective } from "app/directives/add.directive";
import { TestComp } from "app/components/test-comp.component";
import { DataTable } from "app/components/data-table.component";



@NgModule({
  declarations: [
    AppComponent,
    AppWin,
    MainMenu,
    TradingScreen,
    AddDirective,
    TestComp,
    DataTable
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  
  entryComponents: [TradingScreen, TestComp, DataTable]
})


export class AppModule { }
