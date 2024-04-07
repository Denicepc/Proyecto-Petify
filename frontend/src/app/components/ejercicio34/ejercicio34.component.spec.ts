import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio34Component } from './ejercicio34.component';

describe('Ejercicio34Component', () => {
  let component: Ejercicio34Component;
  let fixture: ComponentFixture<Ejercicio34Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ejercicio34Component]
    });
    fixture = TestBed.createComponent(Ejercicio34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
