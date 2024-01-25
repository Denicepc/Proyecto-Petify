import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio13Component } from './ejercicio13.component';

describe('Ejercicio13Component', () => {
  let component: Ejercicio13Component;
  let fixture: ComponentFixture<Ejercicio13Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ejercicio13Component]
    });
    fixture = TestBed.createComponent(Ejercicio13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
