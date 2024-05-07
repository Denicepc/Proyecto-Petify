import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio72Component } from './ejercicio72.component';

describe('Ejercicio72Component', () => {
  let component: Ejercicio72Component;
  let fixture: ComponentFixture<Ejercicio72Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ejercicio72Component]
    });
    fixture = TestBed.createComponent(Ejercicio72Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
