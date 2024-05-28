import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjercicioBuscadorComponent } from './ejercicio-buscador.component';

describe('EjercicioBuscadorComponent', () => {
  let component: EjercicioBuscadorComponent;
  let fixture: ComponentFixture<EjercicioBuscadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EjercicioBuscadorComponent]
    });
    fixture = TestBed.createComponent(EjercicioBuscadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
