import { Component } from '@angular/core';
// import { AppWinVM } from "./components/base-window.component";

import { WinDragging } from "./services/WinDragging"

import { ViewEncapsulation, AfterViewInit, ComponentFactoryResolver, ViewContainerRef, Type, ViewChild, OnInit, ReflectiveInjector } from '@angular/core';

import { $, LayoutSize } from './globals';
import { TradingScreenComponent } from "app/winComponents/trading-screen.component";
import { AddDirective } from "app/directives/add.directive";
import { WinCreationService } from "app/services/win-creation.service";
import { DynamicCreationService } from "app/services/dynamic-creation.service";
import { AppWin } from "app/components/base-window.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

  styleUrls: [
    "../scss/main.scss",
    "../scss/base-window.scss",
    "../scss/dashboard.scss",
    "../scss/data-table.scss",
    "../scss/layout.scss",
    "../scss/list-box.scss",
    "../scss/other.scss",
    "../scss/tabs.scss",
    "../scss/calendar.scss",
    "../scss/year-picker.scss",
    ],

  host: {
    '(window:resize)': 'onResize($event)'
  },
  encapsulation: ViewEncapsulation.None,
  providers: [WinCreationService, DynamicCreationService]
})




export class AppComponent implements OnInit {

  // @ViewChild(AddDirective) windowTarget: AddDirective;
  @ViewChild('content', { read: ViewContainerRef }) windowTarget: ViewContainerRef;

  public responsiveClass = "";
  public menuOpenedClass = "";

  public currentSize?: LayoutSize;

  private mobileTreshold = 600;
  private menuClosingClass = "closed";


  constructor( private _winCreateService: WinCreationService, private _componentFactoryResolver: ComponentFactoryResolver) {
    this.resetResponsivity();
  }

  public ngOnInit() {
    this._winCreateService.windowTarget = this.windowTarget;    
  }


  public onResize(e) {
    this.resetResponsivity();
  }

  private resetResponsivity() {    
    this.recognizeWidth();

    this.responsiveClass = this.currentSize === LayoutSize.Mobile ? "mobile-resp" : "web-resp";

    console.log(this.responsiveClass);
  }

  


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


  public mouseMove(e) {
    if (WinDragging.isDragging) {
      //var parent = e.srcElement.parentElement;

      var newLeft = e.clientX - WinDragging.dragMouseOffsetX;
      var newTop = e.clientY - WinDragging.dragMouseOffsetY;

      WinDragging.currentWin.left = newLeft;
      WinDragging.currentWin.top = newTop;
    }

    if (WinResizing.isResizing) {
      let w = WinResizing.currentWin;

      let newWidth = e.clientX - w.left;
      let newHeight = e.clientY - w.top;

      // if (newWidth < WinResizing.minWidth) {
      //   newWidth = WinResizing.minWidth;
      // }

      // if (newHeight < WinResizing.minHeight) {
      //   newHeight = WinResizing.minHeight;
      // }

      w.width = newWidth;
      w.height = newHeight;

      w.onResized();
    }

  }



  public mouseUp(e: MouseEvent) {
    WinDragging.isDragging = false;
    WinResizing.isResizing = false;
  }


}

export class WinResizing {
  public static isResizing = false;
  public static currentWin: AppWin;

  public static minWidth = 600;  
  public static minHeight = 450;

}




