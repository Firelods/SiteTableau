import { Injectable } from '@angular/core';
import { Tableau } from './tableau';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  nbArticle: number=0;
  ListeArticle:Tableau[] = [];
  constructor() { }
  addArticle(Article:Tableau): void {
    this.nbArticle++;
    this.ListeArticle.push(Article);
    console.log(this.ListeArticle);
  }
  removeArticle(Article:Tableau): void {
    this.nbArticle--;
    this.ListeArticle.splice(this.getIndiceOfArticle(Article),1);
  }
  getNbArticle(): number {
    return this.nbArticle;
  }
  getIndiceOfArticle(Article:Tableau): number {
    return this.ListeArticle.indexOf(Article);
  }
  getArticles(): Tableau[] {
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
