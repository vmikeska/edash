import { Component } from '@angular/core';
import { AppWinVM } from "./components/base-window.component";
import _ from "lodash";

import { WinDragging } from "./services/WinDragging"

import { ViewEncapsulation } from '@angular/core';

import { $, LayoutSize } from './globals';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ["../scss/main.scss"],
  host: {
    '(window:resize)': 'onResize($event)'
  },
  encapsulation: ViewEncapsulation.None
})



export class AppComponent {

  public wins: AppWinVM[];

  public responsiveClass = "";
  public menuOpenedClass = "";

  constructor() {
    this.wins = [];
    
    this.addWin("TheFirst", "General news");
    this.addWin("TheSecond", "Window II.");
    this.addWin("TheThird", "Another Window in the hood");

    this.resetResponsivity();
  }


  public onResize(e) {
    this.resetResponsivity();
  }

  private resetResponsivity() {
    this.recognizeWidth();

    this.responsiveClass = this.currentSize === LayoutSize.Mobile ? "mobile-resp" : "web-resp";

    //var $dash = $(".dash-panel");
    // if (this.currentSize === LayoutSize.Mobile) {
    //   $dash.addClass("hidden");
    // } else {
    //   $dash.removeClass("hidden");
    // }


    this.wins.forEach((w) => {
      w.layoutChanged(this.currentSize, this.wins);
    })
  }

  public currentSize?: LayoutSize;

  private mobileTreshold = 600;
  private menuClosingClass = "closed";


  private recognizeWidth() {
    var newSize: LayoutSize;

    if (window.innerWidth < this.mobileTreshold) {
      newSize = LayoutSize.Mobile;      
    } else {
      newSize = LayoutSize.Web;
    }

    if (this.currentSize != newSize) {
      this.currentSize = newSize;
      this.onLayoutSizeChanged();
    }
  }

  public switchMenuVisibility() {
    this.menuOpenedClass = this.menuOpenedClass === this.menuClosingClass ? "" : this.menuClosingClass;
  }

  public onLayoutSizeChanged() {
    if (this.currentSize === LayoutSize.Mobile) {
      this.menuOpenedClass = this.menuClosingClass;
    }
  }

  public addWin(id: string, title: string) {

    var win = new AppWinVM(id);
    win.title = title;
    win.left = 300;
    win.top = 300;

    win.responsiveClass = win.getRespClass(this.currentSize);

    this.wins.push(win);

  }

  public mouseMove(e) {
    if (WinDragging.isDragging) {
      var parent = e.srcElement.parentElement;

      var newLeft = e.clientX - WinDragging.dragMouseOffsetX;
      var newTop = e.clientY - WinDragging.dragMouseOffsetY;

      WinDragging.currentWin.left = newLeft;
      WinDragging.currentWin.top = newTop;
    }

  }

  public mouseUp(e: MouseEvent) {
    WinDragging.isDragging = false;
  }


}


