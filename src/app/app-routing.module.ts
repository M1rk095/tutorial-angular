import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnagraficaDetailsComponent } from './anagrafica-details/anagrafica-details.component';
import { AttivitaDetailsComponent } from './attivita-details/attivita-details.component';
import { HomeComponent } from './home/home.component';
import { IndicatoriDetailsComponent } from './indicatori-details/indicatori-details.component';
import { MenuComponent } from './menu/menu.component';
import { QuickProfileDetailsComponent } from './quick-profile-details/quick-profile-details.component';
import { RssComponent } from './rss/rss.component';

const routes: Routes = [
  { path: 'home-widgets', component: HomeComponent },
  { path: 'anagrafica', component: AnagraficaDetailsComponent },
  { path: 'quick-profile', component: QuickProfileDetailsComponent },
  { path: 'attivita', component: AttivitaDetailsComponent },
  { path: 'indicatori', component: IndicatoriDetailsComponent },

  { path: 'rss', component: RssComponent },

  { path: '**', component: MenuComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
