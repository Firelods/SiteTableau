import { Component, OnInit } from '@angular/core';
import { Tableau } from '../tableau';
import { TableauService } from '../tableau.service'
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {PanierService} from '../panier.service';
import {AppComponent} from '../app.component';
@Component({
  selector: 'app-affichage-tableaux',
  templateUrl: './affichage-tableaux.component.html',
  styleUrls: ['./affichage-tableaux.component.css']
})

export class AffichageTableauxComponent implements OnInit {
  tableaux: Tableau[] =[];
  constructor(
    private TableauService: TableauService
    ,private PanierService: PanierService,private AppComponent: AppComponent) { }
    
  

  ngOnInit(): void {
    this.getTableaux();
  }
  getTableaux(): void {
    this.TableauService.getTableaux()
    .subscribe(tableau => this.tableaux = tableau);
    console.log(this.tableaux)
  }
  addArticle(Article:Tableau):void {
    this.PanierService.addArticle(Article);
    console.log(this.PanierService.getNbArticle());
    this.AppComponent.updatePanier(this.PanierService.getNbArticle());
  }

}
