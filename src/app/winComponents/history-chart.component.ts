
import { Component } from "@angular/core";
import { TabItem } from "app/components/tabs.component";
import { DataTableHeaderItem, DataTableRow } from "app/components/data-table.component";
import { ListBoxItem } from "app/components/list-box.component";


@Component({
  selector: 'history-chart',
  templateUrl: './history-chart.html',
})

export class HistoryChartComponent {

     public tabs: TabItem[] = [
        { id: "hsFilterNew", name: "Filter/New"    },
        { id: "hsSelect", name: "Spalten"    },
        { id: "hsConfig", name: "Gesp. Konfiguartion"    },
        { id: "hsUnits", name: "Einheiten"    }
    ];


  public headers: DataTableHeaderItem[] = [
    {col: "TheCol", name: "The col"}, 
    {col: "AnotherCol", name: "Another Col"}, 
    {col: "SuperCol", name: "Super col"}
  ];

  public data: DataTableRow[] = [
    {items: [{ col: "SuperCol", value: "super col value 1"}, { col: "TheCol", value: "val1"}, {col: "AnotherCol", value: "val2"}]},
    {items: [{ col: "SuperCol", value: "Super col value 2"}, {col: "AnotherCol", value: "val4"}, { col: "TheCol", value: "val3"}]},
    {items: [{ col: "SuperCol", value: " Just another value"}, { col: "TheCol", value: "val5"}, {col: "AnotherCol", value: "val6"}]},
    {items: [{col: "AnotherCol", value: "the another col value"}, { col: "TheCol", value: "The col value"}, { col: "SuperCol", value: " the super col value"}]}
  ];

  public tradePartners: ListBoxItem[] = [
    {text: "Gas-Union", value: 1},
    {text: "Gazprom", value: 2},
    {text: "CEZ", value: 3},
    {text: "Naftogaz", value: 4},
  ];

  public vhps: ListBoxItem[] = [
    {text: "Gas-GPL", value: 1},
    {text: "Gas-NCG", value: 2},    
  ];

  public products: ListBoxItem[] = [
    {text: "Item1", value: 1},
    {text: "Item2", value: 2},    
  ];


}