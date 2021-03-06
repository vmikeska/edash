
import { Injectable } from "@angular/core";
import { MenuSubItem } from "app/components/main-menu.component";
import { TradingScreenComponent } from "app/winComponents/trading-screen.component";
import { WinCreationService } from "app/services/win-creation.service";
import { MarketNewsComponent } from "app/winComponents/market-news.component";
import { PortfolioNewsComponent } from "app/winComponents/portfolio-news.component";
import { LiveChartsComponent } from "app/winComponents/live-charts";
import { HistoryChartComponent } from "app/winComponents/history-chart.component";

@Injectable()
export class WinOpenService {

    constructor(private _winCreateService: WinCreationService) {

    }

    public openWin(item: MenuSubItem) {
        
        let instances;
        let id = item.id;

        if (id === "MarketReport") {
             instances = this._winCreateService.createWinInstance<MarketNewsComponent>(MarketNewsComponent);
        }

        if (id === "TradingScreen") {
            instances = this._winCreateService.createWinInstance<TradingScreenComponent>(TradingScreenComponent);
        }

        if (id === "PortfolioNews") {
            instances = this._winCreateService.createWinInstance<PortfolioNewsComponent>(PortfolioNewsComponent);            
        }

        if (id === "LiveCharts") {
            instances = this._winCreateService.createWinInstance<LiveChartsComponent>(LiveChartsComponent);            
        }

        if (id === "HistoryChart") {
            instances = this._winCreateService.createWinInstance<HistoryChartComponent>(HistoryChartComponent);            
        }

        

        instances.winInstance.title = item.text;
    }

}