import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichageDescTableauComponent } from './affichage-desc-tableau.component';

describe('AffichageDescTableauComponent', () => {
  let component: AffichageDescTableauComponent;
  let fixture: ComponentFixture<AffichageDescTableauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffichageDescTableauComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichageDescTableauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
