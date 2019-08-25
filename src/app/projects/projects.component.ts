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
    status = false;
    orders = [];
    lastPrice = 0;
  
    constructor(public rest:RestService) { 

    }

    parseData(data){
        let dataSeries = [];
        let lastKey = "";
        for (var key in data) {
            if (data.hasOwnProperty(key)) {
                dataSeries.push({x: +(data[key].Timestamp + "000"), y: +data[key].Balance});
                lastKey = key;
            }
        }
        if (data.hasOwnProperty(lastKey)) this.lastPrice = Math.round(data[key].Price * 100) / 100;
        return dataSeries;
    }

    parseOrders(orders){
        let dataSeries = [];
        orders.forEach(element => {
            dataSeries.push(
                {
                    side: element.Side,
                    qty: Math.round(element.Qty* 100) / 100,
                    price: Math.round(element.Price* 100) / 100
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
                    name: 'USD',
                    type: 'areaspline',
                    threshold: null,
                    data: dataSeries,
                    valueDecimals: 2
                }],
                credits: { 
                    enabled: false
                },
                title: {
                    text: 'Total USD Balance',
                    style: {
                    color: 'black',
                    fontSize: '16px',
                    fontWeight: 'bold'
                    }
                },

                chart: {
                    type: 'spline'
                },
                subtitle: {
                    text: 'Balance over time'
                },
                xAxis: {
                    type: 'datetime',
                    dateTimeLabelFormats: {
                        month: '%e. %b',
                        year: '%b'
                    },
                    title: {
                        text: 'Date'
                    },
                    ordinal: false
                },
                yAxis: {
                    title: {
                        text: 'USD'
                    }
                },
                tooltip: {
                    pointFormat: '{point.y:.2f} USD'
                },
                plotOptions: {
                    spline: {
                        marker: {
                            enabled: true
                        }
                    }
                }
            };

            this.loading = false;
        });
    }
}
