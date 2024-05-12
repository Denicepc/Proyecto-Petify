import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaseHijaComponent } from './clase-hija.component';

describe('ClaseHijaComponent', () => {
  let component: ClaseHijaComponent;
  let fixture: ComponentFixture<ClaseHijaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClaseHijaComponent]
    });
    fixture = TestBed.createComponent(ClaseHijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
