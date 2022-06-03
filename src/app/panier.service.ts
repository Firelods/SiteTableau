import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  nbArticle: number=0;
  constructor() { }
  addArticle(): void {
    this.nbArticle++;
  }
  removeArticle(): void {
    this.nbArticle--;
  }
  getNbArticle(): number {
    return this.nbArticle;
  }
}
