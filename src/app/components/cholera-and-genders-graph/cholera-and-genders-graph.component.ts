import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as Plotly from 'plotly.js/dist/plotly';

@Component({
  selector: 'app-cholera-and-genders-graph',
  templateUrl: './cholera-and-genders-graph.component.html',
  styleUrls: ['./cholera-and-genders-graph.component.scss']
})
export class CholeraAndGendersGraphComponent implements OnInit {

  choleraData: any;

  layout: {};

  data: {};

  constructor(private http: HttpClient) {
    this.getStats();
  }

  ngOnInit(): void {

  }
  private getStats() {
    this.http.get('/assets/data/naplesCholeraAgeSexData.tsv', { responseType: 'text' })
      .toPromise()
      .then((data) => {
        data = data.replace(/^[#@][^\r\n]+[\r\n]+/mg, '');
        this.choleraData = Plotly.d3.tsv.parse(data);

        const ageArr = [];
        const maleArr = [];
        const femaleArr = [];

        for (const entry of this.choleraData) {
          ageArr.push(entry.age);
          maleArr.push(entry.male);
          femaleArr.push(entry.female);
        }

        console.log(this.choleraData);

        this.data = [
          {
            x: ageArr,
            y: femaleArr,
            type: 'bar',
            name: 'Female'
          },
          {
            x: ageArr,
            y: maleArr,
            type: 'bar',
            name: 'Male'
          }
        ];

        this.layout = {
          title: {
            text: 'Cholera Deaths by Age and Gender from Naples',
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
              text: 'Deaths',
            }
          }
        };
      })
      .catch((error) => { });
  }
}
