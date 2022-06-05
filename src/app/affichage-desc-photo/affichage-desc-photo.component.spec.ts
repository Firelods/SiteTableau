import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichageDescPhotoComponent } from './affichage-desc-photo.component';

describe('AffichageDescPhotoComponent', () => {
  let component: AffichageDescPhotoComponent;
  let fixture: ComponentFixture<AffichageDescPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffichageDescPhotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichageDescPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
