import { Component, OnInit } from '@angular/core';
import { Tableau } from '../tableau';
import { ActivatedRoute } from '@angular/router';
import { TableauService } from '../tableau.service';
@Component({
  selector: 'app-affichage-desc-tableau',
  templateUrl: './affichage-desc-tableau.component.html',
  styleUrls: ['./affichage-desc-tableau.component.css']
})
export class AffichageDescTableauComponent implements OnInit {
  tableauSeul: Tableau | undefined;

  constructor(
    private tableauService: TableauService,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    this.getTableau();
  }
  getTableau(): void {
    const id = Number(this.route.snapshot.params['id']);
    console.log(id);
    this.tableauService.getTableau(id).subscribe(tableau =>this.tableauSeul = tableau);
  }
}
