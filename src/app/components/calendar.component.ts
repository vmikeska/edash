import { Component, OnInit, Input } from "@angular/core";
import * as moment from 'moment';
import { Utils } from "app/services/Utils";
import { OS } from "app/globals";

@Component({
    selector: 'calendar',
    templateUrl: './calendar.html',
})

export class CalendarComponent implements OnInit {

    @Input()
    public initDate: moment.Moment;

    public date: moment.Moment;

    public isNative: boolean;    
    private now: moment.Moment
    public opened = false;

    ngOnInit(): void {

        var os = Utils.getMobileOS();				
        this.isNative = os !== OS.Other;
        //this.isNative = true;

        this.now = moment();
        if (this.initDate) {
            this.date = this.initDate;
        } else {
            this.date = moment();
        }

        this.date.startOf("day");

        this.setDateInternal();
    }



    public nativeChange(e) {
        // this.date = moment(this.$input.val());
        this.callChange();
    }

    public standardFocusin(e) {
        this.onFocus();
    }


    public dispValueDate;

    private setDateInternal() {

         if (this.isNative) {

        //     var input = this.$input.get(0);

        //     input["valueAsDate"] = this.date.toDate();
        } else {
            this.setDispValueDate(this.date);
        }
    }

    private setDispValueDate(d) {
        this.dispValueDate = d.format("L");
    }

    private getCalStart(date) {
        var d = date.clone();
        d.startOf("month");
        d.startOf("week");

        return d;
    }

    private getCalEnd(date) {
        var d = date.clone();

        d.endOf("month");
        d.endOf("week");
        return d;
    }

    public calDate;

    public titleDays: CalTitleDay[] = [];
    public weeks: CalWeek[] = [];

    private genCal() {

        let titleDays: CalTitleDay[] = [];
        let weeks: CalWeek[] = [];

        this.opened = true;

        //this.regMove();

        var origDate = moment(this.date);

        var date = this.getCalStart(this.date);
        var end = this.getCalEnd(this.date);

        var titleFinished = false;

        var notEnd = true;

        this.calDate = origDate.format("MMMM YYYY");

        while (notEnd) {

            let week: CalWeek = {
                days: []
            };
            weeks.push(week);

            for (var act = 1; act <= 7; act++) {

                if (!titleFinished) {

                    let day: CalTitleDay = {
                        text: date.format("dd"),
                        weekend: false
                    }

                    titleDays.push(day);

                    if (act === 6 || act === 7) {
                        day.weekend = true;
                    }
                }

                var day: CalDay = {
                    dayNo: date.date(),
                    date: date
                };

                week.days.push(day);

                var daysDiff = this.now.diff(date, "day");

                var isPast = daysDiff > 0;

                if (isPast) {
                    day.isOld = true;
                } else {
                    if (act === 6 || act === 7) {
                        day.weekend = true;
                    }

                    day.selectable = true;
                }

                if (origDate.month() === date.month() && origDate.date() === date.date()) {
                    day.active = true;
                }

                if (end.month() === date.month() && end.date() === date.date()) {
                    notEnd = false;
                }

                date.add(1, "days");
            }

            titleFinished = true;
        }

        this.titleDays = titleDays;
        this.weeks = weeks;
    }

    private onFocus() {
        this.genCal();
    }

    public prevClicked() {
        this.moveMonth(-1);
    }

    public nextClicked() {
        this.moveMonth(1);
    }

    public closeClicked() {
        this.opened = false;
    }

    private moveMonth(val: number) {        
        this.date.add(val, "months");
        this.genCal();        
    }

    public dayClicked(day: CalDay) {
        this.date = day.date;
        
        this.deactivateDays();
        day.active = true;

        this.setDispValueDate(this.date);

        this.callChange();

        this.opened = false;
    }

    private deactivateDays() {
        this.weeks.forEach((w) => {
            w.days.forEach((d) => {
                d.active = false;
            })
        })
    }

    private callChange() {
        
    }

    // public enabled(state: any = null) {
    //     if (state === null) {
    //         return !this.$cont.hasClass("disabled");
    //     }

    //     this.$cont.toggleClass("disabled", !state);
    // }
}

export class CalTitleDay {
    public text: string;
    public weekend = false;
}

export class CalWeek {
    public days: CalDay[];
}

export class CalDay {
    public date: moment.Moment;
    public dayNo: number;
    public active?= false;
    public isOld?= false;
    public weekend?= false;
    public selectable?= false;
}
