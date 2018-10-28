import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts/highstock';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

export class ProjectsComponent implements OnInit {
    Highcharts = Highcharts;
    chartConstructor = 'stockChart';
    chartOptions: any;
    loading = true;
  
    constructor(public rest:RestService) { 

    }

    convertData(data){
        let dataSeries = [];
        for (var key in data) {
            if (data.hasOwnProperty(key)) {
                dataSeries.push({x: +key, y: Math.round(data[key].value.totalUSD * 100) / 100});
            }
        }
        return dataSeries;
    }

    ngOnInit() {
        this.rest.getData().subscribe((data: {}) => {
            var dataSeries = this.convertData(data);

            this.chartOptions = {
                series: [{
                    name: 'USDT',
                    type: 'areaspline',
                    threshold: null,
                    data: dataSeries,
                    valueDecimals: 2
                }],
                rangeSelector: {
                    selected: 1
                },
                credits: { 
                    enabled: false
                },
                title: {
                    text: 'Total USDT Balance',
                    style: {
                    color: 'black',
                    fontSize: '16px',
                    fontWeight: 'bold'
                    }
                }
            };

            this.loading = false;
        });
    }
}
