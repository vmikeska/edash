import { Component, Input } from '@angular/core';
import { WinDragging } from "../services/WinDragging"
import { LayoutSize } from "app/globals";


@Component({
  selector: 'app-win',
  templateUrl: './base-window.html',
})

export class AppWin {

  public _win;

  @Input()
  set win(win: AppWinVM) {
    console.log(JSON.stringify(win));
    this._win = win;
  };

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
