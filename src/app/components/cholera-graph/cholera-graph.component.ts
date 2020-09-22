import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as Plotly from 'plotly.js/dist/plotly';

@Component({
  selector: 'app-cholera-graph',
  templateUrl: './cholera-graph.component.html',
  styleUrls: ['./cholera-graph.component.scss']
})
export class CholeraGraphComponent implements OnInit {
  choleraDeaths: any;

  layout: {};

  data: {};

  constructor(private http: HttpClient) {
    this.getDeaths();
  }

  ngOnInit(): void {
  }

  private getDeaths() {
    this.http.get('/assets/data/choleraDeaths.tsv', { responseType: 'text' })
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
            x: dateArr,
            y: deathArr,
            type: 'scatter',
            name: 'New Deaths'
          },
          {
            x: dateArr,
            y: attackArr,
            type: 'scatter',
            name: 'New Attacks'
          },
          {
            x: dateArr,
            y: totalDeathArr,
            type: 'scatter',
            name: 'Total Deaths'
          },
          {
            x: dateArr,
            y: totalAttackArr,
            type: 'scatter',
            name: 'Total Attacks'
          }
        ];

        this.layout = {
          title: {
            text: 'Attacks and Deaths',
            font: {
              family: 'Roboto',
              size: 24,
              color: '#333333'
            }
          },
          xaxis: {
            automargin: true,
            title: {
              text: 'Date',
            }
          },
          yaxis: {
            automargin: true,
            title: {
              text: 'Number of Attacks and Deaths',
            }
          }
        };
      })
      .catch((error) => { });
  }
}
