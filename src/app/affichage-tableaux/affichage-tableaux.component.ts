import { Component, OnInit } from '@angular/core';
import { Tableau } from '../tableau';
import { TableauService } from '../tableau.service'
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {PanierService} from '../panier.service';

@Component({
  selector: 'app-affichage-tableaux',
  templateUrl: './affichage-tableaux.component.html',
  styleUrls: ['./affichage-tableaux.component.css']
})

export class AffichageTableauxComponent implements OnInit {
  tableaux: Tableau[] =[];
  
  constructor(
    private TableauService: TableauService
    ,private PanierService: PanierService) { }
    
  

  ngOnInit(): void {
    this.getTableaux();
  }
  getTableaux(): void {
    this.TableauService.getTableaux()
    .subscribe(tableau => this.tableaux = tableau);
    console.log(this.tableaux)
  }
  addArticle():void {
    this.PanierService.addArticle();
    console.log(this.PanierService.getNbArticle());
    
  }
  removeArticle():void {
    this.PanierService.removeArticle();
  }
}
