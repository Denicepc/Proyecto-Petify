import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio29Component } from './ejercicio29.component';

describe('Ejercicio29Component', () => {
  let component: Ejercicio29Component;
  let fixture: ComponentFixture<Ejercicio29Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ejercicio29Component]
    });
    fixture = TestBed.createComponent(Ejercicio29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
