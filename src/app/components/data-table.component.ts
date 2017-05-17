import { Component, Injector, Input, OnChanges, SimpleChanges } from '@angular/core';
import * as _ from "lodash";
import * as moment from 'moment';


export enum DataColumnType {
  TypeString,
  TypeHtml,
  TypeDate
}

@Component({
  selector: 'data-table',
  templateUrl: './data-table.html',
})

export class DataTable {

  public filteredColumn: DataTableHeaderItem;
  public filteredAsc?: boolean = null;

  @Input()
  public headers: DataTableHeaderItem[];

  @Input()
  public set data(d: DataTableRow[]) {
    this.origData = d;

    this.viewData = this.orderColumnsByHeader(this.origData);
  }

  public viewData: DataTableRow[];
  private origData: DataTableRow[];


  private orderColumnsByHeader(inRows: DataTableRow[]) {
    let outRows = [];

    inRows.forEach((oldRow) => {

      let outRow: DataTableRow = { items: [], origRowNo: outRows.length };

      this.headers.forEach((h) => {
        let cell: DataTableColumnItem = _.find(oldRow.items, { col: h.col });
        //todo: possibly should create empty cell in this case, could cause bugs when orderByColumn
        if (cell) {

          cell.disVal = this.convertDisVal(cell.value, h.type, h.typeArgs);

          outRow.items.push(cell);
        }
      });

      outRows.push(outRow);
    });

    return outRows;
  }

  private convertDisVal(val: any, type: DataColumnType, typeArgs: string) {

    var outVal = val.toString();

    if (type === DataColumnType.TypeString) {
        //nothing
    }

    if (type === DataColumnType.TypeHtml) {
      //nothing
    }

    if (type === DataColumnType.TypeDate) {      
       outVal = moment(val).format(typeArgs);
    }

    return outVal;
  }

  private orderByColumn(asc: boolean, h: DataTableHeaderItem) {

    var temps: SortingCell[] = [];

    this.viewData.forEach((row) => {
      let cell = _.find(row.items, { col: h.col });

      let temp: SortingCell = {
        value: cell.value,
        rowNo: row.origRowNo
      };
      temps.push(temp);
    });

    var sortedTemps = _.sortBy(temps, ["rowNo"]);

    if (!asc) {
      sortedTemps = sortedTemps.reverse();
    }

    var sortedRows = [];
    sortedTemps.forEach((t) => {
      var r = _.find(this.viewData, { origRowNo: t.rowNo });
      sortedRows.push(r);
    })
    this.viewData = sortedRows;

  }

  public filterBtnClick(h) {

    if (this.filteredColumn !== null && h !== this.filteredColumn) {
      this.filteredAsc = null;
    }

    this.filteredColumn = h;

    if (this.filteredAsc !== null) {
      this.filteredAsc = !this.filteredAsc
    } else {
      this.filteredAsc = true;
    }

    this.orderByColumn(this.filteredAsc, this.filteredColumn);

  }

}

class SortingCell {
  public value: string;
  public rowNo: number;
}

export class DataTableHeaderItem {
  public name: string;
  public col: string;
  public type?= DataColumnType.TypeString;
  public typeArgs?: string;
}

export class DataTableRow {
  public items: DataTableColumnItem[];
  public origRowNo?: number;
}

export class DataTableColumnItem {
  public disVal?: string;
  public value: any;
  public col: string;  
}

