import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Tableau } from './tableau';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableauService {
  private tableauURL="http://localhost:8810"
  private test="tet"
  constructor(
    private http:HttpClient
  ) { }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getTableaux(): Observable<Tableau[]> {
    console.log(this.http.get<Tableau[]>(this.tableauURL).subscribe(tableau => console.log(tableau)));
    return this.http.get<Tableau[]>(this.tableauURL)
  }
}
