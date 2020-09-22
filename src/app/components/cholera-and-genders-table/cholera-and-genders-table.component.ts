import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as Plotly from 'plotly.js/dist/plotly';

@Component({
  selector: 'app-cholera-and-genders-table',
  templateUrl: './cholera-and-genders-table.component.html',
  styleUrls: ['./cholera-and-genders-table.component.scss']
})
export class CholeraAndGendersTableComponent implements OnInit {

  choleraData: any;

  layout: {};

  data: [any];

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

        this.data = [{
          type: 'table',
          header: {
            values: [
              ['<b>Age</b>'],
              ['<b>Male</b>'],
              ['<b>Female</b>']
            ],
            align: 'center',
            line: {
              width: 1,
              color: ['black', '#1F77B4', '#FF7F0E']
            },
            fill: { color: ['black', '#1F77B4', '#FF7F0E'] },
            font: {
              family: 'Roboto',
              size: 12,
              color: 'white'
            }
          },
          cells: {
            values: [
              ageArr,
              maleArr,
              femaleArr
            ],
            align: 'center',
            line: {
              color: 'black',
              width: 1
            },
            font: {
              family: 'Roboto',
              size: 11,
              color: ['black']
            }
          }
        }];

        this.layout = {
          title: {
            text: 'Deaths per 10,000 People by Genders',
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
