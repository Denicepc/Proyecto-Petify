import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio34int2Component } from './ejercicio34int2.component';

describe('Ejercicio34int2Component', () => {
  let component: Ejercicio34int2Component;
  let fixture: ComponentFixture<Ejercicio34int2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ejercicio34int2Component]
    });
    fixture = TestBed.createComponent(Ejercicio34int2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
