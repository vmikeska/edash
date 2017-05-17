import { Component, Input } from '@angular/core';
import { DelayedReturn } from "app/services/DelayedReturn";
import { WinOpenService } from "app/services/win-open.service";


@Component({
  selector: 'main-menu',
  templateUrl: './main-menu.html',
  providers: [WinOpenService]
})

export class MainMenu {

  public activeMenuDelay: DelayedReturn;

  public items: MenuItem[] = [
    {
      id: "news", ico: "icon-newspaper", text: "News", items: [
        { id: "MarketReport", text: "Marktbericht" }
      ]
    },

    {
      id: "portfolio", ico: "icon-list-alt", text: "Portfolio", items: [
        { id: "PortfolioNews", text: "Portfoliobericht" }
      ]
    },

    {
      id: "trading", ico: "icon-exchange", text: "Handel", items: [
        { id: "TradingScreen", text: "Handelsschirm" },
        { id: "s2", text: "Orders" }
      ]
    },

    {
      id: "preischart", ico: "icon-money", text: "Preischart", items: [
        { id: "s1", text: "Echtzeit Chart" },
        { id: "s2", text: "Historicher Chart" },
        { id: "s3", text: "EOD Daten" },
      ]
    },

    {
      id: "limituberwachung", ico: "icon-eye", text: "Limitüberwachung", items: [
        { id: "s1", text: "Limitwarnung" }
      ]
    },

    {
      id: "lastgang", ico: "icon-area-chart", text: "Lastgang", items: [
        { id: "s1", text: "Lastgangmanagement" },
        { id: "s2", text: "Lastgangbepraisung" },
        { id: "s3", text: "Lastgangaufchlag" },
      ]
    },

    {
      id: "konfiguration", ico: "icon-cog", text: "Konfiguration", items: [
        { id: "s1", text: "Limitwarnung" }
      ]
    },

  ];

  public selectedSubItems: MenuSubItem[] = [];

  constructor(private _winOpenService: WinOpenService) {
    this.initMenuDelay();
  }

  public mouseOverFirst(item) {
    this.showSubItems(item);
  }

  public mouseOutFirst(item) {

  }

  public mouseOverAll() {
    this.activeMenuDelay.cancel();
  }

  public mouseOutAll() {
    this.activeMenuDelay.call();
  }

  public closeClick() {
    this.deactivateFirstMenu();
    this.deactivateSecondMenu();
  }

  private itemClicked(item: MenuSubItem) {
    this._winOpenService.openWin(item);

    this.deactivateFirstMenu();
    this.deactivateSecondMenu();
  }

  private initMenuDelay() {
    this.activeMenuDelay = new DelayedReturn();
    this.activeMenuDelay.delay = 3000;
    this.activeMenuDelay.callback = () => {
      this.deactivateFirstMenu();
      this.deactivateSecondMenu();
    }

  }

  private showSubItems(mainItem: MenuItem) {
    this.selectedSubItems = mainItem.items;

    this.deactivateFirstMenu();
    mainItem.active = true;
  }

  private deactivateFirstMenu() {
    this.items.forEach((i) => { i.active = false; });
  }

  private deactivateSecondMenu() {
    this.selectedSubItems = [];
  }

}

export class MenuItem {
  public id: string;
  public text: string;
  public ico: string;
  public active?: boolean;

  public items: MenuSubItem[];
}

export class MenuSubItem {
  public id: string;
  public text: string;
}


