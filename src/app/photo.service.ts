import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from './photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  private tableauURL="http://db.clement-lefevre.fr"
  constructor(
    private http:HttpClient
  ) { }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getPhotos(): Observable<Photo[]> {
    console.log(this.http.get<Photo[]>(this.tableauURL).subscribe(tableau => console.log(tableau)));
    return this.http.get<Photo[]>(this.tableauURL)
  }

  getPhoto(id: number): Observable<Photo>{
    return this.http.get<Photo>(this.tableauURL+"/select/"+id);
  }
  getNbPhotos(): Observable<number>{
    return this.http.get<number>(this.tableauURL+"/len");
  }
}
