import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WidgetComponent } from './widget/widget.component';
import { AnagraficaComponent } from './anagrafica/anagrafica.component';
import { QuickProfileComponent } from './quick-profile/quick-profile.component';
import { AttivitaComponent } from './attivita/attivita.component';
import { IndicatoriComponent } from './indicatori/indicatori.component';
import { AnagraficaDetailsComponent } from './anagrafica-details/anagrafica-details.component';
import { AttivitaDetailsComponent } from './attivita-details/attivita-details.component';
import { QuickProfileDetailsComponent } from './quick-profile-details/quick-profile-details.component';
import { IndicatoriDetailsComponent } from './indicatori-details/indicatori-details.component';
import { AnagraficaV2Component } from './anagrafica-v2/anagrafica-v2.component';
import { WidgetV2Component } from './widget-v2/widget-v2.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WidgetComponent,
    AnagraficaComponent,
    QuickProfileComponent,
    AttivitaComponent,
    IndicatoriComponent,
    AnagraficaDetailsComponent,
    AttivitaDetailsComponent,
    QuickProfileDetailsComponent,
    IndicatoriDetailsComponent,
    AnagraficaV2Component,
    WidgetV2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
