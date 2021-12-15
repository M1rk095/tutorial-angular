import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AnagraficaDetailsComponent } from './anagrafica-details/anagrafica-details.component';
import { AttivitaDetailsComponent } from './attivita-details/attivita-details.component';
import { IndicatoriDetailsComponent } from './indicatori-details/indicatori-details.component';
import { QuickProfileDetailsComponent } from './quick-profile-details/quick-profile-details.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'anagrafica', component: AnagraficaDetailsComponent },
  { path: 'attivita', component: AttivitaDetailsComponent },
  { path: 'quick-profile', component: QuickProfileDetailsComponent },
  { path: 'indicatori', component: IndicatoriDetailsComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
