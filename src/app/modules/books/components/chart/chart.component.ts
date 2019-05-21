import { Component, ElementRef, EventEmitter, Input, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

import { Book } from '../../../../models';

@Component({
    selector: 'app-chart',
    templateUrl: './chart.component.html',
    styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
    @Input() booksEmitter: EventEmitter<Book[]>;
    @ViewChild('chartEl') chartEl: ElementRef;
    chart: any;

    constructor() {
    }

    ngOnInit() {
        this.booksEmitter.subscribe(books => {
            this.buildChart(books);
        });



        /*console.log(Chart);

        */
    }

    buildChart(books: Book[]): void {
        const months: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
        const pagesInMonth: { [name: number]: number[] } = {};
        books.forEach(book => {
            if (!pagesInMonth[new Date(book.PublishDate).getMonth()]) {
                pagesInMonth[new Date(book.PublishDate).getMonth()] = [];
            }
            pagesInMonth[new Date(book.PublishDate).getMonth()].push(book.PageCount);
        });
        const avaragePagesPerMonth: { [name: number]: number } = {};
        Object.keys(pagesInMonth).forEach(key => {
            avaragePagesPerMonth[key] = (pagesInMonth[key].reduce((summ, item) => summ + item, 0)) / pagesInMonth[key].length;
        });
        const labels: string[] = [];
        const pageCounts: number[] = [];
        Object.keys(avaragePagesPerMonth).forEach(key => {
            labels.push(months[key]);
            pageCounts.push(avaragePagesPerMonth[key]);
        });
        console.log(labels);
        console.log(pageCounts);

        this.chart = new Chart(this.chartEl.nativeElement.getContext('2d'), {
            type: 'line',
            data: {
                labels,
                datasets: [
                    {
                        label: 'chart',
                        data: pageCounts,
                        borderColor: 'blue',
                        fill: false
                    }
                ]
            },
            options: {
                maintainAspectRatio: false,
                legend: {
                    display: false
                },
                tooltips: {
                    enabled: false
                }
            }

        });
    }

}
