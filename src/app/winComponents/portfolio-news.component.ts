
import { Component, ViewEncapsulation } from "@angular/core";
import { TabItem } from "app/components/tabs.component";
import { ListBoxItem } from "app/components/list-box.component";



@Component({
  selector: 'portfolio-news',
  templateUrl: './portfolio-news.html',
  //encapsulation: ViewEncapsulation.None,
})

export class PortfolioNewsComponent {

    public tabs: TabItem[] = [
        { id: "ponPeriod", name: "Betrachtungszeitraum"    },
        { id: "ponExport", name: "Export"    }
    ];

    public periods: ListBoxItem[] = [
        {text: "Gas GPL 2017-01-01 - 2020-01-01", value: 0},
        {text: "Gas NCG 2017-01-01 - 2020-01-01", value: 1},
        {text: "Gas NCG 2017-01-01 - 2020-01-01", value: 2},
        {text: "Gas NCG 2017-01-01 - 2020-01-01", value: 3}
    ];

    public partners: ListBoxItem[] = [
        {text: "Gas-Union", value: 0},
    ];
    

}