import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as Plotly from 'plotly.js/dist/plotly';
import { range } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-uk-census-female-chart',
  templateUrl: './uk-census-female-chart.component.html',
  styleUrls: ['./uk-census-female-chart.component.scss']
})
export class UkCensusFemaleChartComponent implements OnInit {
  censusData: any;

  layout: {};

  data;

  constructor(private http: HttpClient) {
    this.getStats();
  }

  ngOnInit(): void {

  }
  private getStats() {
    this.http.get(environment.baseUrl + '/assets/data/UKcensus1851.csv', { responseType: 'text' })
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
            values: femaleArr,
            type: 'pie',
            name: 'Age Data for Female',
            hole: 0.4
          }
        ];

        this.layout = {
          title: {
            text: '1851 UK Age Groups of Female Population',
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
