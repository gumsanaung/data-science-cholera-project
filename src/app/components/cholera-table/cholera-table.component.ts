import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as Plotly from 'plotly.js/dist/plotly.js';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cholera-table',
  templateUrl: './cholera-table.component.html',
  styleUrls: ['./cholera-table.component.scss']
})
export class CholeraTableComponent implements OnInit {
  choleraDeaths: any;

  layout: {};

  data: [any];

  constructor(private http: HttpClient) {
    this.getDeaths();
  }

  ngOnInit(): void {
  }

  private getDeaths() {
    this.http.get(environment.baseUrl + '/assets/data/choleraDeaths.tsv', { responseType: 'text' })
      .toPromise()
      .then((data) => {
        this.choleraDeaths = Plotly.d3.tsv.parse(data);

        const dateArr = [];
        const attackArr = [];
        const deathArr = [];
        const totalAttackArr = [];
        const totalDeathArr = [];

        let totalAttacks = 0;
        let totalDeaths = 0;

        for (const entry of this.choleraDeaths) {
          dateArr.push(entry.Date);
          attackArr.push(entry.Attack);
          deathArr.push(entry.Death);
          totalAttacks += parseInt(entry.Attack, 10);
          totalDeaths += parseInt(entry.Death, 10);
          totalAttackArr.push(totalAttacks);
          totalDeathArr.push(totalDeaths);
        }

        this.data = [
          {
            type: 'table',
            header: {
              values: [
                [
                  '<b>Date</b>'
                ],
                [
                  '<b>New Attacks</b>'
                ],
                [
                  '<b>New Deaths</b>'
                ],
                [
                  '<b>Total Attacks</b>'
                ],
                [
                  '<b>Total Deaths</b>'
                ]
              ],
              align: 'center',
              line: {
                width: 1,
                color: 'black'
              },
              fill: {
                color: 'grey'
              },
              font: {
                family: 'Roboto',
                size: 12,
                color: 'white'
              }
            },
            cells: {
              values: [
                dateArr,
                attackArr,
                deathArr,
                totalAttackArr,
                totalDeathArr
              ],
              align: 'center',
              line: {
                color: 'black',
                width: 1
              },
              font: {
                family: 'Roboto',
                size: 12,
                color: [
                  'black'
                ]
              }
            }
          }
        ];

        this.layout = {
          title: {
            text: 'Outbreak Record',
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
