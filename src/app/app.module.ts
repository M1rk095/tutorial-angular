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
import { RssComponent } from './rss/rss.component';
import { MenuComponent } from './menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TabellaComponent } from './tabella/tabella.component';
import { TabellaDatiUtenteComponent } from './tabella-dati-utente/tabella-dati-utente.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { NewRowDialogComponent } from './new-row-dialog/new-row-dialog.component';
  

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
    IndicatoriDetailsComponent,
    RssComponent,
    MenuComponent,
    TabellaComponent,
    TabellaDatiUtenteComponent,
    NewRowDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatDialogModule,
    MatButtonModule
  ],
  entryComponents: [NewRowDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
