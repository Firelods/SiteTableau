import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichagePhotosComponent } from './affichage-photos.component';

describe('AffichagePhotosComponent', () => {
  let component: AffichagePhotosComponent;
  let fixture: ComponentFixture<AffichagePhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffichagePhotosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichagePhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
