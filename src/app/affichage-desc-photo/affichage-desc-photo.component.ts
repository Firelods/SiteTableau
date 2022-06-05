import { Component, OnInit } from '@angular/core';
import { Photo } from '../photo';
import { ActivatedRoute } from '@angular/router';
import { PhotoService } from '../photo.service';
@Component({
  selector: 'app-affichage-desc-photo',
  templateUrl: './affichage-desc-photo.component.html',
  styleUrls: ['./affichage-desc-photo.component.css']
})
export class AffichageDescPhotoComponent implements OnInit {
  photoSeul: Photo | undefined;

  constructor(
    private photoService: PhotoService,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    this.getPhoto();
  }
  getPhoto(): void {
    const id = Number(this.route.snapshot.params['id']);
    console.log(id);
    this.photoService.getPhoto(id).subscribe(photo =>this.photoSeul = photo);
  }
}
