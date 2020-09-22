import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { CholeraComponent } from './pages/cholera/cholera.component';
import { UkCensusComponent } from './pages/uk-census/uk-census.component';

const routes: Routes = [
  { path: 'cholera', component: CholeraComponent },
  { path: 'uk', component: UkCensusComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: 'cholera', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
