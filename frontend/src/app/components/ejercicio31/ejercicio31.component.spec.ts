import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio31Component } from './ejercicio31.component';

describe('Ejercicio31Component', () => {
  let component: Ejercicio31Component;
  let fixture: ComponentFixture<Ejercicio31Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ejercicio31Component]
    });
    fixture = TestBed.createComponent(Ejercicio31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
