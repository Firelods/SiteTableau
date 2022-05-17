import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichageTableauxComponent } from './affichage-tableaux.component';

describe('AffichageTableauxComponent', () => {
  let component: AffichageTableauxComponent;
  let fixture: ComponentFixture<AffichageTableauxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffichageTableauxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichageTableauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
