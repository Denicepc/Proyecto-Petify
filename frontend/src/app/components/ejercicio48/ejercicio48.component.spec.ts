import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio48Component } from './ejercicio48.component';

describe('Ejercicio48Component', () => {
  let component: Ejercicio48Component;
  let fixture: ComponentFixture<Ejercicio48Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ejercicio48Component]
    });
    fixture = TestBed.createComponent(Ejercicio48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
