import { Component, Input, ComponentFactoryResolver, ViewContainerRef, AfterViewInit, Type, ViewChild, ReflectiveInjector, ViewEncapsulation, ElementRef, ComponentRef } from '@angular/core';
import { WinDragging } from "../services/WinDragging"
import { LayoutSize } from "app/globals";
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

  public id: string;
  public title: string;
  public left = 500;
  public top = 300;

  public componentRef: ComponentRef<AppWin>;
  public contentComponentRef;

  public mouseDown(e: MouseEvent) {
    WinDragging.isDragging = true;
    WinDragging.dragMouseOffsetX = e.offsetX;
    WinDragging.dragMouseOffsetY = e.offsetY;
    WinDragging.currentWin = this;
  }

  public close() {
    this.componentRef.destroy();
  }

  public layoutChanged(newSize: LayoutSize) {

  }




  public ngAfterViewInit(): void {


  }



}

