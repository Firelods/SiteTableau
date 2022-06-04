import { Component, OnInit } from '@angular/core';
import { TableauService } from '../tableau.service';
import {PanierService } from '../panier.service';
import { Tableau } from '../tableau';
@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {


  constructor(private TableauService: TableauService,public PanierService: PanierService) { }

  ngOnInit(): void {
  }
  
  
}
