import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';

import { PlotlyViaCDNModule } from 'angular-plotly.js';

PlotlyViaCDNModule.setPlotlyVersion('latest');
PlotlyViaCDNModule.setPlotlyVersion('basic');


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule, PlotlyViaCDNModule
  ]
})
export class DashboardModule { }
