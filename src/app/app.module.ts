import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WidgetComponent } from './widget/widget.component';
import { AnagraficaComponent } from './anagrafica/anagrafica.component';
import { AnagraficaDetailsComponent } from './anagrafica-details/anagrafica-details.component';
import { QuickProfileComponent } from './quick-profile/quick-profile.component';
import { QuickProfileDetailsComponent } from './quick-profile-details/quick-profile-details.component';
import { AttivitaComponent } from './attivita/attivita.component';
import { AttivitaDetailsComponent } from './attivita-details/attivita-details.component';
import { IndicatoriComponent } from './indicatori/indicatori.component';
import { IndicatoriDetailsComponent } from './indicatori-details/indicatori-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WidgetComponent,
    AnagraficaComponent,
    AnagraficaDetailsComponent,
    QuickProfileComponent,
    QuickProfileDetailsComponent,
    AttivitaComponent,
    AttivitaDetailsComponent,
    IndicatoriComponent,
    IndicatoriDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
