import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as Plotly from 'plotly.js/dist/plotly';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cholera-map',
  templateUrl: './cholera-map.component.html',
  styleUrls: ['./cholera-map.component.scss']
})
export class CholeraMapComponent implements OnInit {

  data;

  layout;

  constructor(private http: HttpClient) {
    this.data = [];
    this.layout = {
      xaxis: { fixedrange: true },
      yaxis: { fixedrange: true },
      bearing: 0,
      font: {
        family: 'Roboto',
        size: 24,
        color: '#333333'
      },
      width: window.innerWidth / 1.5,
      height: window.innerHeight,
      dragmode: 'zoom',
      mapbox: {
        style: 'carto-positron',
        center: {
          lat: 51.513,
          lon: -0.136
        },
        zoom: 16
      },
      showlegend: true,
      annotations: [{
        x: 0.01,
        y: 0.05,
        text: 'Cholera Deaths & Water Pumps',
        showarrow: false
      }]
    };
  }

  ngOnInit(): void {
    this.getStats();
  }

  public getStats() {
    this.getDeaths();
  }

  private getDeaths() {
    const numDeaths = [];
    const numDeathsText = [];
    const deathLat = [];
    const deathLong = [];

    this.http.get(environment.baseUrl + '/assets/data/choleraDeathLocations.csv', { responseType: 'text' }).toPromise()
      .then((data) => {
        data = 'deaths,long,lat\n' + data;

        const locations = Plotly.d3.csv.parse(data);

        console.log(locations);

        for (const entry of locations) {
          numDeaths.push(entry.deaths * 1.7);
          numDeathsText.push(entry.deaths + ' Deaths');
          deathLat.push(entry.lat);
          deathLong.push(entry.long);
        }

        this.getPumps({
          type: 'scattermapbox',
          name: 'Deaths',
          text: numDeathsText,
          lon: deathLong,
          lat: deathLat,
          marker: { color: 'red', size: numDeaths },
        });
      })
      .catch((error) => { });
  }

  private getPumps(deathsData) {
    const pumpLat = [];
    const pumpLong = [];

    this.http.get(environment.baseUrl + '/assets/data/choleraPumpLocations.csv', { responseType: 'text' }).toPromise()
      .then((data) => {

        data = 'long,lat\n' + data;

        const locations = Plotly.d3.csv.parse(data);

        console.log(locations);

        for (const entry of locations) {
          pumpLat.push(entry.lat);
          pumpLong.push(entry.long);
        }

        this.data.push({
          type: 'scattermapbox',
          name: 'Pump',
          text: 'Pump',
          lon: pumpLong,
          lat: pumpLat,
          marker: { color: 'blue', size: 10 }
        }, deathsData
        );

      })
      .catch((error) => { });
  }
}
