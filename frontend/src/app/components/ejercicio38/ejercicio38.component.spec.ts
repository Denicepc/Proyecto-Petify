import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio38Component } from './ejercicio38.component';

describe('Ejercicio38Component', () => {
  let component: Ejercicio38Component;
  let fixture: ComponentFixture<Ejercicio38Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ejercicio38Component]
    });
    fixture = TestBed.createComponent(Ejercicio38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
