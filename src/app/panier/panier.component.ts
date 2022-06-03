import { Component, OnInit } from '@angular/core';
import { TableauService } from '../tableau.service';
@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  nbArticle: number=0;
  constructor(private TableauService: TableauService) { }

  ngOnInit(): void {
  }
  
}
