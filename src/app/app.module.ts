import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

import { FlexLayoutModule } from '@angular/flex-layout';

import * as PlotlyJS from 'plotly.js/dist/plotly.js';
import { PlotlyModule } from 'angular-plotly.js';

import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { CholeraTableComponent } from './components/cholera-table/cholera-table.component';
import { CholeraGraphComponent } from './components/cholera-graph/cholera-graph.component';
import { CholeraMapComponent } from './components/cholera-map/cholera-map.component';
import { CholeraAndGendersGraphComponent } from './components/cholera-and-genders-graph/cholera-and-genders-graph.component';
import { CholeraAndGendersTableComponent } from './components/cholera-and-genders-table/cholera-and-genders-table.component';
import { UkCensusTableComponent } from './components/uk-census-table/uk-census-table.component';
import { UkCensusMaleChartComponent } from './components/uk-census-male-chart/uk-census-male-chart.component';
import { UkCensusFemaleChartComponent } from './components/uk-census-female-chart/uk-census-female-chart.component';
// tslint:disable-next-line: max-line-length
import { UkCensusFemaleAndMaleChartComponent } from './components/uk-census-female-and-male-chart/uk-census-female-and-male-chart.component';
// tslint:disable-next-line: max-line-length
import { UkCensusFemaleAndMaleGraphComponent } from './components/uk-census-female-and-male-graph/uk-census-female-and-male-graph.component';
import { UkCensusComponent } from './pages/uk-census/uk-census.component';
import { AboutComponent } from './pages/about/about.component';
import { CholeraComponent } from './pages/cholera/cholera.component';

PlotlyModule.plotlyjs = PlotlyJS;

@NgModule({
  declarations: [
    AppComponent,
    CholeraTableComponent,
    CholeraGraphComponent,
    CholeraMapComponent,
    CholeraAndGendersTableComponent,
    CholeraAndGendersGraphComponent,
    UkCensusTableComponent,
    UkCensusMaleChartComponent,
    UkCensusFemaleChartComponent,
    UkCensusFemaleAndMaleChartComponent,
    UkCensusFemaleAndMaleGraphComponent,
    UkCensusComponent,
    AboutComponent,
    CholeraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    PlotlyModule,
    LeafletModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
