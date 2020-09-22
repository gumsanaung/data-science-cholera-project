import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as Plotly from 'plotly.js/dist/plotly';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-uk-census-female-and-male-graph',
  templateUrl: './uk-census-female-and-male-graph.component.html',
  styleUrls: ['./uk-census-female-and-male-graph.component.scss']
})
export class UkCensusFemaleAndMaleGraphComponent implements OnInit {

  choleraData: any;

  layout: {};

  data: {};

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
        this.choleraData = Plotly.d3.csv.parse(data);

        const population = [];
        const maleArr = [];
        const femaleArr = [];

        for (const entry of this.choleraData) {
          population.push(entry.age);
          maleArr.push(entry.male);
          femaleArr.push(entry.female);
        }

        console.log(this.choleraData);

        this.data = [
          {
            x: population,
            y: femaleArr,
            type: 'bar',
            name: 'Female',
          },
          {
            x: population,
            y: maleArr,
            type: 'bar',
            name: 'Male'
          }
        ];

        this.layout = {
          title: {
            text: '1851 UK Age Population between Genders and Age Groups',
            font: {
              family: 'Roboto',
              size: 24,
              color: '#333333'
            }
          },
          xaxis: {
            automargin: true,
            title: {
              text: 'Age Groups',
            }
          },
          yaxis: {
            automargin: true,
            title: {
              text: 'Population',
            }
          }
        };
      })
      .catch((error) => { });
  }
}
