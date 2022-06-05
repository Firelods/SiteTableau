import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AffichageDescPhotoComponent } from './affichage-desc-photo/affichage-desc-photo.component';
import { AffichagePhotosComponent } from './affichage-photos/affichage-photos.component';
import { ModificationDatabaseComponent } from './modification-database/modification-database.component';
import { PanierComponent } from './panier/panier.component';
const routes: Routes = [
  {path: '',redirectTo: '/affichage',pathMatch: 'full'},
  {path: 'affichage', component: AffichagePhotosComponent},
  {path: 'detail/:id',component:AffichageDescPhotoComponent},
  {path: 'panier',component:PanierComponent},
  {path: 'admin',component:ModificationDatabaseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
