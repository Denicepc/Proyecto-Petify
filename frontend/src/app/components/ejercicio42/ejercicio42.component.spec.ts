import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio42Component } from './ejercicio42.component';

describe('Ejercicio42Component', () => {
  let component: Ejercicio42Component;
  let fixture: ComponentFixture<Ejercicio42Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ejercicio42Component]
    });
    fixture = TestBed.createComponent(Ejercicio42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
