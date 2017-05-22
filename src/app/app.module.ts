import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppWin } from './components/base-window.component';
import { MainMenu } from './components/main-menu.component';

import { AppComponent } from './app.component';
import { TradingScreenComponent } from "app/winComponents/trading-screen.component";
import { AddDirective } from "app/directives/add.directive";
import { DataTable } from "app/components/data-table.component";
import { ListBox } from "app/components/list-box.component";
import { MarketNewsComponent } from "app/winComponents/market-news.component";
import { PortfolioNewsComponent } from "app/winComponents/portfolio-news.component";
import { TabsComponent } from "app/components/tabs.component";
import { CalendarComponent } from "app/components/calendar.component";
import { YearPickerComponent } from "app/components/year-picker.component";

@NgModule({
  declarations: [
    AppComponent,

    AddDirective,

    MainMenu,

    AppWin,
    DataTable,
    ListBox,
    TabsComponent,
    CalendarComponent,

    TradingScreenComponent,
    MarketNewsComponent,
    PortfolioNewsComponent,
    YearPickerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent],

  entryComponents: [
    MainMenu,

    AppWin,
    DataTable,
    ListBox,
    TabsComponent,
    CalendarComponent,

    TradingScreenComponent,
    MarketNewsComponent,
    PortfolioNewsComponent,]
})
export class AppModule {


}


// const components = [
//     MainMenu,

//     AppWin,
//     DataTable,
//     ListBox,
//     TabsComponent,
//     CalendarComponent,

//     TradingScreenComponent,
//     MarketNewsComponent,
//     PortfolioNewsComponent,
//   ];

//   const config: NgModule = {
//     declarations: [
//       AppComponent,

//       AddDirective,
//     ],
//     imports: [
//       BrowserModule,
//       FormsModule,
//       HttpModule,
//     ],
//     providers: [],
//     bootstrap: [AppComponent],

//     entryComponents: components
//   }; 

//   config.declarations = config.declarations.concat(components);

// @NgModule(config)
// export class AppModule {


// }
