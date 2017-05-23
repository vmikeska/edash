import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppWin } from './components/base-window.component';
import { MainMenu } from './components/main-menu.component';

import { ChartModule } from 'angular2-highcharts';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';

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
import { LiveChartsComponent } from "app/winComponents/live-charts";
import { HistoryChartComponent } from "app/winComponents/history-chart.component";


export function highchartsFactory() {
  const hc = require('highcharts/highstock');
  const dd = require('highcharts/modules/exporting');
  dd(hc);
  return hc;
}

declare var require : any;


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
    YearPickerComponent,

    TradingScreenComponent,
    MarketNewsComponent,
    PortfolioNewsComponent,
    LiveChartsComponent,
    HistoryChartComponent


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartModule
  ],

  providers: [
    {
      provide: HighchartsStatic,
      useFactory: highchartsFactory
    }
  ],

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
    PortfolioNewsComponent,
    LiveChartsComponent,
    HistoryChartComponent

  ]
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
