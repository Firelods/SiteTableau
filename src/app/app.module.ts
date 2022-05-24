import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AffichageTableauxComponent } from './affichage-tableaux/affichage-tableaux.component';
import { AffichageDescTableauComponent } from './affichage-desc-tableau/affichage-desc-tableau.component';

@NgModule({
  declarations: [
    AppComponent,
    AffichageTableauxComponent,
    AffichageDescTableauComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
