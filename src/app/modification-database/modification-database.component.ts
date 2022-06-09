import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Photo } from '../photo';
import { PhotoService } from '../photo.service';
const httpOptions : any    = {
  headers: new HttpHeaders({
    //'Content-Type':  'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET',
    'Access-Control-Allow-Origin': '*'
  })
};
@Component({
  selector: 'app-modification-database',
  templateUrl: './modification-database.component.html',
  styleUrls: ['./modification-database.component.css']
})
export class ModificationDatabaseComponent implements OnInit {
  photo: Photo={auteur:"",titre:"",dimension:"",categorie:"",prix:0,idINT:0};
  imageToSend: string = "";
  formData: any;
  file:File | undefined;
  private photoURL="http://db.clement-lefevre.fr"
  
  constructor(private http:HttpClient,private photoService:PhotoService) { }

  ngOnInit(): void {
    this.photoService.getNbPhotos().subscribe(nb => {this.photo.idINT=nb+1;console.log(nb)});
  }
  onEnterAuteur(auteur: string) { this.photo.auteur = auteur; }
  onEnterTitre(titre: string) { this.photo.titre = titre; }
  onEnterDimension(dimension: string) { this.photo.dimension = dimension; }
  onEnterCategorie(categorie: string) { this.photo.categorie = categorie; }
  onEnterPrix(prix: string) { this.photo.prix = parseInt(prix); }
  

  setImageToSend(event: any){
    this.file = event.target.files[0];
    console.log(this.file);
    this.formData = new FormData();
    console.log(this.formData);
    
    
    
    
  }

  ajouterArticle(): void {
    this.formData.append("titre", this.photo.titre);
    this.formData.append("imgSent", this.file);
    console.log(this.formData.getAll("imgSent"));
    this.http.post(this.photoURL+"/addImage", this.formData).subscribe(tableau => console.log(tableau));
    console.log(this.photo);
    this.http.post<Photo>(this.photoURL+"/add",this.photo).subscribe(tableau => console.log(tableau));
    window.alert("Photo added successfully");
  }
}
