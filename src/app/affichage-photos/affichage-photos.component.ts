import { Component, OnInit } from '@angular/core';
import { Photo } from '../photo';
import { PhotoService } from '../photo.service';
import { PanierService } from '../panier.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-affichage-photos',
  templateUrl: './affichage-photos.component.html',
  styleUrls: ['./affichage-photos.component.css']
})
export class AffichagePhotosComponent implements OnInit {
  photos: Photo[] =[];
  constructor(
    private PhotoService: PhotoService
    ,private PanierService: PanierService,private AppComponent: AppComponent) { }
    
  

  ngOnInit(): void {
    this.getPhotos();
  }
  getPhotos(): void {
    this.PhotoService.getPhotos()
    .subscribe(photos => this.photos = photos);
    console.log(this.photos)
  }
  addArticle(Article:Photo):void {
    this.PanierService.addArticle(Article);
    console.log(this.PanierService.getNbArticle());
    this.AppComponent.updatePanier(this.PanierService.getNbArticle());
  }
}
