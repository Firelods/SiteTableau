import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Photo } from '../photo';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-modification-database',
  templateUrl: './modification-database.component.html',
  styleUrls: ['./modification-database.component.css']
})
export class ModificationDatabaseComponent implements OnInit {
  photo: Photo={auteur:"",titre:"",dimension:"",categorie:"",prix:0,idINT:0};
  private photoURL="http://db.clement-lefevre.fr"
  
  constructor(private http:HttpClient,private photoService:PhotoService) { }

  ngOnInit(): void {
  }
  onEnterAuteur(auteur: string) { this.photo.auteur = auteur; }
  onEnterTitre(titre: string) { this.photo.titre = titre; }
  onEnterDimension(dimension: string) { this.photo.dimension = dimension; }
  onEnterCategorie(categorie: string) { this.photo.categorie = categorie; }
  onEnterPrix(prix: string) { this.photo.prix = parseInt(prix); }
  ajouterArticle(): void {
    console.log(this.photo);
    this.photoService.getNbPhotos().subscribe(nb => {this.photo.idINT=nb+1;});
    this.http.post<Photo>(this.photoURL+"/add",this.photo).subscribe(tableau => console.log(tableau));
    window.alert("Photo added successfully");
  }
}
