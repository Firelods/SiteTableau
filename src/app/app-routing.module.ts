import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AffichageDescTableauComponent } from './affichage-desc-tableau/affichage-desc-tableau.component';
import { AffichageTableauxComponent } from './affichage-tableaux/affichage-tableaux.component';
import { PanierComponent } from './panier/panier.component';
const routes: Routes = [
  {path: '',redirectTo: '/affichage',pathMatch: 'full'},
  {path: 'affichage', component: AffichageTableauxComponent},
  {path: 'detail/:id',component:AffichageDescTableauComponent},
  {path: 'panier',component:PanierComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
