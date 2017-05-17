import { Component, Input, OnInit } from '@angular/core';
import { $ } from "app/globals";


@Component({
  selector: 'tabs',
  templateUrl: './tabs.html',
})

export class TabsComponent implements OnInit {
  ngOnInit(): void {
    this.activateItem(this.items[0]);
  }

  private activeClass = "active";

  constructor() {

  }

  @Input()
  public items: TabItem[];

  public tabClicked(item) {
    this.activateItem(item);
  }

  private activateItem(item: TabItem) {
    this.items.forEach((i) => {
      i.active = false;

      $(`#${i.id}`).removeClass(this.activeClass);
    });
    
    item.active = true;
    $(`#${item.id}`).addClass(this.activeClass);

  }
}

export class TabItem {
  public name: string;
  public id: string;
  public active? = false;
}


