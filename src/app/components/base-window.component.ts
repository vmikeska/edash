import { Component, Input, ComponentFactoryResolver, ViewContainerRef, AfterViewInit, Type, ViewChild, ReflectiveInjector, ViewEncapsulation } from '@angular/core';
import { WinDragging } from "../services/WinDragging"
import { LayoutSize } from "app/globals";
import { TradingScreen } from "app/components/trading-screen";
import { WinCreationService } from "app/services/win-creation.service";
import { TestComp } from "app/components/test-comp.component";


@Component({
  selector: 'app-win',
  templateUrl: './base-window.html',  
  encapsulation: ViewEncapsulation.None,
})

export class AppWin implements AfterViewInit {

  @ViewChild('content', { read: ViewContainerRef }) content: ViewContainerRef;

  constructor() {

  }

  //  public responsiveClass = this.getRespClass(LayoutSize.Web);

  public id: string;
  public title: string;
  public left = 500;
  public top = 300;

  public mouseDown(e: MouseEvent) {
    WinDragging.isDragging = true;
    WinDragging.dragMouseOffsetX = e.offsetX;
    WinDragging.dragMouseOffsetY = e.offsetY;
    WinDragging.currentWin = this;
  }

  // public getRespClass(size: LayoutSize) {
  //   var res = "";

  //   if (size === LayoutSize.Web) {
  //     res = "win-dynamic";
  //   }

  //   if (size === LayoutSize.Mobile) {
  //     res = "win-static";
  //   }

  //   return res;
  // }

  public layoutChanged(newSize: LayoutSize) {

    // this.responsiveClass = this.getRespClass(newSize);

  }




  public ngAfterViewInit(): void {


  }



}

