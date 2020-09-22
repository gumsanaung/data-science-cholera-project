import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as Plotly from 'plotly.js/dist/plotly';

@Component({
  selector: 'app-uk-census-male-chart',
  templateUrl: './uk-census-male-chart.component.html',
  styleUrls: ['./uk-census-male-chart.component.scss']
})
export class UkCensusMaleChartComponent implements OnInit {
  censusData: any;

  layout: {};

  data;

  constructor(private http: HttpClient) {
    this.getStats();
  }

  ngOnInit(): void {

  }
  private getStats() {
    this.http.get('/assets/data/UKcensus1851.csv', { responseType: 'text' })
      .toPromise()
      .then((data) => {
        data = data.replace(/^[#@][^\r\n]+[\r\n]+/mg, '');
        this.censusData = Plotly.d3.csv.parse(data);

        const ageArr = [];
        const maleArr = [];
        const femaleArr = [];

        for (const entry of this.censusData) {
          ageArr.push(entry.age);
          maleArr.push(entry.male);
          femaleArr.push(entry.female);
        }

        this.data = [
          {
            labels: ageArr,
            values: maleArr,
            type: 'pie',
            name: 'Age Data for Female',
            hole: 0.4
          }
        ];

        this.layout = {
          title: {
            text: '1851 UK Age Groups of Male Population',
            font: {
              family: 'Roboto',
              size: 24,
              color: '#333333'
            }
          }
        };
      })
      .catch((error) => { });
  }
}
