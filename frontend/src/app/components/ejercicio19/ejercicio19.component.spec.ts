import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio19Component } from './ejercicio19.component';

describe('Ejercicio19Component', () => {
  let component: Ejercicio19Component;
  let fixture: ComponentFixture<Ejercicio19Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ejercicio19Component]
    });
    fixture = TestBed.createComponent(Ejercicio19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
