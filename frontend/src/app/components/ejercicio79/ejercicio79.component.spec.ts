import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio79Component } from './ejercicio79.component';

describe('Ejercicio79Component', () => {
  let component: Ejercicio79Component;
  let fixture: ComponentFixture<Ejercicio79Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ejercicio79Component]
    });
    fixture = TestBed.createComponent(Ejercicio79Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
