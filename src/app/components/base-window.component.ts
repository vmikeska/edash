import { Component, Input, ComponentFactoryResolver, ViewContainerRef, AfterViewInit, Type, ViewChild } from '@angular/core';
import { WinDragging } from "../services/WinDragging"
import { LayoutSize } from "app/globals";
import { TradingScreen } from "app/components/trading-screen";


@Component({
  selector: 'app-win',
  templateUrl: './base-window.html',
})

export class AppWin implements AfterViewInit {

  @ViewChild('content', { read: ViewContainerRef }) content;
  

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private _viewContainerRef: ViewContainerRef) {

  }

  public _win;

  @Input()
  set win(win: AppWinVM) {
    console.log(JSON.stringify(win));

    console.log("assigning");
    this._win = win;

  };

  ngAfterViewInit(): void {

    var inst = this.loadComponent<TradingScreen>(TradingScreen);

    //  inst.data = "ala lalas";
  }

  loadComponent<T>(t: Type<T>) {

    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(t);

    
    
    let componentRef = this.content.createComponent(componentFactory);
    
    let instance = (<T>componentRef.instance);
    

    
    
    return instance;
  }

}

export class AppWinVM {

  constructor(id: string) {
    this.id = id;
  }

  public responsiveClass = "";

  id: string;
  title: string;

  left: number;
  top: number;

  leftBackup: number;
  topBackup: number;

  public mouseDown(e: MouseEvent) {
    WinDragging.isDragging = true;
    WinDragging.dragMouseOffsetX = e.offsetX;
    WinDragging.dragMouseOffsetY = e.offsetY;
    WinDragging.currentWin = this;
  }

  public getRespClass(size: LayoutSize) {
    var res = "";

    if (size === LayoutSize.Web) {
      res = "win-dynamic";
    }

    if (size === LayoutSize.Mobile) {
      res = "win-static";
    }

    return res;
  }

  public layoutChanged(newSize: LayoutSize, wins: AppWinVM[]) {

    this.responsiveClass = this.getRespClass(newSize);

  }

}
