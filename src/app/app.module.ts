import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AffichageDescPhotoComponent } from './affichage-desc-photo/affichage-desc-photo.component';
import { PanierComponent } from './panier/panier.component';
import { AffichagePhotosComponent } from './affichage-photos/affichage-photos.component';
import { ModificationDatabaseComponent } from './modification-database/modification-database.component';

@NgModule({
  declarations: [
    AppComponent,
    AffichageDescPhotoComponent,
    PanierComponent,
    AffichagePhotosComponent,
    ModificationDatabaseComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
