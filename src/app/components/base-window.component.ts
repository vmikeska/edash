import { Component, Input, ComponentFactoryResolver, ViewContainerRef, AfterViewInit, Type, ViewChild, ReflectiveInjector } from '@angular/core';
import { WinDragging } from "../services/WinDragging"
import { LayoutSize } from "app/globals";
import { TradingScreen } from "app/components/trading-screen";


@Component({
  selector: 'app-win',
  templateUrl: './base-window.html',
})

export class AppWin implements AfterViewInit {

  @ViewChild('content', { read: ViewContainerRef }) content;
  

  constructor(private _componentFactoryResolver: ComponentFactoryResolver, private _viewContainerRef: ViewContainerRef) {

  }


 public responsiveClass = this.getRespClass(LayoutSize.Web);

  public id: string;
  public title: string;
  public left = 300;
  public top = 300;

  // public leftBackup: number;
  // public topBackup: number;

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

  public layoutChanged(newSize: LayoutSize) {

    this.responsiveClass = this.getRespClass(newSize);

  }


  // public _win;

  // @Input()
  // set win(win: AppWinVM) {    
  //   this._win = win;
  // };

   ngAfterViewInit(): void {

  //   // var inst = 
  //   //  this.loadComponent<TradingScreen>(TradingScreen);

  //   // inst.data = "ala lalas";
   }

  // loadComponent<T>(t: Type<T> ) {

  //   let factory = this._componentFactoryResolver.resolveComponentFactory(t);

  //   // vCref is needed cause of that injector..
  //   let injector = ReflectiveInjector.fromResolvedProviders([], this.content.parentInjector);

  //   // create component without adding it directly to the DOM
  //   let comp = factory.create(injector);

  // // add inputs first !! otherwise component/template crashes ..
  //   // var inst = <T>comp.instance;
    
  //   // inst["data"] = "this is a test";


  //   // all inputs set? add it to the DOM ..
  //   this.content.insert(comp.hostView);


  //   // let componentRef = this.content.createComponent(componentFactory)
   
  //   //  return <T>inst;
  // }

}

