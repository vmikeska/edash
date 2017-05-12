import { Component, Injector, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'list-box',
  templateUrl: './list-box.html',
})

export class ListBox {

  @Input()
  public items: ListBoxItem[];
  
}

export class ListBoxItem {
  public value: any;
  public text: string;
}

