import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificationDatabaseComponent } from './modification-database.component';

describe('ModificationDatabaseComponent', () => {
  let component: ModificationDatabaseComponent;
  let fixture: ComponentFixture<ModificationDatabaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificationDatabaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificationDatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
