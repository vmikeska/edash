import { Component, Input, ComponentFactoryResolver, ViewContainerRef, AfterViewInit, Type, ViewChild, ReflectiveInjector, ViewEncapsulation, ElementRef, ComponentRef } from '@angular/core';
import { WinDragging } from "../services/WinDragging"
import { LayoutSize } from "app/globals";
import { WinCreationService } from "app/services/win-creation.service";
import { WinResizing } from "app/app.component";


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

  public width = WinResizing.minWidth;
  public height = WinResizing.minHeight;

  public componentRef: ComponentRef<AppWin>;
  public contentComponentRef;

  private contentElement;

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

  public onResized() {

    this.resizeElements();

  }


  private aa() {
    //var clientHeight = document.getElementById('myDiv').clientHeight;
    // or

    // var offsetHeight = document.getElementById('myDiv').offsetHeight;
    // clientHeight includes padding.

    // offsetHeight includes padding, scrollBar and borders.
  }

  public resizerStart(e: MouseEvent, resizer) {
    WinResizing.isResizing = true;
    WinResizing.currentWin = this;
  }

  private staticHeight = 0;
  private fixedElements;
  private dynamicElements;



  public ngAfterViewInit(): void {

    this.initElementsResizing();
    this.resizeElements();

  }

  private initElementsResizing() {
    var resElm = this.componentRef.instance.content.element;

    var winElm = resElm.nativeElement.parentElement;
    this.contentElement = winElm;

    this.fixedElements = this.contentElement.getElementsByClassName("size-fixed");
    this.dynamicElements = this.contentElement.getElementsByClassName("size-dynamic");

    for (let af = 0; af <= this.fixedElements.length - 1; af++) {
      var element = this.fixedElements[af];

      let height = parseInt(element.getAttribute("data-height"));

      this.staticHeight += height;

      element.style.height = `${height}px`;
    }
  }

  private resizeElements() {
    var contentHeight = this.contentElement.clientHeight;

    var dynamicHeightTotal = contentHeight - this.staticHeight;

    for (let af = 0; af <= this.dynamicElements.length - 1; af++) {
      let element = this.dynamicElements[af];

      let heightIndex = parseFloat(element.getAttribute("data-height"));

      let height = dynamicHeightTotal * heightIndex;

      element.style.height = `${height}px`;
    }
  }



}

