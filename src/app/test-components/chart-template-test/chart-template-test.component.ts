import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import ChartDataLabel from 'chartjs-plugin-datalabels';
import zoomPlugin from 'chartjs-plugin-zoom';
import { endWith } from 'rxjs';

@Component({
  selector: 'app-chart-template-test',
  templateUrl: './chart-template-test.component.html',
  styleUrls: ['./chart-template-test.component.scss'],
})
export class ChartTemplateTestComponent implements OnInit {
  isdataLabel: boolean = true;
  public chart_legend = true;
  public barChartPlugins = [ChartDataLabel, zoomPlugin];

  public chart_type: ChartConfiguration<any>['type'] = 'bar';

  public barChartData: ChartConfiguration<any>['data'] = {
    labels: ['2006', '2007', '2008', '2009', '2010', '2011'],
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 2,
        label: 'Series A',
      },
      { data: [28, 48, 40, 19, 86, 27], label: 'Series B' },
    ],
  };

  public chart: ChartOptions = {};
  public barChartOptions: ChartConfiguration<any>['options'] = {
    responsive: true,
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: 'Year',
          color: 'black',
          font: {
            family: 'Comic Sans MS',
            size: 16,
            weight: 'bold',
            lineHeight: 1.2,
          },
          padding: { top: 0, left: 0, right: 0, bottom: 0 },
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'Sales (in Cr)',
          color: 'black',
          font: function () {
            var size = window.innerWidth > 700 ? 16 : 12;
            return {
              size: size,
              family: 'Times',
              style: 'normal',
              lineHeight: 1.2,
            };
          },
          padding: { top: 0, left: 0, right: 0, bottom: 0 },
        },
        ticks: {
          // stepSize: 30,
          // autoSkipPadding: 50,
          // maxTicksLimit: 3,
          // minRotation: 90,
          // beginAtZero: true,
          // suggestedMax: 50,
        },
      },
    },

    plugins: {
      zoom: {
        zoom: {
          wheel: {
            enabled: true,
          },
          pinch: {
            enabled: true,
          },
          mode: 'xy',
        },
      },
      datalabels: {
        display: true,
        anchor: 'end',
        align: 'end',
      },

      title: {
        display: false,
        text: 'Sales / Year (Chart Title)',
        // font: {
        //   size: 18,
        // },

        font: function () {
          var size = window.innerWidth > 700 ? 16 : 12;
          return {
            size: size,
            //weight: 600,
          };
        },
        color: '#f18f20',
      },
      legend: {
        labels: {
          font: function () {
            var size = window.innerWidth > 700 ? 12 : 10;
            return {
              size: size,
              //weight: 600,
            };
          },
        },
      },
    },
  };

  selectedChart: any = 'bar';
  charts_type = [
    { id: 1, name: 'bar' },
    { id: 2, name: 'line' },
    { id: 3, name: 'scatter' },
    { id: 4, name: 'bubble' },
    { id: 5, name: 'pie' },
    { id: 6, name: 'doughnut' },
    { id: 7, name: 'polarArea' },
    { id: 8, name: 'radar' },
  ];

  constructor() {}

  ngOnInit(): void {}

  charType(e: any) {
    this.chart_type = e.name;
  }

  downloadChart() {
    let url_base64 = document.getElementById('chart') as HTMLCanvasElement;
    let i = url_base64.toDataURL('image/png');
    let a = document.createElement('a');
    a.href = i;
    a.download = 'chart.png';
    a.click();
  }

  // downloadCanvas(event: any) {
  //   // get the `<a>` element from click event
  //   var anchor = event.target;
  //   // get the canvas, I'm getting it by tag name, you can do by id
  //   // and set the href of the anchor to the canvas dataUrl
  //   anchor.href = document.getElementsByTagName('canvas')[0].toDataURL();
  //   // set the anchors 'download' attibute (name of the file to be downloaded)
  //   anchor.download = 'test.png';
  // }

  onDataLableChange() {
    this.isdataLabel = !this.isdataLabel;
    this.isdataLabel == false
      ? (this.barChartOptions.plugins.datalabels.display = false)
      : (this.barChartOptions.plugins.datalabels.display = true);

    // to refresh the chart option properties
    this.barChartOptions = { ...this.barChartOptions };
  }
}
