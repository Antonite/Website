import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts/highstock';
import { RestService } from '../rest.service';
import { runInThisContext } from 'vm';

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
    activeStatus = "Active";
    inActiveStatus = "Idle";
    status = false;
    orders = [];
  
    constructor(public rest:RestService) { 

    }

    parseData(data){
        let dataSeries = [];
        for (var key in data) {
            if (data.hasOwnProperty(key)) {
                dataSeries.push({x: +key, y: Math.round(data[key].value.totalUSD * 100) / 100});
            }
        }
        return dataSeries;
    }

    parseOrders(orders){
        let dataSeries = [];
        orders.value.data.forEach(element => {
            dataSeries.push(
                {
                    side: element.side,
                    qty: Math.round(element.qty* 100) / 100,
                    price: Math.round(element.price* 100) / 100
                });
        });
        return dataSeries;
    }

    ngOnInit() {
        this.rest.getOrders().subscribe((orders: {}) => {
            var orderData = this.parseOrders(orders);
            this.status = orderData.length > 0;
            this.orders = orderData;
        });

        this.rest.getData().subscribe((data: {}) => {
            var dataSeries = this.parseData(data);

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
