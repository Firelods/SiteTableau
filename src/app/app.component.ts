import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { PanierService } from './panier.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('nbArticleUpdated',[
      transition('* => *', [         // when the item is changed
            animate(20, style({ opacity: 0 }) ),
            animate(200, style({ opacity: 1 }) )
        ]),
    ])
  ]
})
export class AppComponent {
  title = 'Christian LEFEVRE Photographies';
  nbArticle:number = 0;
  constructor(private panier:PanierService) {} 
  ngOnInit() {
    this.nbArticle = this.panier.getNbArticle();
  }
  updatePanier(nbArticle:number): void {
    this.nbArticle = nbArticle;
  }
}
