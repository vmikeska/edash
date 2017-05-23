
import { Component } from "@angular/core";
import { ChartModule } from 'angular2-highcharts';


@Component({
    selector: 'live-charts',
    templateUrl: './live-charts.html',
})

export class LiveChartsComponent {

    public options;

    // minX;
    // minY;
    // maxX;
    // maxY;

    constructor() {
        this.options = {
            chart: {
                zoomType: 'xy'
            },
            title: { text: 'simple chart' },
            series: [{
                animation: false,
                type: 'line',
                data: [
                    [-1743913407000, 29.5],
                    [-1743813407000, 28.5],
                    [-1743713407000, 27.5],
                    [-1743613407000, 26.5],
                    [-1743513407000, 25.5],
                    [-1743413407000, 24.5],
                    [-1743313407000, 23.5],
                    [-1743213407000, 22.5],
                    [-1743113407000, 20.5],
                    [-1743013407000, 21.5],
                    [-1742913407000, 22.5],
                    [-1742813407000, 23.5],
                    [-1742713407000, 24.5],
                    [-1742613407000, 25.5],
                    [-1742513407000, 26.5],
                    [-1742413407000, 27.5],
                    [-1742313407000, 28.5],
                    [-1742213407000, 29.5]
                ]
            }],
            xAxis: {
                type: 'datetime',
                ordinal: false
            }
        };
    }

    // onAfterSetExtremesX(e) {
    //     this.minX = e.context.min;
    //     this.maxX = e.context.max;
    // }
    // onAfterSetExtremesY(e) {
    //     this.minY = e.context.min;
    //     this.maxY = e.context.max;
    // }

}