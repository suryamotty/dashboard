import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-widget-pie',
  templateUrl: './widget-pie.component.html',
  styleUrls: ['./widget-pie.component.css']
})
export class WidgetPieComponent {
  Highcharts = Highcharts
  chartOptions={}
  constructor(){
    this.chartOptions={
      chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
      },
      title: {
          text: 'Placements in May, 2020'
      },
      tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      accessibility: {
          point: {
              valueSuffix: '%'
          }
      },
      plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                  enabled: true,
                  format: '<b>{point.name}</b>: {point.percentage:.1f} %'
              }
          }
      },
      series: [{
          name: 'MEARN',
          colorByPoint: true,
          data: [{
              name: 'Python',
              y: 70.67,
              sliced: true,
              selected: true
          }, {
              name: 'Node',
              y: 14.77
          },  {
              name: 'Express',
              y: 4.86
          }, {
              name: 'React',
              y: 2.63
          }, {
              name: 'Angular',
              y: 1.53
          },  {
              name: 'c',
              y: 1.40
          }, {
              name: 'Testing',
              y: 0.84
          }, {
              name: 'QA',
              y: 0.51
          }, {
              name: 'Other',
              y: 2.6
          }]
      }]
  }
  }
}
