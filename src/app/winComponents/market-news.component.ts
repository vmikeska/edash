
import { Component } from "@angular/core";
import { DataTableHeaderItem, DataTableRow, DataColumnType } from "app/components/data-table.component";
import * as moment from 'moment';

@Component({
  selector: 'market-news',
  templateUrl: './market-news.html',
})

export class MarketNewsComponent {

    public dataHeaders: DataTableHeaderItem[] = [
        {name: "Stichtag", col: "date", type: DataColumnType.TypeDate, typeArgs: "ll" },
        {name: "Beschriebung", col: "caption"},
        {name: "Download", col: "download", type: DataColumnType.TypeHtml}
    ]

    private getIcoHtml(link: string) {
        return `<a href="${link}" class="download-icon icon-floppy-o"></a>`;
    }

    public data: DataTableRow[] = [
        {items: [{col: "date", value: moment(new Date())}, {col: "caption", value: "Gas-Union Marktbericht"}, {col: "download", value: this.getIcoHtml("http://e-brokers.de")}]},
        {items: [{col: "date", value: moment(new Date())}, {col: "caption", value: "Gas-Union Marktbericht"}, {col: "download", value: this.getIcoHtml("http://e-brokers.de")}]},
        {items: [{col: "date", value: moment(new Date())}, {col: "caption", value: "Gas-Union Marktbericht"}, {col: "download", value: this.getIcoHtml("http://e-brokers.de")}]},
        {items: [{col: "date", value: moment(new Date())}, {col: "caption", value: "Gas-Union Marktbericht"}, {col: "download", value: this.getIcoHtml("http://e-brokers.de")}]},
        {items: [{col: "date", value: moment(new Date())}, {col: "caption", value: "Gas-Union Marktbericht"}, {col: "download", value: this.getIcoHtml("http://e-brokers.de")}]},
    ];

}