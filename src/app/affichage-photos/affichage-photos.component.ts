import { Component, OnInit } from '@angular/core';
import { Photo } from '../photo';
import { PhotoService } from '../photo.service';
import { PanierService } from '../panier.service';
import { AppComponent } from '../app.component';

declare function animationJS(id:number) :any;
declare function doubleImage(id:number) :any;
declare function correctionImg() :any;
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
    correctionImg();
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
    doubleImage(Article.idINT);
    animationJS(Article.idINT);
  }
}
