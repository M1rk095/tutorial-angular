import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnagraficaDetailsComponent } from './anagrafica-details/anagrafica-details.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'anagrafica', component: AnagraficaDetailsComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
