import { Component } from '@angular/core';
import { PanierService } from './panier.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SiteTableaux';
  nbArticle:number = 0;
  constructor(private panier:PanierService) {} 
  ngOnInit() {
    this.nbArticle = this.panier.getNbArticle();
  }
  updatePanier(nbArticle:number): void {
    this.nbArticle = nbArticle;
  }
}
