import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio73Component } from './ejercicio73.component';

describe('Ejercicio73Component', () => {
  let component: Ejercicio73Component;
  let fixture: ComponentFixture<Ejercicio73Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ejercicio73Component]
    });
    fixture = TestBed.createComponent(Ejercicio73Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
