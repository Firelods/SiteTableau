import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo.service';
import {PanierService } from '../panier.service';
import { Photo } from '../photo';
@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {


  constructor(private PhotoService: PhotoService,public PanierService: PanierService) { }

  ngOnInit(): void {
  }
  
  
}
