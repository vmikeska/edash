import { Component, Injector, Input } from '@angular/core';
import { AppWin } from "app/components/base-window.component";


@Component({
  selector: 'trading-screen',
  templateUrl: './trading-screen.html',
})

export class TradingScreen extends AppWin {

  title = "test" + Math.random();


  public testClick() {
    alert("test");
  }

  @Input()
  public data;

   public test = "dfasdfs";

}

