import { Injectable } from '@angular/core';
import { Photo } from './photo';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  nbArticle: number=0;
  ListeArticle:Photo[] = [];
  constructor() { }
  addArticle(Article:Photo): void {
    this.nbArticle++;
    this.ListeArticle.push(Article);
    console.log(this.ListeArticle);
  }
  removeArticle(Article:Photo): void {
    this.nbArticle--;
    this.ListeArticle.splice(this.getIndiceOfArticle(Article),1);
  }
  getNbArticle(): number {
    return this.nbArticle;
  }
  getIndiceOfArticle(Article:Photo): number {
    return this.ListeArticle.indexOf(Article);
  }
  getArticles(): Photo[] {
    return this.ListeArticle;
  }

  getTotalPanier(): number {
    let total: number = 0;
    for (let i = 0; i < this.ListeArticle.length; i++) {
      total += this.ListeArticle[i].prix;
    }
    return total;
  }
}
