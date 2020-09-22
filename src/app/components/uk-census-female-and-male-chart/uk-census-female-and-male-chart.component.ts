import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as Plotly from 'plotly.js/dist/plotly';

@Component({
  selector: 'app-uk-census-female-and-male-chart',
  templateUrl: './uk-census-female-and-male-chart.component.html',
  styleUrls: ['./uk-census-female-and-male-chart.component.scss']
})
export class UkCensusFemaleAndMaleChartComponent implements OnInit {

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

        let totalMales = 0;
        let totalFemales = 0;

        for (const entry of this.censusData) {
          totalMales += entry.male;
          totalFemales += entry.female;
        }

        this.data = [
          {
            labels: ['Male', 'Female'],
            values: [totalMales, totalFemales],
            type: 'pie',
            name: 'Census Age Data (Males vs Females)',
            hole: 0.4
          }
        ];

        this.layout = {
          title: {
            text: '1851 UK Population by Genders',
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
