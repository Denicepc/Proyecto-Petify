import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjercicioComprasComponent } from './ejercicio-compras.component';

describe('EjercicioComprasComponent', () => {
  let component: EjercicioComprasComponent;
  let fixture: ComponentFixture<EjercicioComprasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EjercicioComprasComponent]
    });
    fixture = TestBed.createComponent(EjercicioComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
