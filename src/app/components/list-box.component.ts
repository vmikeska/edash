import { Component, Injector, Input, OnChanges, SimpleChanges, ElementRef, Output, EventEmitter } from '@angular/core';
import * as _ from "lodash";


@Component({
  selector: 'list-box',
  templateUrl: './list-box.html',
})

export class ListBox {

  private _items: ListBoxItem[];

  @Input()
  public set items(is: ListBoxItem[]) {
    this._items = is;

    this.initItems();
  }

  public selectedItem: ListBoxItem = null;

  @Output()
  public selectedItemChange = new EventEmitter<ListBoxItem>();


  private initItems() {
    var index = 0;
    this._items.forEach((i) => {
      i.index = index;
      index++;
    })
  }

  constructor(private myElement: ElementRef) {

  }


  public itemClicked(i: ListBoxItem) {

    this._items.forEach((i) => {
      i.isActive = false;
    });

    i.isActive = true;

     this.selectedItem = i;
     this.itemChanged();
  }

  public keyDown(e) {    
    // e.stopPropagation();
    e.preventDefault();

    let isUp = e.keyCode === 38;
    let isDown = e.keyCode === 40;

    if (isUp) {
      this.changeSelectedItem(-1);
    }

    if (isDown) {
      this.changeSelectedItem(1);
    }

  }

  private itemChanged() {
    this.selectedItemChange.emit(this.selectedItem);
  }

  private changeSelectedItem(value: number) {
    let act = _.find(this._items, { isActive: true });
    act.isActive = false;

    let newIndex = act.index + value;
    if (newIndex < 0) {
      newIndex = this._items.length - 1;
    }
    if (newIndex > this._items.length - 1) {
      newIndex = 0;
    }

    let next = _.find(this._items, { index: newIndex });
    next.isActive = true;
    this.selectedItem = next;

    this.itemChanged();
  }

  public boxClicked() {
    this.myElement.nativeElement.focus();
  }

}

export class ListBoxItem {
  public value: any;
  public text: string;
  public isActive?= false;
  public index?: number;
}

