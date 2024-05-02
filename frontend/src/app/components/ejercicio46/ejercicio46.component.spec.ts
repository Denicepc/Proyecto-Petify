import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio46Component } from './ejercicio46.component';

describe('Ejercicio46Component', () => {
  let component: Ejercicio46Component;
  let fixture: ComponentFixture<Ejercicio46Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ejercicio46Component]
    });
    fixture = TestBed.createComponent(Ejercicio46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
