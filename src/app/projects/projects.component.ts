import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts/highstock';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  Highcharts = Highcharts;
  chartConstructor = 'stockChart';
  chartOptions = {
    series: [{
      data: [{x:1540339797812,y:1}, {x:1540339897812,y:2}, {x:1540339997812,y:3}]
    }],
    rangeSelector: {
      selected: 1,
      buttonTheme: {
        fill: 'white',
        stroke: '#C0C0C8',
        'stroke-width': 1,
        states: {
            select: {
                fill: '#D0D0D8'
            }
        }
    }
    },
    credits: { 
      enabled: false
    },
    title: {
        text: 'AAPL Stock Price',
        style: {
          color: 'black',
          fontSize: '16px',
          fontWeight: 'bold'
      }
    },

    colors: ['#f45b5b', '#8085e9', '#8d4654', '#7798BF', '#aaeeee',
        '#ff0066', '#eeaaee', '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],
    chart: {
        backgroundColor: null,
        style: {
            fontFamily: 'Signika, serif'
        }
    },
    subtitle: {
        style: {
            color: 'black'
        }
    },
    tooltip: {
        borderWidth: 0
    },
    legend: {
        itemStyle: {
            fontWeight: 'bold',
            fontSize: '13px'
        }
    },
    xAxis: {
        labels: {
            style: {
                color: '#6e6e70'
            }
        }
    },
    yAxis: {
        labels: {
            style: {
                color: '#6e6e70'
            }
        }
    },
    plotOptions: {
        series: {
            shadow: true
        },
        candlestick: {
            lineColor: '#404048'
        },
        map: {
            shadow: false
        }
    },

    // Highstock specific
    navigator: {
        xAxis: {
            gridLineColor: '#D0D0D8'
        }
    },
    scrollbar: {
        trackBorderColor: '#C0C0C8'
    },

    // General
    background2: '#E0E0E8'
  };
  
  constructor() { 
    
  }

  ngOnInit() {
    
  }

}
