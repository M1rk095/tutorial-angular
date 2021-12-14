import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnagraficaDetailsComponent } from './anagrafica-details/anagrafica-details.component';
import { AttivitaDetailsComponent } from './attivita-details/attivita-details.component';
import { HomeComponent } from './home/home.component';
import { IndicatoriDetailsComponent } from './indicatori-details/indicatori-details.component';
import { QuickProfileDetailsComponent } from './quick-profile-details/quick-profile-details.component';

const routes: Routes = [
  { path: 'anagrafica', component: AnagraficaDetailsComponent },
  { path: 'quick-profile', component: QuickProfileDetailsComponent },
  { path: 'attivita', component: AttivitaDetailsComponent },
  { path: 'indicatori', component: IndicatoriDetailsComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
