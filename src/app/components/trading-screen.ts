import { Component, Injector, Input, OnInit } from '@angular/core';
import { AppWin } from "app/components/base-window.component";
import { DataTableHeaderItem, DataTableColumnItem, DataTableRow } from "app/components/data-table.component";
import { ListBoxItem } from "app/components/list-box.component";


@Component({
  selector: 'trading-screen',
  templateUrl: './trading-screen.html',
})

export class TradingScreen extends AppWin implements OnInit {
  
  ngOnInit(): void {
    
    
      this.data.push({items: [{col: "AnotherCol", value: "the another col value"}, { col: "TheCol", value: "The col value"}, { col: "SuperCol", value: " the super col value"}]});
      this.data.push({items: [{col: "AnotherCol", value: "the another col value"}, { col: "TheCol", value: "The col value"}, { col: "SuperCol", value: " the super col value"}]});
      this.data.push({items: [{col: "AnotherCol", value: "the another col value"}, { col: "TheCol", value: "The col value"}, { col: "SuperCol", value: " the super col value"}]});
      this.data.push({items: [{col: "AnotherCol", value: "the another col value"}, { col: "TheCol", value: "The col value"}, { col: "SuperCol", value: " the super col value"}]});
    
    
  }

  public headers: DataTableHeaderItem[] = [{col: "TheCol", name: "The col"}, {col: "AnotherCol", name: "Another Col"}, {col: "SuperCol", name: "Super col"}];

  public data: DataTableRow[] = [
    {items: [{ col: "SuperCol", value: "super col value 1"}, { col: "TheCol", value: "val1"}, {col: "AnotherCol", value: "val2"}]},
    {items: [{ col: "SuperCol", value: "Super col value 2"}, {col: "AnotherCol", value: "val4"}, { col: "TheCol", value: "val3"}]},
    {items: [{ col: "SuperCol", value: " Just another value"}, { col: "TheCol", value: "val5"}, {col: "AnotherCol", value: "val6"}]},
    {items: [{col: "AnotherCol", value: "the another col value"}, { col: "TheCol", value: "The col value"}, { col: "SuperCol", value: " the super col value"}]}
  ]

  public tradePartners: ListBoxItem[] = [
    {text: "Gas-Union", value: 1},
    {text: "Gazprom", value: 2},
  ];

  
   

}

